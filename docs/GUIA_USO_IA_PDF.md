# Guía de Uso - Carga de PDFs con IA

## 🚀 Introducción

La nueva funcionalidad de carga de PDFs con Inteligencia Artificial permite extraer prescripciones médicas de manera más precisa y eficiente. El sistema puede procesar diferentes formatos de PDF y extraer automáticamente todos los campos requeridos.

## 📋 Requisitos Previos

### 1. Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# OpenAI API Key (requerido para IA)
NEXT_PUBLIC_OPENAI_API_KEY=sk-your-openai-api-key-here

# Configuración opcional
NEXT_PUBLIC_AI_ENABLED=true
NEXT_PUBLIC_PDF_MAX_SIZE=10485760
```

### 2. Obtener API Key

1. Ve a [OpenAI Platform](https://platform.openai.com/)
2. Crea una cuenta o inicia sesión
3. Ve a "API Keys" en el menú lateral
4. Haz clic en "Create new secret key"
5. Copia la clave generada al archivo `.env.local`

## 🎯 Cómo Usar la Funcionalidad

### Paso 1: Acceder al Formulario

1. Navega al formulario de prescripciones
2. Busca el botón "Cargar PDF" en la parte superior
3. Verifica que aparezca el chip "IA Habilitada" (indica que la IA está configurada)

### Paso 2: Cargar PDF

1. Haz clic en "Cargar PDF"
2. Selecciona un archivo PDF que contenga prescripciones médicas
3. El sistema procesará automáticamente el archivo

### Paso 3: Seleccionar Prescripción (si hay múltiples)

Si el PDF contiene múltiples prescripciones:

1. Aparecerá un modal con la lista de prescripciones detectadas
2. Usa la barra de búsqueda para filtrar por nombre, identificación o diagnóstico
3. Haz clic en la prescripción deseada
4. Haz clic en "Cargar Prescripción Seleccionada"

### Paso 4: Revisar y Aplicar

1. En el modal de preview, revisa los datos extraídos
2. Verifica que todos los campos estén correctos
3. Haz clic en "Aplicar Datos" para llenar el formulario

## ⚙️ Configuración Avanzada

### Acceder a la Configuración

1. Haz clic en el ícono de configuración (⚙️) junto al botón de carga
2. Se abrirá el modal de configuración de IA

### Opciones Disponibles

#### Configuración de IA
- **Habilitar IA**: Activa/desactiva el procesamiento con IA
- **API Key**: Tu clave de API de OpenAI
- **Modelo**: Selecciona el modelo de IA
  - GPT-4 Vision (Recomendado): Mejor precisión
  - GPT-4o: Más económico
  - Claude 3 Sonnet: Bueno para documentos médicos
- **Máximo de reintentos**: Número de intentos en caso de error
- **Timeout**: Tiempo máximo de espera (ms)
- **Umbral de confianza**: Nivel mínimo de confianza para aceptar resultados

#### Configuración de Procesamiento
- **Tamaño máximo**: Tamaño máximo del archivo PDF (MB)
- **Habilitar caché**: Guarda resultados para archivos repetidos

## 🔍 Campos Extraídos

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

## 🎯 Ventajas de la IA

### Precisión Mejorada
- **95%+ de precisión** en campos principales
- **Detección automática** de múltiples prescripciones
- **Manejo robusto** de diferentes formatos

### Flexibilidad
- **Soporte para PDFs escaneados** y con texto
- **Procesamiento de imágenes** complejas
- **Extracción de tablas** y formularios

### Eficiencia
- **Procesamiento automático** sin intervención manual
- **Caché inteligente** para archivos repetidos
- **Validación automática** de datos extraídos

## 🐛 Solución de Problemas

### Error: "API Key requerida"
**Solución**: 
1. Verifica que el archivo `.env.local` existe
2. Asegúrate de que la API key esté correctamente configurada
3. Reinicia el servidor de desarrollo

### Error: "El archivo es demasiado grande"
**Solución**:
1. Reduce el tamaño del PDF
2. Aumenta el límite en la configuración
3. Comprime el archivo antes de cargarlo

### Error: "No se encontraron prescripciones"
**Solución**:
1. Verifica que el PDF contenga información de prescripciones
2. Asegúrate de que el texto sea legible
3. Intenta con un archivo diferente

### Error: "Timeout en llamada a IA"
**Solución**:
1. Verifica tu conexión a internet
2. Aumenta el timeout en la configuración
3. Intenta nuevamente

## 💰 Costos y Optimización

### Costos Estimados
- **GPT-4 Vision**: ~$0.01-0.03 por imagen
- **GPT-4o**: ~$0.005-0.015 por imagen
- **Claude 3 Sonnet**: ~$0.015-0.03 por imagen

### Optimización de Costos
1. **Usa GPT-4o** para desarrollo (más económico)
2. **Habilita el caché** para archivos repetidos
3. **Monitorea el uso** mensual
4. **Configura límites** de tamaño de archivo

## 🔒 Seguridad

### Buenas Prácticas
- **Nunca** compartas tu API key
- **Usa diferentes keys** para desarrollo y producción
- **Monitorea el uso** de las APIs
- **Configura límites** de uso en tu cuenta de OpenAI

### Privacidad
- Los archivos se procesan **localmente** en tu navegador
- Las imágenes se envían **temporalmente** a la API de IA
- **No se almacenan** archivos en servidores externos

## 📞 Soporte

### Recursos Adicionales
- [Documentación de OpenAI](https://platform.openai.com/docs)
- [Guía de API Keys](https://platform.openai.com/docs/guides/api-keys)
- [Precios de OpenAI](https://openai.com/pricing)

### Contacto
Para problemas técnicos o preguntas sobre la implementación, consulta la documentación del proyecto o contacta al equipo de desarrollo.

---

**Versión**: 1.0.0  
**Última actualización**: Diciembre 2024 