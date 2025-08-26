# Funcionalidad de Carga de PDF - Pure Life

## 📋 Descripción

La funcionalidad de carga de PDF permite a los usuarios cargar archivos PDF que contengan información de prescripciones médicas y extraer automáticamente los datos para llenar el formulario de prescripción.

## 🎯 Características

### ✅ Funcionalidades Implementadas

- **Carga de archivos PDF**: Interfaz intuitiva para seleccionar archivos PDF
- **Extracción real de datos**: Utiliza pdf.js para extracción directa de texto
- **OCR automático**: Aplica tesseract.js cuando el texto no es extraíble
- **Detección múltiple**: Identificación automática de múltiples prescripciones en un PDF
- **Patrones inteligentes**: Detecta patrones específicos de prescripciones médicas
- **Selección de prescripción**: Modal para elegir entre múltiples prescripciones detectadas
- **Preview de datos**: Modal para revisar los datos extraídos antes de aplicarlos
- **Validación de datos**: Verificación de que los datos extraídos sean completos
- **Aplicación automática**: Llenado automático del formulario con los datos extraídos
- **Manejo de errores**: Gestión de errores durante el proceso de carga
- **Búsqueda y filtrado**: Funcionalidad de búsqueda en prescripciones múltiples

### 🔧 Componentes Principales

#### 1. PDFUploadButton
- **Ubicación**: `src/views/Formulario/Components/PDFUploadButton.tsx`
- **Función**: Botón principal para cargar PDFs
- **Características**:
  - Selección de archivos PDF
  - Indicador de carga
  - Manejo de errores
  - Integración con el contexto del formulario

#### 2. PDFPreviewModal
- **Ubicación**: `src/views/Formulario/Components/PDFPreviewModal.tsx`
- **Función**: Modal para mostrar los datos extraídos
- **Características**:
  - Vista previa organizada por secciones
  - Opción para aplicar o cancelar
  - Interfaz intuitiva

#### 3. PDFExtractor
- **Ubicación**: `src/utilities/pdfExtractor.ts`
- **Función**: Utilidad para extraer datos de PDFs
- **Características**:
  - Procesamiento de archivos PDF usando pdf.js
  - OCR automático con tesseract.js
  - Extracción de múltiples prescripciones
  - Patrones inteligentes de detección
  - Normalización de datos
  - Validación de datos extraídos
  - División automática en secciones de prescripciones

#### 4. MultiplePrescriptionsModal
- **Ubicación**: `src/views/Formulario/Components/MultiplePrescriptionsModal.tsx`
- **Función**: Modal para seleccionar entre múltiples prescripciones
- **Características**:
  - Lista de prescripciones detectadas
  - Búsqueda y filtrado
  - Vista previa de información clave
  - Selección intuitiva

## 📊 Datos Extraídos

### Información del Paciente
- Nombre del paciente
- Número de identificación
- Edad y tipo de edad
- Peso
- IPS (Institución Prestadora de Servicios)
- Servicio y ubicación
- Cama
- Tipo de paciente
- Diagnóstico

### Configuración de la Prescripción
- Volumen total
- Tiempo de infusión
- Velocidad de infusión
- Filtro
- Equipo fotosensible
- Vía de administración
- Overfill

### Macronutrientes
- Aminoácidos y requerimientos
- Lípidos y requerimientos
- Dextrosa y requerimientos
- Omegaven
- Dipeptiven

### Micronutrientes
- Sodio total
- Potasio total
- Calcio
- Magnesio
- Fosfato y requerimientos
- Elementos traza y requerimientos
- Vitaminas hidrosolubles y requerimientos
- Vitaminas liposolubles y requerimientos
- Vitamina C
- Ácido fólico

## 🛠️ Tecnologías Utilizadas

### Librerías Principales
- **pdf.js**: Para extracción directa de texto de PDFs
- **tesseract.js**: Para OCR cuando el texto no es extraíble
- **React**: Para la interfaz de usuario
- **Material-UI**: Para componentes de UI
- **TypeScript**: Para tipado estático

### Proceso de Extracción
1. **Extracción de texto**: pdf.js extrae texto directamente del PDF
2. **Evaluación de calidad**: Se verifica si el texto extraído es suficiente
3. **OCR automático**: Si es necesario, se aplica OCR con tesseract.js
4. **Detección de patrones**: Se buscan patrones específicos de prescripciones
5. **División en secciones**: Se separan múltiples prescripciones
6. **Extracción de datos**: Se extraen campos específicos usando regex
7. **Validación**: Se validan los datos extraídos
8. **Normalización**: Se normalizan los datos para el formulario

## 🚀 Uso

### Para Usuarios

1. **Acceder al formulario**: Navegar a la página de nueva prescripción
2. **Cargar PDF**: Hacer clic en el botón "Cargar PDF" en el encabezado
3. **Seleccionar archivo**: Elegir un archivo PDF que contenga información de prescripción
4. **Seleccionar prescripción** (si hay múltiples):
   - Si el PDF contiene múltiples prescripciones, aparecerá un modal de selección
   - Usar la barra de búsqueda para filtrar por nombre, identificación o diagnóstico
   - Hacer clic en la prescripción deseada para seleccionarla
   - Hacer clic en "Cargar Prescripción Seleccionada"
5. **Revisar datos**: En el modal de preview, revisar los datos extraídos
6. **Aplicar datos**: Hacer clic en "Aplicar Datos" para llenar el formulario

### Para Desarrolladores

#### Integración en FormView

