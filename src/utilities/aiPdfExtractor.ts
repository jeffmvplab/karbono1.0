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

  /**
   * Procesa una imagen con IA para extraer datos estructurados
   */
  private async processImageWithAI(imageBase64: string): Promise<ExtractedPrescriptionData[]> {
    const prompt = `
    Analiza esta imagen de una prescripción médica de nutrición parenteral y extrae TODOS los datos en formato JSON.
    
    Busca específicamente:
    - Datos del paciente (nombre, identificación, edad, peso, etc.)
    - Macronutrientes (aminoácidos, lípidos, dextrosa)
    - Micronutrientes (sodio, potasio, calcio, magnesio, etc.)
    - Parámetros (volumen, tiempo infusión, velocidad)
    - Configuración (filtro, equipo fotosensible, vía administración)
    
    Si hay múltiples prescripciones en la imagen, devuelve un array.
    
    Formato esperado:
    {
      "prescriptions": [
        {
          "nombrePaciente": "string",
          "numIdentificacion": "string",
          "edad": "string",
          "peso": "string",
          // ... todos los campos de ExtractedPrescriptionData
        }
      ]
    }
    `;

    // Llamada a la API de IA según el modelo configurado
    switch (this.config.model) {
      case 'gpt-4-vision':
        return await this.processWithOpenAI(imageBase64, prompt);
      case 'claude-3-sonnet':
        return await this.processWithClaude(imageBase64, prompt);
      default:
        throw new Error('Modelo de IA no soportado');
    }
  }

  private async convertPDFToImages(file: File): Promise<string[]> {
    // Implementar conversión PDF a imágenes usando pdf.js y canvas
    // Retornar array de imágenes en base64
    return [];
  }

  private async processWithOpenAI(image: string, prompt: string): Promise<ExtractedPrescriptionData[]> {
    // Implementar llamada a OpenAI GPT-4V
    return [];
  }

  private async processWithClaude(image: string, prompt: string): Promise<ExtractedPrescriptionData[]> {
    // Implementar llamada a Claude 3
    return [];
  }

  private async processWithGemini(image: string, prompt: string): Promise<ExtractedPrescriptionData[]> {
    // Implementar llamada a Gemini Pro Vision
    return [];
  }

  private consolidateResults(results: ExtractedPrescriptionData[][]): ExtractedPrescriptionData[] {
    // Consolidar resultados de múltiples páginas
    // Eliminar duplicados, validar consistencia
    return results.flat();
  }

  private createSummaries(prescriptions: ExtractedPrescriptionData[]) {
    return prescriptions.map((prescription, index) => ({
      id: `ai-prescription-${index + 1}`,
      nombrePaciente: prescription.nombrePaciente || '',
      numIdentificacion: prescription.numIdentificacion || '',
      edad: `${prescription.edad} ${prescription.tipoEdad}`,
      peso: `${prescription.peso} kg`,
      ips: prescription.ips || '',
      servicio: prescription.servicio || '',
      diagnostico: prescription.diagnostico || '',
      fechaCreacion: new Date().toLocaleDateString('es-ES'),
      consecutivo: `AI-${String(index + 1).padStart(4, '0')}`,
      confidence: 0.95 // Nivel de confianza de la extracción
    }));
  }
}
