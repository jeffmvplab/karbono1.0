// Archivo de prueba para el extractor de PDF
// Este archivo se puede ejecutar para verificar la funcionalidad

import { PDFExtractor } from './pdfExtractor';

// Función de prueba para verificar la extracción
export async function testPDFExtraction() {
  console.log('🧪 Iniciando pruebas del extractor de PDF...');
  
  try {
    // Crear un archivo de prueba simulado
    const testFile = new File([''], 'test.pdf', { type: 'application/pdf' });
    
    console.log('📄 Probando extracción de PDF único...');
    const singleResult = await PDFExtractor.extractFromPDF(testFile);
    console.log('✅ Extracción única completada:', singleResult);
    
    console.log('📄 Probando extracción de múltiples prescripciones...');
    const multipleResult = await PDFExtractor.extractMultiplePrescriptionsFromPDF(testFile);
    console.log('✅ Extracción múltiple completada:', multipleResult);
    
    console.log('🎉 Todas las pruebas completadas exitosamente');
    
  } catch (error) {
    console.error('❌ Error en las pruebas:', error);
  }
}

// Función para probar patrones de detección
export function testPatternDetection() {
  console.log('🔍 Probando patrones de detección...');
  
  const testText = `
    DATOS DEL PACIENTE
    Paciente: RAMIREZ MANRIQUE, HIJA DE ANA MARIA
    Identificación: NV-23121310770633
    Edad: 4 Días
    Peso: 1.74 kg
    IPS: Clínica El Rosario
    Servicio: UCI NEONATOS TESORO
    Diagnóstico: P220: SINDROME DE DIFICULTAD RESPIRATORIA DEL RECIEN NACIDO
    
    DATOS DEL PACIENTE
    Paciente: VILLALBA MARZOLA, VICTOR JOSE
    Identificación: RC-1035021507
    Edad: 7 Meses
    Peso: 5.1 kg
    IPS: Clínica El Rosario
    Servicio: CUARTO PISO TESORO
    Diagnóstico: K564: OTRAS OBSTRUCCIONES DEL INTESTINO
  `;
  
  // Importar las funciones privadas para testing
  const extractor = PDFExtractor as any;
  const sections = extractor.splitTextIntoPrescriptionSections(testText);
  console.log('📋 Secciones detectadas:', sections.length);
  
  const prescriptions = extractor.detectPrescriptionsInText(testText);
  console.log('💊 Prescripciones detectadas:', prescriptions.length);
  
  prescriptions.forEach((prescription: any, index: number) => {
    console.log(`📝 Prescripción ${index + 1}:`, {
      nombre: prescription.nombrePaciente,
      id: prescription.numIdentificacion,
      edad: `${prescription.edad} ${prescription.tipoEdad}`,
      peso: prescription.peso
    });
  });
}

// Exportar funciones para uso en desarrollo
if (typeof window !== 'undefined') {
  (window as any).testPDFExtraction = testPDFExtraction;
  (window as any).testPatternDetection = testPatternDetection;
} 