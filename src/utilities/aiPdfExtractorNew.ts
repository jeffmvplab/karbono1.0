// Servicio de extracción de PDF usando IA
import { ExtractedPrescriptionData, MultiplePrescriptionsData, PrescriptionSummary } from './pdfExtractor';

export interface AIExtractionConfig {
  apiKey: string;
  model: 'gpt-4-vision' | 'claude-3-sonnet';
  maxRetries: number;
  confidenceThreshold: number;
}

export class AIPDFExtractor {
  private config: AIExtractionConfig;

  constructor(config: AIExtractionConfig) {
    this.config = config;
  }

  /**
   * Extrae prescripciones usando IA
   */
  async extractWithAI(file: File): Promise<MultiplePrescriptionsData> {
    try {
      // 1. Convertir PDF a imágenes de alta calidad
      const images = await this.convertPDFToImages(file);
      
      // 2. Procesar con IA
      const extractedData = await this.processWithAI(images);
      
      // 3. Crear resúmenes
      const summaries = this.createSummaries(extractedData);
      
      return {
        prescriptions: extractedData,
        summaries,
        totalCount: extractedData.length
      };
      
    } catch (error) {
      console.error('Error en extracción con IA:', error);
      throw error;
    }
  }

  private async convertPDFToImages(file: File): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const arrayBuffer = event.target?.result as ArrayBuffer;
          
          // Usar pdf.js para convertir a imágenes
          const pdfjsLib = await import('pdfjs-dist');
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          const images: string[] = [];
          
          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d')!;
            
            const viewport = page.getViewport({ scale: 2.0 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            await page.render({
              canvasContext: context,
              viewport: viewport
            }).promise;
            
            images.push(canvas.toDataURL('image/png'));
          }
          
          resolve(images);
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  }

  private async processWithAI(images: string[]): Promise<ExtractedPrescriptionData[]> {
    const allPrescriptions: ExtractedPrescriptionData[] = [];
    
    for (const image of images) {
      const prompt = this.createExtractionPrompt();
      
      try {
        const response = await this.callAIAPI(image, prompt);
        const prescriptions = this.parseAIResponse(response);
        allPrescriptions.push(...prescriptions);
      } catch (error) {
        console.error('Error procesando imagen con IA:', error);
        // Continuar con la siguiente imagen
      }
    }
    
    return this.deduplicatePrescriptions(allPrescriptions);
  }

  private createExtractionPrompt(): string {
    return `
    Analiza esta imagen de una prescripción médica de nutrición parenteral.
    Extrae TODOS los datos estructurados en formato JSON exacto.
    
    CAMPOS REQUERIDOS:
    - Información del paciente: nombrePaciente, numIdentificacion, edad, tipoEdad, peso, ips, servicio, ubicacion, cama, tipoPaciente, diagnostico
    - Parámetros: volumen, tiempoInfusion, velocidadInfusion
    - Macronutrientes: aminoacidos, requerimientoAminoacidos, lipidos, requerimientoLipidos, dextrosa, requerimientoDextrosa, omegaven, dipeptiven
    - Micronutrientes: sodioTotal, potasioTotal, calcio, magnesio, fosfato, requerimientoFosfato, elementosTraza, requerimientoElementosTraza, vitaminasHidrosolubles, requerimientoVitaminasHidrosolubles, vitaminasLiposolubles, requerimientoVitaminasLiposolubles, vitaminasC, acidoFolico
    - Configuración: filtro, equipoFotosensible, viaAdministracion, overfill
    
    RESPONDE SOLO CON JSON VÁLIDO:
    {
      "prescriptions": [
        {
          "nombrePaciente": "string",
          "numIdentificacion": "string",
          "edad": "string",
          "tipoEdad": "string",
          "peso": "string"
        }
      ]
    }
    
    Si no encuentras un campo, usa string vacío "".
    Si hay múltiples prescripciones, incluye todas en el array.
    `;
  }

  private async callAIAPI(image: string, prompt: string): Promise<string> {
    if (this.config.model === 'gpt-4-vision') {
      return await this.callOpenAI(image, prompt);
    } else if (this.config.model === 'claude-3-sonnet') {
      return await this.callClaude(image, prompt);
    }
    throw new Error('Modelo no soportado');
  }

  private async callOpenAI(image: string, prompt: string): Promise<string> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4-vision-preview',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              { type: 'image_url', image_url: { url: image } }
            ]
          }
        ],
        max_tokens: 2000
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  }

  private async callClaude(image: string, prompt: string): Promise<string> {
    // Implementar llamada a Claude API
    throw new Error('Claude no implementado aún');
  }

  private parseAIResponse(response: string): ExtractedPrescriptionData[] {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('No se encontró JSON válido');
      
      const parsed = JSON.parse(jsonMatch[0]);
      return parsed.prescriptions || [];
    } catch (error) {
      console.error('Error parseando respuesta IA:', error);
      return [];
    }
  }

  private deduplicatePrescriptions(prescriptions: ExtractedPrescriptionData[]): ExtractedPrescriptionData[] {
    const seen = new Set<string>();
    return prescriptions.filter(prescription => {
      const key = `${prescription.nombrePaciente}-${prescription.numIdentificacion}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  private createSummaries(prescriptions: ExtractedPrescriptionData[]): PrescriptionSummary[] {
    return prescriptions.map((prescription, index) => ({
      id: `ai-prescription-${index + 1}`,
      nombrePaciente: prescription.nombrePaciente || 'Sin nombre',
      numIdentificacion: prescription.numIdentificacion || '',
      edad: `${prescription.edad || ''} ${prescription.tipoEdad || ''}`.trim(),
      peso: prescription.peso ? `${prescription.peso} kg` : '',
      ips: prescription.ips || '',
      servicio: prescription.servicio || '',
      diagnostico: prescription.diagnostico || '',
      fechaCreacion: new Date().toLocaleDateString('es-ES'),
      consecutivo: `IA-${String(index + 1).padStart(4, '0')}`
    }));
  }
}
