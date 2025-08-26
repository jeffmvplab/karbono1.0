# Pure Life - Sistema de Gestión de Prescripciones Parenterales

## 📋 Descripción del Proyecto

**Pure Life** es una aplicación web desarrollada en Next.js que permite crear, editar y administrar el proceso de creación de prescripciones para soluciones parenterales. El sistema está diseñado para facilitar la gestión integral de prescripciones médicas en el ámbito de la nutrición parenteral, proporcionando herramientas especializadas para profesionales de la salud.

## 🎯 Funcionalidades Principales

### 📝 Gestión de Prescripciones
- **Creación de prescripciones**: Formularios especializados para diferentes tipos de pacientes (adultos, pediátricos, neonatos)
- **Edición y actualización**: Modificación de prescripciones existentes con control de versiones
- **Clonación de prescripciones**: Duplicación de prescripciones como base para nuevas formulaciones
- **Estados de prescripción**: Control de flujo de trabajo (PENDIENTE, FINALIZADA, SOLICITADA, CALIDAD, PRODUCCION, CANCELADA)

### 🧪 Componentes Nutricionales
- **Macronutrientes**: Gestión de aminoácidos, dextrosa, lípidos, omegaven, dipeptiven
- **Micronutrientes**: Control de electrolitos (sodio, potasio, calcio, magnesio, fósforo)
- **Vitaminas**: Vitaminas hidrosolubles, liposolubles, vitamina C, ácido fólico
- **Elementos traza**: Oligoelementos específicos por tipo de paciente

### 📊 Parámetros y Cálculos
- **Parámetros nutricionales**: Cálculo automático de calorías totales, proteínas, carbohidratos, lípidos
- **Parámetros farmacéuticos**: Osmolaridad, concentraciones, factor de precipitación
- **Validaciones**: Alertas y verificaciones de compatibilidad y seguridad

### 🏥 Gestión de Pacientes
- **Información del paciente**: Datos demográficos, peso, edad, tipo de paciente
- **Información clínica**: Diagnóstico, servicio, ubicación, cama
- **Configuración de infusión**: Volumen, tiempo de infusión, purga, overfill

### 📋 Reportes y Documentación
- **Reportes de prescripción**: Generación de informes detallados
- **Etiquetas**: Creación de etiquetas para identificación de soluciones
- **Plan de producción**: Documentación para procesos de fabricación
- **Exportación PDF**: Generación de documentos imprimibles

### 🔍 Búsqueda y Filtros
- **Búsqueda por número de orden**: Identificación rápida de prescripciones
- **Búsqueda por nombre**: Localización por nombre del paciente
- **Búsqueda por identificación**: Filtrado por número de identificación
- **Búsqueda por IPS**: Filtrado por institución prestadora de servicios
- **Búsqueda por fecha**: Consultas temporales

### 👥 Gestión de Usuarios
- **Sistema de autenticación**: Login seguro con roles diferenciados
- **Roles de usuario**: Prescriptor, Control de Calidad, Producción
- **Gestión de equipos**: Administración de grupos de trabajo
- **Invitar usuarios**: Sistema de invitaciones para nuevos miembros

### 📄 Carga de PDFs
- **Extracción automática**: Carga de PDFs con extracción automática de datos usando pdf.js y tesseract.js
- **Detección múltiple**: Identificación automática de múltiples prescripciones en un solo PDF
- **Selección inteligente**: Modal para elegir entre múltiples prescripciones detectadas
- **Vista previa**: Revisión de datos extraídos antes de aplicar al formulario
- **OCR automático**: Reconocimiento óptico de caracteres cuando el texto no es extraíble
- **Patrones inteligentes**: Detección de patrones específicos de prescripciones médicas

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14.2.3**: Framework de React para aplicaciones web
- **React 18.2.0**: Biblioteca para interfaces de usuario
- **TypeScript 5**: Tipado estático para JavaScript
- **Material-UI (MUI) 5.15.4**: Componentes de interfaz de usuario
- **Tailwind CSS 3.3.0**: Framework de CSS utilitario
- **Emotion**: Biblioteca para CSS-in-JS

