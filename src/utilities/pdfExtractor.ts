// Utilidad para extraer datos de PDFs de prescripciones médicas
// Implementación usando pdf.js y tesseract.js para detección real

// Solo importar en el lado del cliente
let pdfjsLib: any;
let Tesseract: any;

// Función para inicializar las librerías
async function initializeLibraries() {
  if (typeof window === 'undefined') return;
  
  try {
    // Importar pdf.js
    const pdfModule = await import('pdfjs-dist');
    pdfjsLib = pdfModule;
    
    // Configurar pdf.js para modo sincrónico sin worker
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'data:application/javascript,';
    
    console.log('pdf.js inicializado correctamente');
  } catch (error) {
    console.error('Error inicializando pdf.js:', error);
  }
  
  try {
    // Importar tesseract.js
    const tesseractModule = await import('tesseract.js');
    Tesseract = tesseractModule.default;
    console.log('Tesseract.js inicializado correctamente');
  } catch (error) {
    console.error('Error inicializando Tesseract.js:', error);
  }
}

// Inicializar las librerías cuando se carga el módulo
if (typeof window !== 'undefined') {
  initializeLibraries();
}

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
  ips: string;
  servicio: string;
  diagnostico: string;
  fechaCreacion?: string;
  consecutivo?: string;
}

export interface MultiplePrescriptionsData {
  prescriptions: ExtractedPrescriptionData[];
  summaries: PrescriptionSummary[];
  totalCount: number;
}

export class PDFExtractor {
  /**
   * Extrae datos de un archivo PDF de prescripción
   * @param file - Archivo PDF
   * @returns Promise con los datos extraídos
   */
  static async extractFromPDF(file: File): Promise<ExtractedPrescriptionData> {
    // Verificar que estamos en el cliente
    if (typeof window === 'undefined') {
      throw new Error('Esta función solo está disponible en el cliente');
    }
    
    // Esperar a que las librerías estén inicializadas
    if (!pdfjsLib) {
      await initializeLibraries();
      if (!pdfjsLib) {
        throw new Error('pdf.js no está disponible. Intente recargar la página.');
      }
    }
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (event) => {
        try {
          const arrayBuffer = event.target?.result as ArrayBuffer;
          const data = await this.processPDFBuffer(arrayBuffer);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = () => {
        reject(new Error('Error al leer el archivo PDF'));
      };
      
      reader.readAsArrayBuffer(file);
    });
  }

  /**
   * Extrae múltiples prescripciones de un archivo PDF
   * @param file - Archivo PDF
   * @returns Promise con múltiples prescripciones extraídas
   */
  static async extractMultiplePrescriptionsFromPDF(file: File): Promise<MultiplePrescriptionsData> {
    // Verificar que estamos en el cliente
    if (typeof window === 'undefined') {
      throw new Error('Esta función solo está disponible en el cliente');
    }
    
    // Esperar a que las librerías estén inicializadas
    if (!pdfjsLib) {
      await initializeLibraries();
      if (!pdfjsLib) {
        throw new Error('pdf.js no está disponible. Intente recargar la página.');
      }
    }
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (event) => {
        try {
          const arrayBuffer = event.target?.result as ArrayBuffer;
          const data = await this.processMultiplePrescriptionsBuffer(arrayBuffer);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = () => {
        reject(new Error('Error al leer el archivo PDF'));
      };
      
      reader.readAsArrayBuffer(file);
    });
  }

