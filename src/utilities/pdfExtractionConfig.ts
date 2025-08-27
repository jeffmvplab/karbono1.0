// Configuración centralizada para extracción de PDFs con IA
export interface PDFExtractionConfig {
  // Configuración de IA
  ai: {
    enabled: boolean;
    apiKey: string;
    model: 'gpt-4-vision' | 'claude-3-sonnet' | 'gpt-4o';
    maxRetries: number;
    confidenceThreshold: number;
    timeoutMs: number;
    maxConcurrentRequests: number;
  };
  
  // Configuración de caché
  cache: {
    enabled: boolean;
    maxSize: number;
    ttlMs: number;
  };
  
  // Configuración de procesamiento
  processing: {
    maxFileSize: number; // en bytes
    supportedFormats: string[];
    imageQuality: number; // 0-1
    ocrEnabled: boolean;
    ocrLanguage: string;
  };
  
  // Configuración de validación
  validation: {
    requiredFields: string[];
    minConfidence: number;
    autoCorrect: boolean;
  };
  
  // Configuración de UI
  ui: {
    showProgress: boolean;
    enablePreview: boolean;
    maxPreviewItems: number;
    autoApplyOnSingle: boolean;
  };
}

export const DEFAULT_PDF_EXTRACTION_CONFIG: PDFExtractionConfig = {
  ai: {
    enabled: true,
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
    model: 'gpt-4-vision',
    maxRetries: 2,
    confidenceThreshold: 0.8,
    timeoutMs: 15000,
    maxConcurrentRequests: 2
  },
  cache: {
    enabled: true,
    maxSize: 100,
    ttlMs: 24 * 60 * 60 * 1000 // 24 horas
  },
  processing: {
    maxFileSize: 10 * 1024 * 1024, // 10MB
    supportedFormats: ['.pdf'],
    imageQuality: 0.8,
    ocrEnabled: true,
    ocrLanguage: 'spa'
  },
  validation: {
    requiredFields: ['nombrePaciente', 'numIdentificacion', 'edad', 'peso'],
    minConfidence: 0.7,
    autoCorrect: true
  },
  ui: {
    showProgress: true,
    enablePreview: true,
    maxPreviewItems: 10,
    autoApplyOnSingle: true
  }
};

export class PDFExtractionConfigManager {
  private config: PDFExtractionConfig;
  private listeners: Array<(config: PDFExtractionConfig) => void> = [];

  constructor(initialConfig?: Partial<PDFExtractionConfig>) {
    this.config = {
      ...DEFAULT_PDF_EXTRACTION_CONFIG,
      ...initialConfig
    };
  }

  /**
   * Obtiene la configuración actual
   */
  getConfig(): PDFExtractionConfig {
    return { ...this.config };
  }

  /**
   * Actualiza la configuración
   */
  updateConfig(updates: Partial<PDFExtractionConfig>): void {
    this.config = {
      ...this.config,
      ...updates
    };
    this.notifyListeners();
  }

  /**
   * Actualiza configuración específica de IA
   */
  updateAIConfig(aiConfig: Partial<PDFExtractionConfig['ai']>): void {
    this.config.ai = {
      ...this.config.ai,
      ...aiConfig
    };
    this.notifyListeners();
  }

  /**
   * Verifica si la IA está habilitada
   */
  isAIEnabled(): boolean {
    const enabled = this.config.ai.enabled && !!this.config.ai.apiKey;
    console.log('Verificando IA:', {
      enabled: this.config.ai.enabled,
      hasApiKey: !!this.config.ai.apiKey,
      apiKeyLength: this.config.ai.apiKey?.length,
      result: enabled
    });
    return enabled;
  }

  /**
   * Obtiene la configuración de IA
   */
  getAIConfig() {
    return { ...this.config.ai };
  }

  /**
   * Valida la configuración
   */
  validateConfig(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (this.config.ai.enabled && !this.config.ai.apiKey) {
      errors.push('API Key requerida cuando IA está habilitada');
    }

    if (this.config.processing.maxFileSize <= 0) {
      errors.push('Tamaño máximo de archivo debe ser mayor a 0');
    }

    if (this.config.validation.minConfidence < 0 || this.config.validation.minConfidence > 1) {
      errors.push('Confianza mínima debe estar entre 0 y 1');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Registra un listener para cambios de configuración
   */
  addListener(listener: (config: PDFExtractionConfig) => void): () => void {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  /**
   * Notifica a los listeners sobre cambios
   */
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.config));
  }

  /**
   * Resetea la configuración a valores por defecto
   */
  resetToDefaults(): void {
    this.config = { ...DEFAULT_PDF_EXTRACTION_CONFIG };
    this.notifyListeners();
  }

  /**
   * Exporta la configuración
   */
  exportConfig(): string {
    return JSON.stringify(this.config, null, 2);
  }

  /**
   * Importa configuración
   */
  importConfig(configString: string): { success: boolean; error?: string } {
    try {
      const importedConfig = JSON.parse(configString);
      this.config = {
        ...DEFAULT_PDF_EXTRACTION_CONFIG,
        ...importedConfig
      };
      this.notifyListeners();
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Error desconocido' 
      };
    }
  }
}

// Instancia global del manager de configuración
export const pdfExtractionConfigManager = new PDFExtractionConfigManager(); 