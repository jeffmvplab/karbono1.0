# Configuración de IA para Extracción de PDFs

## 🚀 Configuración Rápida

### 1. Crear archivo .env.local

Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```env
# OpenAI API Key (requerido para IA)
NEXT_PUBLIC_OPENAI_API_KEY=sk-your-openai-api-key-here

# Configuración de procesamiento de PDFs
NEXT_PUBLIC_AI_ENABLED=true
NEXT_PUBLIC_PDF_MAX_SIZE=10485760

# Configuración de modelos de IA (opcional)
NEXT_PUBLIC_AI_MODEL=gpt-4-vision
NEXT_PUBLIC_AI_TIMEOUT=30000
NEXT_PUBLIC_AI_MAX_RETRIES=3
```

### 2. Obtener API Key de OpenAI

1. Ve a [OpenAI Platform](https://platform.openai.com/)
2. Crea una cuenta o inicia sesión
3. Ve a "API Keys" en el menú lateral
4. Haz clic en "Create new secret key"
5. Copia la clave generada al archivo `.env.local`

### 3. Reiniciar el servidor

```bash
npm run dev
```

## ✅ Verificación

Para verificar que la IA está configurada correctamente:

1. Ve al formulario de prescripciones
2. Deberías ver un chip "IA Habilitada" junto al botón de carga
3. Haz clic en el ícono de configuración (⚙️) para ajustar parámetros

## 🔧 Configuración Avanzada

### Modelos Disponibles

- **GPT-4 Vision** (Recomendado): Mejor precisión
- **GPT-4o**: Más económico
- **Claude 3 Sonnet**: Bueno para documentos médicos

### Parámetros Ajustables

- **Timeout**: Tiempo máximo de espera (ms)
- **Reintentos**: Número de intentos en caso de error
- **Umbral de confianza**: Nivel mínimo de confianza
- **Tamaño máximo**: Tamaño máximo del archivo PDF

## 🐛 Solución de Problemas

### Error: "API Key requerida"
- Verifica que el archivo `.env.local` existe
- Confirma que la API key esté correctamente configurada
- Reinicia el servidor de desarrollo

### Error: "Worker de pdf.js"
- El sistema usa automáticamente un CDN para el worker
- Si hay problemas de red, el sistema fallback a extracción tradicional

### Error: "Timeout en llamada a IA"
- Verifica tu conexión a internet
- Aumenta el timeout en la configuración
- Intenta con un archivo más pequeño

## 💰 Costos

- **GPT-4 Vision**: ~$0.01-0.03 por imagen
- **GPT-4o**: ~$0.005-0.015 por imagen
- **Claude 3 Sonnet**: ~$0.015-0.03 por imagen

## 🔒 Seguridad

- **Nunca** compartas tu API key
- El archivo `.env.local` ya está en `.gitignore`
- Usa diferentes keys para desarrollo y producción
- Monitorea el uso de las APIs 