### Librerías Especializadas
- **@mui/x-data-grid**: Tablas de datos avanzadas
- **@mui/x-date-pickers**: Selectores de fecha
- **html2canvas & html2pdf.js**: Generación de PDF
- **pdf.js**: Extracción de texto de PDFs
- **tesseract.js**: Reconocimiento óptico de caracteres (OCR)
- **js-cookie**: Manejo de cookies
- **dayjs**: Manipulación de fechas
- **framer-motion**: Animaciones
- **react-google-recaptcha**: Protección contra bots

### PWA y Optimización
- **@ducanh2912/next-pwa**: Configuración de Progressive Web App
- **Three.js & React Three Fiber**: Gráficos 3D
- **react-tilt**: Efectos de inclinación

### Herramientas de Desarrollo
- **ESLint**: Linting de código
- **PostCSS & Autoprefixer**: Procesamiento de CSS
- **SWC**: Compilador rápido

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm, yarn, pnpm o bun

### Instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd karbono1.0
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env.local
cp .env.example .env.local
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
karbono1.0/
├── src/
│   ├── components/          # Componentes reutilizables
│   ├── context/            # Contextos de React
│   ├── data/               # Adaptadores y repositorios
│   ├── domain/             # Modelos y casos de uso
│   ├── layouts/            # Layouts de la aplicación
│   ├── pages/              # Páginas de Next.js
│   ├── protocols/          # Protocolos HTTP y cache
│   ├── routes/             # Configuración de rutas
│   ├── scripts/            # Scripts de analytics
│   ├── styles/             # Estilos globales
│   ├── themes/             # Temas y colores
│   ├── utilities/          # Utilidades y constantes
│   └── views/              # Vistas principales
├── public/                 # Archivos estáticos
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🔧 Configuración de Entorno

### Variables de Entorno Requeridas

```env
# Backend API
NEXT_PUBLIC_API_URL=https://api.purelife.cloud

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_TAG_MANAGER_ID=GTM-PV5TRWW

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key

# Email
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## 🏗️ Arquitectura del Sistema

### Patrón de Arquitectura
El proyecto sigue una arquitectura **Clean Architecture** con separación clara de responsabilidades:

- **Domain Layer**: Modelos de negocio y casos de uso
- **Data Layer**: Repositorios y adaptadores
- **Presentation Layer**: Vistas y componentes
- **Infrastructure Layer**: Protocolos HTTP y cache

### Gestión de Estado
- **Context API**: Estado global de la aplicación
- **Local Storage**: Persistencia de datos temporales
- **Cookies**: Autenticación y sesiones

## 📱 Características PWA

- **Instalación offline**: Funcionalidad sin conexión
- **Cache inteligente**: Optimización de rendimiento
- **Notificaciones push**: Alertas en tiempo real
- **Iconos adaptativos**: Soporte para diferentes dispositivos

## 🔒 Seguridad

- **Autenticación JWT**: Tokens seguros
- **reCAPTCHA**: Protección contra bots
- **Validación de entrada**: Sanitización de datos
- **HTTPS**: Comunicación encriptada
- **CORS**: Configuración de orígenes permitidos

## 📊 Analytics y Monitoreo

- **Google Analytics**: Seguimiento de usuarios
- **Google Tag Manager**: Gestión de tags
- **Matomo**: Analytics alternativo
- **Logs personalizados**: Auditoría de acciones

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests de linting
npm run lint

# Verificación de tipos TypeScript
npx tsc --noEmit
```

## 📦 Despliegue

### Producción
```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm run start
```

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:

- **Email**: soporte@purelife.cloud
- **Documentación**: [docs.purelife.cloud](https://docs.purelife.cloud)
- **Issues**: [GitHub Issues](https://github.com/purelife/issues)

## 🔄 Changelog

### v0.1.0
- ✅ Sistema de prescripciones básico
- ✅ Gestión de macronutrientes y micronutrientes
- ✅ Reportes y etiquetas
- ✅ Sistema de autenticación
- ✅ PWA funcional
- ✅ Analytics integrado

---

**Desarrollado con ❤️ para la comunidad médica**