```tsx
import PDFUploadButton from './Components/PDFUploadButton';

// En el encabezado del formulario
<Stack direction="row" justifyContent="space-between" alignItems="center" padding={1}>
  <Typography variant='h5' style={{ fontWeight: 700 }}>
    Nueva Orden
  </Typography>
  <PDFUploadButton />
</Stack>
```

#### Personalización de Extracción

```tsx
// En pdfExtractor.ts, modificar los patrones de búsqueda
const patterns = {
  nombrePaciente: /Paciente:\s*([^\n]+)/i,
  // Agregar nuevos patrones según sea necesario
};
```

## 🔧 Configuración

### Variables de Entorno

```env
# Configuración para procesamiento de PDFs (futuro)
NEXT_PUBLIC_PDF_PROCESSING_ENABLED=true
NEXT_PUBLIC_PDF_MAX_SIZE=10485760  # 10MB
```

### Dependencias

```json
{
  "dependencies": {
    // Para implementación real de extracción de PDF
    "pdfjs-dist": "^3.0.0",
    "@types/pdfjs-dist": "^3.0.0"
  }
}
```

## 🛠️ Implementación Técnica

### Arquitectura

```
PDFUploadButton
├── PDFPreviewModal
└── PDFExtractor
    ├── extractFromPDF()
    ├── normalizeData()
    └── validateExtractedData()
```

### Flujo de Datos

#### Para PDFs con una sola prescripción:
1. **Selección de archivo** → PDFUploadButton
2. **Procesamiento** → PDFExtractor.extractFromPDF()
3. **Normalización** → PDFExtractor.normalizeData()
4. **Validación** → PDFExtractor.validateExtractedData()
5. **Preview** → PDFPreviewModal
6. **Aplicación** → FormulariosContext

#### Para PDFs con múltiples prescripciones:
1. **Selección de archivo** → PDFUploadButton
2. **Procesamiento múltiple** → PDFExtractor.extractMultiplePrescriptionsFromPDF()
3. **Selección de prescripción** → MultiplePrescriptionsModal
4. **Preview** → PDFPreviewModal
5. **Aplicación** → FormulariosContext

### Manejo de Estados

```tsx
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const [success, setSuccess] = useState<string | null>(null);
const [previewData, setPreviewData] = useState<ExtractedPrescriptionData | null>(null);
const [showPreview, setShowPreview] = useState(false);
const [multiplePrescriptionsData, setMultiplePrescriptionsData] = useState<MultiplePrescriptionsData | null>(null);
const [showMultiplePrescriptions, setShowMultiplePrescriptions] = useState(false);
```

## 🔮 Mejoras Futuras

### Implementación Real de PDF.js

```tsx
// Ejemplo de implementación con pdf.js
import * as pdfjsLib from 'pdfjs-dist';

const extractTextFromPDF = async (arrayBuffer: ArrayBuffer) => {
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let fullText = '';
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item: any) => item.str).join(' ');
    fullText += pageText + '\n';
  }
  
  return fullText;
};
```

### OCR para PDFs Escaneados

```tsx
// Integración con Tesseract.js para OCR
import Tesseract from 'tesseract.js';

const extractTextFromScannedPDF = async (imageData: ImageData) => {
  const result = await Tesseract.recognize(imageData, 'spa');
  return result.data.text;
};
```

### Validación Avanzada

```tsx
// Validación de formato de prescripción
const validatePrescriptionFormat = (text: string) => {
  const requiredSections = [
    'DATOS DEL PACIENTE',
    'MEZCLAS',
    'Diagnóstico'
  ];
  
  return requiredSections.every(section => 
    text.includes(section)
  );
};
```

## 🐛 Solución de Problemas

### Errores Comunes

1. **"No se pudieron extraer datos del PDF"**
   - Verificar que el PDF contenga texto (no solo imágenes)
   - Revisar el formato del PDF
   - Comprobar que el archivo no esté corrupto

2. **"Los datos extraídos están incompletos"**
   - Verificar que el PDF contenga todos los campos requeridos
   - Revisar los patrones de búsqueda en `pdfExtractor.ts`

3. **"Error al procesar el PDF"**
   - Verificar el tamaño del archivo (máximo 10MB)
   - Comprobar que el archivo sea un PDF válido
   - Revisar la consola del navegador para errores específicos

### Debugging

```tsx
// Habilitar logs de debug
const DEBUG_PDF_EXTRACTION = process.env.NODE_ENV === 'development';

if (DEBUG_PDF_EXTRACTION) {
  console.log('Datos extraídos:', extractedData);
  console.log('Datos normalizados:', normalizedData);
}
```

## 📝 Notas de Desarrollo

### Consideraciones de Rendimiento

- Los archivos PDF grandes pueden tardar en procesarse
- Considerar implementar un worker para procesamiento en segundo plano
- Limitar el tamaño máximo de archivo

### Seguridad

- Validar tipos de archivo antes del procesamiento
- Sanitizar datos extraídos antes de aplicarlos al formulario
- Implementar límites de tamaño de archivo

### Accesibilidad

- Agregar etiquetas ARIA para lectores de pantalla
- Proporcionar mensajes de error claros
- Asegurar navegación por teclado

## 📞 Soporte

Para problemas técnicos o mejoras de la funcionalidad:

- **Issues**: Crear un issue en el repositorio del proyecto
- **Documentación**: Consultar la documentación de pdf.js para implementaciones avanzadas
- **Comunidad**: Participar en la comunidad de desarrolladores de Pure Life 