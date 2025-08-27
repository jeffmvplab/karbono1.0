# Configuración de Variables de Entorno para IA

## 📋 Variables Requeridas

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# OpenAI API Key (para GPT-4 Vision y GPT-4o)
NEXT_PUBLIC_OPENAI_API_KEY=sk-your-openai-api-key-here

# Anthropic API Key (para Claude 3 Sonnet)
NEXT_PUBLIC_ANTHROPIC_API_KEY=sk-ant-your-anthropic-api-key-here

# Configuración de procesamiento de PDFs
NEXT_PUBLIC_PDF_MAX_SIZE=10485760
NEXT_PUBLIC_AI_ENABLED=true
NEXT_PUBLIC_CACHE_ENABLED=true

# Configuración de modelos de IA (opcional)
NEXT_PUBLIC_AI_MODEL=gpt-4-vision
NEXT_PUBLIC_AI_TIMEOUT=30000
NEXT_PUBLIC_AI_MAX_RETRIES=3
```

## 🔑 Obtener API Keys

### OpenAI API Key
1. Ve a [OpenAI Platform](https://platform.openai.com/)
2. Crea una cuenta o inicia sesión
3. Ve a "API Keys" en el menú lateral
4. Haz clic en "Create new secret key"
5. Copia la clave generada

### Anthropic API Key
1. Ve a [Anthropic Console](https://console.anthropic.com/)
2. Crea una cuenta o inicia sesión
3. Ve a "API Keys"
4. Haz clic en "Create Key"
5. Copia la clave generada

## ⚙️ Configuración Avanzada

### Modelos Disponibles
- `gpt-4-vision`: Mejor para análisis de imágenes complejas
- `claude-3-sonnet`: Bueno para documentos médicos
- `gpt-4o`: Versión más reciente de OpenAI

### Configuración de Tiempo
- `NEXT_PUBLIC_AI_TIMEOUT`: Tiempo máximo en milisegundos para llamadas a IA
- `NEXT_PUBLIC_AI_MAX_RETRIES`: Número máximo de reintentos en caso de error

### Configuración de Archivos
- `NEXT_PUBLIC_PDF_MAX_SIZE`: Tamaño máximo de archivo en bytes (10MB por defecto)

## 🚀 Verificación

Para verificar que la configuración funciona:

1. Asegúrate de que el archivo `.env.local` existe
2. Reinicia el servidor de desarrollo: `npm run dev`
3. Ve al formulario de prescripciones
4. Deberías ver un chip "IA Habilitada" junto al botón de carga

## 🔒 Seguridad

- **Nunca** commits las API keys al repositorio
- El archivo `.env.local` ya está en `.gitignore`
- Usa diferentes keys para desarrollo y producción
- Monitorea el uso de las APIs para controlar costos

## 💰 Costos Estimados

### OpenAI
- GPT-4 Vision: ~$0.01-0.03 por imagen
- GPT-4o: ~$0.005-0.015 por imagen

### Anthropic
- Claude 3 Sonnet: ~$0.015-0.03 por imagen

### Recomendaciones
- Para desarrollo: Usa GPT-4o (más económico)
- Para producción: Usa GPT-4 Vision (mejor precisión)
- Monitorea el uso mensual para optimizar costos 