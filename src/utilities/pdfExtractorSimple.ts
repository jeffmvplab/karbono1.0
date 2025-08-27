// Wrapper simple del extractor de PDF para mantener compatibilidad
import { PDFExtractor, ExtractedPrescriptionData, MultiplePrescriptionsData } from './pdfExtractor';

/**
 * Clase simple que actúa como wrapper del PDFExtractor principal
 * Mantiene la compatibilidad con el código existente
 */
export class PDFExtractorSimple {
  /**
   * Extrae una sola prescripción de un PDF
   */
  static async extractFromPDF(file: File): Promise<ExtractedPrescriptionData> {
    try {
      return await PDFExtractor.extractFromPDF(file);
    } catch (error) {
      console.error('Error en extracción simple:', error);
      throw error;
    }
  }

  /**
   * Extrae múltiples prescripciones de un PDF
   */
  static async extractMultiplePrescriptionsFromPDF(file: File): Promise<MultiplePrescriptionsData> {
    try {
      return await PDFExtractor.extractMultiplePrescriptionsFromPDF(file);
    } catch (error) {
      console.error('Error en extracción múltiple simple:', error);
      throw error;
    }
  }

  /**
   * Valida los datos extraídos
   */
  static validateExtractedData(data: ExtractedPrescriptionData): boolean {
    return PDFExtractor.validateExtractedData(data);
  }

  /**
   * Normaliza los datos extraídos
   */
  static normalizeData(data: ExtractedPrescriptionData): ExtractedPrescriptionData {
    return PDFExtractor.normalizeData(data);
  }
}

// Re-exportar las interfaces para mantener compatibilidad
export type { ExtractedPrescriptionData, MultiplePrescriptionsData, PrescriptionSummary } from './pdfExtractor'; 