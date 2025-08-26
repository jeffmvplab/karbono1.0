// Extractor de PDF optimizado con IA para prescripciones médicas
export interface ExtractedPrescriptionData {
  // Información del paciente
  nombrePaciente?: string;
  numIdentificacion?: string;
  edad?: string;
  tipoEdad?: string;
  peso?: string;
  ips?: string;
  servicio?: string;
  ubicacion?: string;
  cama?: string;
  tipoPaciente?: string;
  diagnostico?: string;
  
  // Información de la prescripción
  volumen?: string;
  tiempoInfusion?: string;
  velocidadInfusion?: string;
  
  // Macronutrientes
  aminoacidos?: string;
  requerimientoAminoacidos?: string;
  lipidos?: string;
  requerimientoLipidos?: string;
  dextrosa?: string;
  requerimientoDextrosa?: string;
  omegaven?: string;
  dipeptiven?: string;
  
  // Micronutrientes
  sodioTotal?: string;
  potasioTotal?: string;
  calcio?: string;
  magnesio?: string;
  fosfato?: string;
  requerimientoFosfato?: string;
  elementosTraza?: string;
  requerimientoElementosTraza?: string;
  vitaminasHidrosolubles?: string;
  requerimientoVitaminasHidrosolubles?: string;
  vitaminasLiposolubles?: string;
  requerimientoVitaminasLiposolubles?: string;
  vitaminasC?: string;
  acidoFolico?: string;
  
  // Configuración
  filtro?: string;
  equipoFotosensible?: string;
  viaAdministracion?: string;
  overfill?: string;
}

export interface PrescriptionSummary {
  id: string;
  nombrePaciente: string;
  numIdentificacion: string;
  edad: string;
  peso: string;
  diagnostico: string;
  volumen: string;
}

export interface MultiplePrescriptionsData {
  prescriptions: ExtractedPrescriptionData[];
  summaries: PrescriptionSummary[];
  totalCount: number;
}

export interface OptimizedAIConfig {
  apiKey: string;
  model: 'gpt-4-vision' | 'claude-3-sonnet' | 'gpt-4o';
  maxRetries: number;
  confidenceThreshold: number;
  cacheEnabled: boolean;
  maxConcurrentRequests: number;
  timeoutMs: number;
}

export class OptimizedAIPDFExtractor {
  private config: OptimizedAIConfig;
  private cache: Map<string, ExtractedPrescriptionData[]> = new Map();

           constructor(config: OptimizedAIConfig) {
           this.config = config;
         }