  /**
   * Procesa el buffer del PDF y extrae la información
   * @param arrayBuffer - Buffer del PDF
   * @returns Datos extraídos
   */
  private static async processPDFBuffer(arrayBuffer: ArrayBuffer): Promise<ExtractedPrescriptionData> {
    try {
      // Verificar que pdfjsLib esté disponible
      if (!pdfjsLib) {
        throw new Error('pdf.js no está disponible');
      }
      
      console.log('Iniciando procesamiento de PDF...');
      
      // Cargar el PDF usando pdf.js con timeout
      const loadingTask = pdfjsLib.getDocument({ 
        data: arrayBuffer
      });
      
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;
      
      console.log(`Procesando PDF con ${numPages} páginas`);
      
      let allText = '';
      
      // Extraer texto de todas las páginas
      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(' ');
        allText += pageText + '\n';
        
        console.log(`Página ${pageNum}: ${pageText.length} caracteres extraídos`);
      }
      
      // Si no hay texto suficiente, intentar OCR
      if (allText.trim().length < 100) {
        console.log('Texto insuficiente, intentando OCR...');
        allText = await this.performOCR(arrayBuffer);
      }
      
      // Extraer datos de la primera prescripción encontrada
      const prescriptions = this.detectPrescriptionsInText(allText);
      
      if (prescriptions.length > 0) {
        return prescriptions[0]; // Retornar la primera prescripción
      }
      
      // Si no se detectó ninguna prescripción, retornar datos por defecto
      return {
        nombrePaciente: '',
        numIdentificacion: '',
        edad: '',
        tipoEdad: '',
        peso: '',
        ips: '',
        servicio: '',
        ubicacion: '',
        cama: '',
        tipoPaciente: '',
        diagnostico: '',
        volumen: '',
        tiempoInfusion: '',
        velocidadInfusion: '',
        aminoacidos: '',
        requerimientoAminoacidos: '',
        lipidos: '',
        requerimientoLipidos: '',
        dextrosa: '',
        requerimientoDextrosa: '',
        omegaven: '',
        dipeptiven: '',
        sodioTotal: '',
        potasioTotal: '',
        calcio: '',
        magnesio: '',
        fosfato: '',
        requerimientoFosfato: '',
        elementosTraza: '',
        requerimientoElementosTraza: '',
        vitaminasHidrosolubles: '',
        requerimientoVitaminasHidrosolubles: '',
        vitaminasLiposolubles: '',
        requerimientoVitaminasLiposolubles: '',
        vitaminasC: '',
        acidoFolico: '',
        filtro: 'Si',
        equipoFotosensible: 'Si',
        viaAdministracion: 'Central',
        overfill: '5'
      };
      
    } catch (error) {
      console.error('Error procesando PDF:', error);
      throw new Error(`Error al procesar el PDF: ${(error as Error).message}`);
    }
  }

  /**
   * Procesa el buffer del PDF y extrae múltiples prescripciones
   * @param arrayBuffer - Buffer del PDF
   * @returns Múltiples prescripciones extraídas
   */
  private static async processMultiplePrescriptionsBuffer(arrayBuffer: ArrayBuffer): Promise<MultiplePrescriptionsData> {
    try {
      // Verificar que pdfjsLib esté disponible
      if (!pdfjsLib) {
        // Si pdf.js no está disponible, retornar datos vacíos
        return {
          prescriptions: [],
          summaries: [],
          totalCount: 0
        };
      }
      
      // Cargar el PDF usando pdf.js
      const loadingTask = pdfjsLib.getDocument({ 
        data: arrayBuffer,
        disableWorker: true,
        isEvalSupported: false,
        useSystemFonts: true
      });
      
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;
      
      console.log(`Procesando PDF con ${numPages} páginas`);
      
      let allText = '';
      const prescriptions: ExtractedPrescriptionData[] = [];
      
      // Extraer texto de todas las páginas
      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(' ');
        allText += pageText + '\n';
        
        console.log(`Página ${pageNum}: ${pageText.length} caracteres extraídos`);
      }
      
      // Si no hay texto suficiente, intentar OCR
      if (allText.trim().length < 100) {
        console.log('Texto insuficiente, intentando OCR...');
        allText = await this.performOCR(arrayBuffer);
      }
      
      // Detectar prescripciones en el texto
      const detectedPrescriptions = this.detectPrescriptionsInText(allText);
      
      console.log(`Detectadas ${detectedPrescriptions.length} prescripciones`);
      
      // Crear resúmenes para cada prescripción
      const summaries: PrescriptionSummary[] = detectedPrescriptions.map((prescription, index) => ({
        id: `prescription-${index + 1}`,
        nombrePaciente: prescription.nombrePaciente || '',
        numIdentificacion: prescription.numIdentificacion || '',
        edad: `${prescription.edad} ${prescription.tipoEdad}`,
        peso: `${prescription.peso} kg`,
        ips: prescription.ips || '',
        servicio: prescription.servicio || '',
        diagnostico: prescription.diagnostico || '',
        fechaCreacion: new Date().toLocaleDateString('es-ES'),
        consecutivo: `MZ-${String(index + 1).padStart(4, '0')}`
      }));

      return {
        prescriptions: detectedPrescriptions,
        summaries,
        totalCount: detectedPrescriptions.length
      };
      
    } catch (error) {
      console.error('Error procesando PDF:', error);
      throw new Error(`Error al procesar el PDF: ${(error as Error).message}`);
    }
  }

  /**
   * Realiza OCR en el PDF si no se puede extraer texto
   * @param arrayBuffer - Buffer del PDF
   * @returns Texto extraído por OCR
   */
  private static async performOCR(arrayBuffer: ArrayBuffer): Promise<string> {
    try {
      // Verificar que Tesseract esté disponible
      if (!Tesseract) {
        throw new Error('Tesseract.js no está disponible');
      }
      
      // Convertir ArrayBuffer a Uint8Array para Tesseract
      const uint8Array = new Uint8Array(arrayBuffer);
      
      // Crear un canvas para renderizar el PDF
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
  // Procesar cada página del PDF
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let ocrText = '';
      
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 2.0 }); // Escala para mejor calidad
        
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        const renderContext = {
          canvasContext: ctx!,
          viewport: viewport
        };
        
        await page.render(renderContext).promise;
        
        // Realizar OCR en la imagen renderizada usando Tesseract
        const result = await Tesseract.recognize(canvas, 'spa');
        ocrText += result.data.text + '\n';
      }
      
      return ocrText;
      
    } catch (error) {
      console.error('Error en OCR:', error);
      return '';
    }
  }

  /**
   * Detecta prescripciones en el texto extraído
   * @param text - Texto completo del PDF
   * @returns Array de prescripciones detectadas
   */
  private static detectPrescriptionsInText(text: string): ExtractedPrescriptionData[] {
    const prescriptions: ExtractedPrescriptionData[] = [];
    
    // Dividir el texto en secciones de prescripciones
    const sections = this.splitTextIntoPrescriptionSections(text);
    
    console.log(`Dividido en ${sections.length} secciones`);
    console.log('Texto completo:', text.substring(0, 500) + '...');
    
    // Procesar cada sección
    sections.forEach((section, index) => {
      console.log(`Procesando sección ${index + 1}:`, section.substring(0, 200) + '...');
      
      if (section.trim().length > 30) { // Reducir el umbral mínimo
        const prescription = this.extractPrescriptionFromSection(section, index + 1);
        if (prescription && (prescription.nombrePaciente || prescription.numIdentificacion)) {
          console.log(`Prescripción ${index + 1} detectada:`, prescription.nombrePaciente);
          prescriptions.push(prescription);
        }
      }
    });
    
    console.log(`Total de prescripciones detectadas: ${prescriptions.length}`);
    return prescriptions;
  }

  /**
   * Divide el texto en secciones de prescripciones
   * @param text - Texto completo
   * @returns Array de secciones de prescripciones
   */
  private static splitTextIntoPrescriptionSections(text: string): string[] {
    // Buscar patrones que indiquen el inicio de una nueva prescripción
    const splitPatterns = [
      /(?=DATOS DEL PACIENTE)/gi,
      /(?=Paciente:)/gi,
      /(?=Clínica El Rosario)/gi,
      /(?=Consecutivo:)/gi,
      /(?=Fecha y Hora de Solicitud:)/gi,
      /(?=PRESCRIPCIÓN)/gi,
      /(?=ORDEN MÉDICA)/gi,
      /(?=NUTRICIÓN PARENTERAL)/gi,
      /(?=PACIENTE:)/gi,
      /(?=IDENTIFICACIÓN:)/gi,
      /(?=NÚMERO DE ORDEN:)/gi,
      /(?=FECHA:)/gi,
      /(?=Página \d+)/gi,
      /(?=PAGINA \d+)/gi,
      /(?=Page \d+)/gi,
      /(?=PACIENTE\s*\d+)/gi,
      /(?=PRESCRIPCIÓN\s*\d+)/gi,
      /(?=ORDEN\s*\d+)/gi,
      /(?=CONSECUTIVO\s*\d+)/gi,
      /(?=NÚMERO\s*\d+)/gi,
      /(?=FECHA\s*\d+)/gi,
      /(?=HORA\s*\d+)/gi,
      /(?=SERVICIO\s*\d+)/gi,
      /(?=UBICACIÓN\s*\d+)/gi,
      /(?=CAMA\s*\d+)/gi,
      /(?=DIAGNÓSTICO\s*\d+)/gi,
      /(?=VOLUMEN\s*\d+)/gi,
      /(?=TIEMPO\s*\d+)/gi,
      /(?=VELOCIDAD\s*\d+)/gi,
      /(?=AMINOÁCIDOS\s*\d+)/gi,
      /(?=LÍPIDOS\s*\d+)/gi,
      /(?=DEXTROSA\s*\d+)/gi,
      /(?=SODIO\s*\d+)/gi,
      /(?=POTASIO\s*\d+)/gi,
      /(?=CALCIO\s*\d+)/gi,
      /(?=MAGNESIO\s*\d+)/gi,
      /(?=FOSFATO\s*\d+)/gi,
      /(?=FILTRO\s*\d+)/gi,
      /(?=FOTOSENSIBLE\s*\d+)/gi,
      /(?=VÍA\s*\d+)/gi,
      /(?=OVERFILL\s*\d+)/gi
    ];
    
    let sections = [text];
    
    // Aplicar cada patrón de división
    splitPatterns.forEach(pattern => {
      const newSections: string[] = [];
      sections.forEach(section => {
        const parts = section.split(pattern);
        newSections.push(...parts);
      });
      sections = newSections.filter(s => s.trim().length > 0);
    });
    
    // Si no se dividió en múltiples secciones, intentar dividir por líneas vacías
    if (sections.length <= 1) {
      sections = text.split(/\n\s*\n/).filter(s => s.trim().length > 0);
    }
    
    // Si aún no hay múltiples secciones, intentar dividir por líneas largas
    if (sections.length <= 1) {
      sections = text.split(/\n{3,}/).filter(s => s.trim().length > 0);
    }
    
    console.log(`Secciones encontradas: ${sections.length}`);
    return sections;
  }

  /**
   * Extrae datos de prescripción de una sección de texto
   * @param section - Sección de texto
   * @param index - Índice de la prescripción
   * @returns Datos de prescripción extraídos
   */
  private static extractPrescriptionFromSection(section: string, index: number): ExtractedPrescriptionData {
    const prescription: ExtractedPrescriptionData = {};
    
    // Patrones mejorados para extraer información específica de prescripciones médicas
    const patterns = {
      nombrePaciente: /(?:Paciente|Nombre|Patient)[^:]*:\s*([^\n\r]+)/i,
      numIdentificacion: /(?:Identificación|ID|CC|TI|RC|NV|Número|Documento)[^:]*:\s*([^\n\r]+)/i,
      edad: /(?:Edad|Años|Meses|Días|Age)[^:]*:\s*(\d+)/i,
      tipoEdad: /(\d+)\s*(Días|Meses|Años|Año|Mes|Día|Days|Months|Years)/i,
      peso: /(?:Peso|Kg|Weight)[^:]*:\s*([\d.,]+)/i,
      ips: /(?:IPS|Institucion|Clínica|Institución|Hospital|Center)[^:]*:\s*([^\n\r]+)/i,
      servicio: /(?:Servicio|Unidad|Service|Unit)[^:]*:\s*([^\n\r]+)/i,
      ubicacion: /(?:Ubicación|Piso|Área|Location|Floor)[^:]*:\s*([^\n\r]+)/i,
      cama: /(?:Cama|Habitación|Bed|Room)[^:]*:\s*([^\n\r]+)/i,
      diagnostico: /(?:Diagnóstico|DX|Diagnosis)[^:]*:\s*([^\n\r]+)/i,
      volumen: /(?:Volumen|Vol|Volume)[^:]*:\s*([\d.,]+)/i,
      tiempoInfusion: /(?:Tiempo|Duración|Time|Duration)[^:]*:\s*(\d+)/i,
      velocidadInfusion: /(?:Velocidad|Rate|Speed)[^:]*:\s*([\d.,]+)/i,
      aminoacidos: /(?:Aminoácidos|Aminos|Aminoacids)[^:]*:\s*([^\n\r]+)/i,
      lipidos: /(?:Lípidos|Lipids|Lipid)[^:]*:\s*([^\n\r]+)/i,
      dextrosa: /(?:Dextrosa|Glucosa|Glucose)[^:]*:\s*([^\n\r]+)/i,
      sodioTotal: /(?:Sodio|Na|Sodium)[^:]*:\s*([\d.,]+)/i,
      potasioTotal: /(?:Potasio|K|Potassium)[^:]*:\s*([\d.,]+)/i,
      calcio: /(?:Calcio|Ca|Calcium)[^:]*:\s*([\d.,]+)/i,
      magnesio: /(?:Magnesio|Mg|Magnesium)[^:]*:\s*([\d.,]+)/i,
      fosfato: /(?:Fosfato|PO4|Phosphate)[^:]*:\s*([^\n\r]+)/i,
      filtro: /(?:Filtro|Filtración|Filter)[^:]*:\s*(Si|No|Yes|No)/i,
      equipoFotosensible: /(?:Fotosensible|Luz|Light|Photosensitive)[^:]*:\s*(Si|No|Yes|No)/i,
      viaAdministracion: /(?:Vía|Via)[^:]*:\s*([^\n\r]+)/i
    };
    
    // Aplicar patrones de búsqueda
    Object.entries(patterns).forEach(([key, pattern]) => {
      const match = section.match(pattern);
      if (match && match[1]) {
        (prescription as any)[key] = match[1].trim();
      }
    });
    
    // Detectar tipo de paciente basado en edad
    if (prescription.edad && prescription.tipoEdad) {
      const edadNum = parseInt(prescription.edad);
      if (prescription.tipoEdad.toLowerCase().includes('día') || edadNum <= 30) {
        prescription.tipoPaciente = 'Neonato';
      } else if (prescription.tipoEdad.toLowerCase().includes('mes') || edadNum <= 12) {
        prescription.tipoPaciente = 'Pediatrico';
      } else {
        prescription.tipoPaciente = 'Adulto';
      }
    } else if (prescription.edad) {
      // Si solo tenemos edad sin tipo, estimar basado en el valor
      const edadNum = parseInt(prescription.edad);
      if (edadNum <= 30) {
        prescription.tipoPaciente = 'Neonato';
      } else if (edadNum <= 12) {
        prescription.tipoPaciente = 'Pediatrico';
      } else {
        prescription.tipoPaciente = 'Adulto';
      }
    }
    
    // Valores por defecto para campos requeridos
    if (!prescription.filtro) prescription.filtro = 'Si';
    if (!prescription.equipoFotosensible) prescription.equipoFotosensible = 'Si';
    if (!prescription.viaAdministracion) prescription.viaAdministracion = 'Central';
    if (!prescription.overfill) prescription.overfill = '5';
    
    return prescription;
  }

  /**
   * Parsea texto extraído del PDF para encontrar información específica
   * @param text - Texto extraído del PDF
   * @returns Datos estructurados
   */
  private static parseExtractedText(text: string): ExtractedPrescriptionData {
    const data: ExtractedPrescriptionData = {};
    
    // Patrones de búsqueda para extraer información
    const patterns = {
      nombrePaciente: /Paciente:\s*([^\n]+)/i,
      numIdentificacion: /(?:Identificación|ID):\s*([^\n]+)/i,
      edad: /Edad[^:]*:\s*(\d+)/i,
      tipoEdad: /(\d+)\s*(Días|Meses|Años)/i,
      peso: /Peso[^:]*:\s*([\d.]+)/i,
      ips: /(?:IPS|Institucion):\s*([^\n]+)/i,
      servicio: /Servicio[^:]*:\s*([^\n]+)/i,
      ubicacion: /Ubicación[^:]*:\s*([^\n]+)/i,
      cama: /Cama[^:]*:\s*([^\n]+)/i,
      diagnostico: /Diagnóstico[^:]*:\s*([^\n]+)/i,
      volumen: /Volumen[^:]*:\s*([\d.]+)/i,
      tiempoInfusion: /Tiempo[^:]*:\s*(\d+)/i,
      velocidadInfusion: /Velocidad[^:]*:\s*([\d.]+)/i,
      aminoacidos: /Aminoácidos[^:]*:\s*([^\n]+)/i,
      lipidos: /Lípidos[^:]*:\s*([^\n]+)/i,
      sodioTotal: /Sodio[^:]*:\s*([\d.]+)/i,
      potasioTotal: /Potasio[^:]*:\s*([\d.]+)/i,
      calcio: /Calcio[^:]*:\s*([\d.]+)/i,
      magnesio: /Magnesio[^:]*:\s*([\d.]+)/i,
      filtro: /Filtro[^:]*:\s*(Si|No)/i,
      equipoFotosensible: /Fotosensible[^:]*:\s*(Si|No)/i,
      viaAdministracion: /Vía[^:]*:\s*([^\n]+)/i
    };
    
    // Aplicar patrones de búsqueda
    Object.entries(patterns).forEach(([key, pattern]) => {
      const match = text.match(pattern);
      if (match && match[1]) {
        (data as any)[key] = match[1].trim();
      }
    });
    
    return data;
  }

  /**
   * Valida si los datos extraídos son completos
   * @param data - Datos extraídos
   * @returns true si los datos son válidos
   */
  static validateExtractedData(data: ExtractedPrescriptionData): boolean {
    const requiredFields = [
      'nombrePaciente',
      'numIdentificacion',
      'peso',
      'ips',
      'diagnostico'
    ];
    
    return requiredFields.every(field => 
      data[field as keyof ExtractedPrescriptionData] && 
      data[field as keyof ExtractedPrescriptionData] !== ''
    );
  }

  /**
   * Normaliza los datos extraídos para el formulario
   * @param data - Datos extraídos
   * @returns Datos normalizados
   */
  static normalizeData(data: ExtractedPrescriptionData): ExtractedPrescriptionData {
    return {
      ...data,
      // Normalizar tipos de paciente
      tipoPaciente: this.normalizeTipoPaciente(data.tipoPaciente),
      // Normalizar valores numéricos
      peso: data.peso ? data.peso.replace(',', '.') : undefined,
      volumen: data.volumen ? data.volumen.replace(',', '.') : undefined,
      // Normalizar valores booleanos
      filtro: data.filtro === 'Si' ? 'Si' : 'No',
      equipoFotosensible: data.equipoFotosensible === 'Si' ? 'Si' : 'No'
    };
  }

  /**
   * Normaliza el tipo de paciente
   * @param tipoPaciente - Tipo de paciente extraído
   * @returns Tipo normalizado
   */
  private static normalizeTipoPaciente(tipoPaciente?: string): string {
    if (!tipoPaciente) return '';
    
    const tipo = tipoPaciente.toLowerCase();
    if (tipo.includes('neonato') || tipo.includes('recién nacido')) return 'Neonato';
    if (tipo.includes('pediátrico') || tipo.includes('niño')) return 'Pediatrico';
    if (tipo.includes('adulto')) return 'Adulto';
    
    return tipoPaciente;
  }
} 