  /**
   * Extrae prescripciones con IA optimizada
   */
  async extractWithAI(file: File): Promise<MultiplePrescriptionsData> {
    try {
      // 1. Verificar caché
      const fileHash = await this.generateFileHash(file);
      if (this.config.cacheEnabled && this.cache.has(fileHash)) {
        console.log('Usando datos en caché');
        const cachedData = this.cache.get(fileHash)!;
        return this.createResultFromPrescriptions(cachedData);
      }

      // 2. Convertir PDF a imágenes optimizadas
      console.log('Convirtiendo PDF a imágenes...');
      const images = await this.convertPDFToOptimizedImages(file);
      console.log(`PDF convertido a ${images.length} imágenes`);
      
      // 3. Procesar con IA usando cola de requests
      console.log('Procesando imágenes con IA...');
      const extractedData = await this.processWithQueuedAI(images);
      console.log(`Extraídos ${extractedData.length} prescripciones`);
      
      // 4. Guardar en caché
      if (this.config.cacheEnabled) {
        this.cache.set(fileHash, extractedData);
      }

      return this.createResultFromPrescriptions(extractedData);
      
    } catch (error) {
      console.error('Error en extracción optimizada:', error);
      throw new Error(`Error al procesar PDF: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  }

  /**
   * Convierte PDF a imágenes optimizadas
   */
  private async convertPDFToOptimizedImages(file: File): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const arrayBuffer = event.target?.result as ArrayBuffer;
          
          // Usar pdf.js para convertir a imágenes optimizadas
          const pdfjsLib = await import('pdfjs-dist');
          
          // Configurar el worker de pdf.js
          if (typeof window !== 'undefined') {
            // Usar un worker vacío para evitar problemas
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'data:application/javascript,';
          }
          
          const pdf = await pdfjsLib.getDocument({ 
            data: arrayBuffer
          }).promise;
          
          const images: string[] = [];
          
          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d')!;
            
            // Optimizar escala según el contenido
            const viewport = page.getViewport({ scale: 1.5 }); // Escala optimizada
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            await page.render({
              canvasContext: context,
              viewport: viewport
            }).promise;
            
            // Comprimir imagen para reducir tamaño
            const compressedImage = await this.compressImage(canvas);
            images.push(compressedImage);
          }
          
          resolve(images);
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  }

  /**
   * Procesa imágenes con IA usando cola de requests
   */
  private async processWithQueuedAI(images: string[]): Promise<ExtractedPrescriptionData[]> {
    const allPrescriptions: ExtractedPrescriptionData[] = [];
    
    // Procesar imágenes en lotes para evitar sobrecarga
    const batchSize = this.config.maxConcurrentRequests;
    for (let i = 0; i < images.length; i += batchSize) {
      const batch = images.slice(i, i + batchSize);
      const batchPromises = batch.map(image => this.processSingleImageWithAI(image));
      
      const batchResults = await Promise.allSettled(batchPromises);
      
      batchResults.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          allPrescriptions.push(...result.value);
        } else {
          console.error(`Error procesando imagen ${i + index}:`, result.reason);
        }
      });
    }
    
    return this.deduplicatePrescriptions(allPrescriptions);
  }

  /**
   * Procesa una sola imagen con IA
   */
  private async processSingleImageWithAI(image: string): Promise<ExtractedPrescriptionData[]> {
    const prompt = this.createOptimizedPrompt();
    
    try {
      const response = await this.callAIAPIWithTimeout(image, prompt);
      return this.parseAIResponse(response);
    } catch (error) {
      console.error('Error procesando imagen con IA:', error);
      return [];
    }
  }

  /**
   * Llama a la API de IA con timeout
   */
  private async callAIAPIWithTimeout(image: string, prompt: string): Promise<string> {
    console.log(`Iniciando llamada a IA con timeout de ${this.config.timeoutMs}ms`);
    
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        console.log('Timeout alcanzado en llamada a IA');
        reject(new Error(`Timeout en llamada a IA después de ${this.config.timeoutMs}ms`));
      }, this.config.timeoutMs);
    });

    const apiPromise = this.callAIAPI(image, prompt);
    
    try {
      const result = await Promise.race([apiPromise, timeoutPromise]);
      console.log('Llamada a IA completada exitosamente');
      return result;
    } catch (error) {
      console.error('Error en llamada a IA:', error);
      throw error;
    }
  }

  /**
   * Prompt optimizado para mejor extracción
   */
  private createOptimizedPrompt(): string {
    return `
    Analiza esta imagen de una prescripción médica de nutrición parenteral.
    Extrae TODOS los datos estructurados en formato JSON exacto.
    
    INSTRUCCIONES ESPECÍFICAS:
    1. Busca información del paciente: nombre, identificación, edad, peso, IPS, servicio, ubicación, cama, diagnóstico
    2. Extrae parámetros de infusión: volumen, tiempo, velocidad
    3. Identifica macronutrientes: aminoácidos, lípidos, dextrosa con sus requerimientos
    4. Detecta micronutrientes: sodio, potasio, calcio, magnesio, fosfato, vitaminas
    5. Configuración: filtro, equipo fotosensible, vía administración, overfill
    
    FORMATO JSON EXACTO:
    {
      "prescriptions": [
        {
          "nombrePaciente": "string",
          "numIdentificacion": "string", 
          "edad": "string",
          "tipoEdad": "string",
          "peso": "string",
          "ips": "string",
          "servicio": "string",
          "ubicacion": "string",
          "cama": "string",
          "tipoPaciente": "string",
          "diagnostico": "string",
          "volumen": "string",
          "tiempoInfusion": "string",
          "velocidadInfusion": "string",
          "aminoacidos": "string",
          "requerimientoAminoacidos": "string",
          "lipidos": "string",
          "requerimientoLipidos": "string",
          "dextrosa": "string",
          "requerimientoDextrosa": "string",
          "omegaven": "string",
          "dipeptiven": "string",
          "sodioTotal": "string",
          "potasioTotal": "string",
          "calcio": "string",
          "magnesio": "string",
          "fosfato": "string",
          "requerimientoFosfato": "string",
          "elementosTraza": "string",
          "requerimientoElementosTraza": "string",
          "vitaminasHidrosolubles": "string",
          "requerimientoVitaminasHidrosolubles": "string",
          "vitaminasLiposolubles": "string",
          "requerimientoVitaminasLiposolubles": "string",
          "vitaminasC": "string",
          "acidoFolico": "string",
          "filtro": "string",
          "equipoFotosensible": "string",
          "viaAdministracion": "string",
          "overfill": "string"
        }
      ]
    }
    
    REGLAS:
    - Si no encuentras un campo, usa string vacío ""
    - Si hay múltiples prescripciones, incluye todas en el array
    - Mantén la precisión en valores numéricos
    - Respeta el formato exacto del JSON
    `;
  }

  /**
   * Llama a la API de IA según el modelo configurado
   */
  private async callAIAPI(image: string, prompt: string): Promise<string> {
    switch (this.config.model) {
      case 'gpt-4-vision':
        return await this.callOpenAI(image, prompt);
      case 'claude-3-sonnet':
        return await this.callClaude(image, prompt);
      case 'gpt-4o':
        return await this.callOpenAIGPT4O(image, prompt);
      default:
        throw new Error('Modelo de IA no soportado');
    }
  }

  /**
   * Llama a OpenAI GPT-4 Vision
   */
  private async callOpenAI(image: string, prompt: string): Promise<string> {
    console.log('Iniciando llamada a OpenAI GPT-4 Vision');
    
    try {
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
          max_tokens: 2000,
          temperature: 0.1 // Baja temperatura para mayor consistencia
        })
      });

      console.log(`Respuesta de OpenAI: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error detallado de OpenAI:', errorText);
        throw new Error(`Error OpenAI: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Respuesta de OpenAI procesada exitosamente');
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error en llamada a OpenAI:', error);
      throw error;
    }
  }

  /**
   * Llama a Claude 3 Sonnet
   */
  private async callClaude(image: string, prompt: string): Promise<string> {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              { type: 'image', source: { type: 'base64', media_type: 'image/png', data: image.split(',')[1] } }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Error Claude: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.content[0].text;
  }

  /**
   * Llama a OpenAI GPT-4o
   */
  private async callOpenAIGPT4O(image: string, prompt: string): Promise<string> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              { type: 'image_url', image_url: { url: image } }
            ]
          }
        ],
        max_tokens: 2000,
        temperature: 0.1
      })
    });

    if (!response.ok) {
      throw new Error(`Error OpenAI GPT-4o: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }

  /**
   * Parsea la respuesta de IA
   */
  private parseAIResponse(response: string): ExtractedPrescriptionData[] {
    try {
      // Limpiar respuesta de posibles caracteres extra
      const cleanedResponse = response.replace(/```json\n?|\n?```/g, '').trim();
      const parsed = JSON.parse(cleanedResponse);
      
      if (parsed.prescriptions && Array.isArray(parsed.prescriptions)) {
        return parsed.prescriptions;
      }
      
      return [];
    } catch (error) {
      console.error('Error parseando respuesta de IA:', error);
      return [];
    }
  }

  /**
   * Elimina prescripciones duplicadas
   */
  private deduplicatePrescriptions(prescriptions: ExtractedPrescriptionData[]): ExtractedPrescriptionData[] {
    const seen = new Set<string>();
    return prescriptions.filter(prescription => {
      const key = `${prescription.nombrePaciente}-${prescription.numIdentificacion}-${prescription.edad}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  /**
   * Comprime imagen para reducir tamaño
   */
  private async compressImage(canvas: HTMLCanvasElement): Promise<string> {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(blob!);
      }, 'image/jpeg', 0.8); // Comprimir a JPEG con 80% de calidad
    });
  }

  /**
   * Genera hash del archivo para caché
   */
  private async generateFileHash(file: File): Promise<string> {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Crea resultado final con resúmenes
   */
  private createResultFromPrescriptions(prescriptions: ExtractedPrescriptionData[]): MultiplePrescriptionsData {
    const summaries: PrescriptionSummary[] = prescriptions.map((prescription, index) => ({
      id: `prescription-${index}`,
      nombrePaciente: prescription.nombrePaciente || 'Sin nombre',
      numIdentificacion: prescription.numIdentificacion || 'Sin ID',
      edad: prescription.edad || 'Sin edad',
      peso: prescription.peso || 'Sin peso',
      diagnostico: prescription.diagnostico || 'Sin diagnóstico',
      volumen: prescription.volumen || 'Sin volumen'
    }));

    return {
      prescriptions,
      summaries,
      totalCount: prescriptions.length
    };
  }

  /**
   * Limpia el caché
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Obtiene estadísticas del caché
   */
  getCacheStats(): { size: number; hitRate: number } {
    return {
      size: this.cache.size,
      hitRate: 0 // Implementar cálculo de hit rate si es necesario
    };
  }
} 