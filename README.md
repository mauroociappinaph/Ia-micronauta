<div align="center">
  <img src="public/assets/logos/Logo_Micronauta_3dnoBGpng.png" alt="Micronauta Logo" width="200" height="200"/>
  <h1>🚀 Micronauta - Landing Page con IA</h1>
  <p><em>Transformando negocios locales con tecnología de vanguardia</em></p>
</div>

---

## 📋 Descripción del Proyecto

**Micronauta** es una landing page moderna y cinematográfica diseñada para agencias de transformación digital. Combina un video introductorio impactante con una experiencia web fluida, integrando inteligencia artificial para ofrecer una experiencia única a los usuarios.

### ✨ Características Principales

- 🎬 **Video Introductorio Cinematográfico** - Experiencia de entrada inmersiva
- 🤖 **Chatbot IA Avanzado** - Asistente conversacional con Google Gemini
- 🌐 **Multilingüe** - Soporte completo para español e inglés
- 📱 **Responsive Design** - Optimizado para todos los dispositivos
- 🎨 **Diseño Flat Moderno** - Estética minimalista y profesional
- 🔄 **Transiciones Suaves** - Animaciones fluidas y elegantes

### 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS con diseño personalizado
- **Animaciones**: Framer Motion
- **IA**: Google Gemini 3 Flash
- **Estado**: Zustand con persistencia
- **Routing**: React Router DOM
- **Build**: Vite con optimización automática

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Cuenta de Google AI Studio** (para API key de Gemini)

### Instalación y Ejecución

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/mauroociappinaph/Ia-micronauta.git
   cd Ia-micronauta
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   GEMINI_API_KEY=tu_api_key_de_google_gemini
   ```

4. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador:**
   Ve a `http://localhost:3000` para ver la aplicación

---

## 📁 Estructura del Proyecto

```
Ia-micronauta/
├── public/
│   ├── assets/
│   │   ├── logos/          # Logo de la marca
│   │   ├── videos/         # Videos introductorios
│   │   └── images/         # Imágenes adicionales
│   └── index.html
├── src/
│   ├── components/
│   │   ├── shared/         # Componentes reutilizables
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ChatWidget.tsx
│   │   │   └── CalendlyEmbed.tsx
│   ├── pages/
│   │   └── LandingPage.tsx # Página principal
│   ├── services/
│   │   └── geminiService.ts # Servicio de IA
│   ├── stores/
│   │   └── useLocaleStore.ts # Gestión de idioma
│   ├── lib/
│   │   ├── i18n.ts         # Traducciones
│   │   └── whatsapp.ts     # Integración WhatsApp
│   └── types/
│       └── index.ts        # Definiciones TypeScript
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 🎯 Servicios Ofrecidos

### 1. 🎨 **Diseño Web de Alto Rendimiento**
   - Landings optimizadas para conversión
   - SEO local integrado
   - Diseño responsive profesional

### 2. 🤖 **IA Visual Avanzada**
   - Branding hiper-realista generado por IA
   - Fotografía automatizada
   - Identidad visual única

### 3. ⚡ **Automatización Inteligente**
   - CRMs personalizados
   - Sistemas de inventario automatizados
   - Flujos de leads 24/7

---

## 🔧 Configuración Avanzada

### Variables de Entorno

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `GEMINI_API_KEY` | API Key de Google Gemini | ✅ |

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Vista previa del build
```

### Configuración de Producción

1. Ejecuta `npm run build`
2. El contenido optimizado se genera en `dist/`
3. Despliega los archivos de `dist/` en tu servidor

---

## 🤝 Contribución

1. **Haz fork** del proyecto
2. **Crea una rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Haz commit** de tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre un Pull Request**

### Ramas del Proyecto

- **`main`** - Código de producción estable
- **`develop`** - Desarrollo de nuevas features

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📞 Contacto

**Micronauta Agency**
- 🌐 Sitio web: [Próximamente]
- 📧 Email: [contacto@micronauta.com]
- 📱 WhatsApp: [+54 9 2235 916616]
- 📅 Calendly: [Agenda una reunión]

---

<div align="center">
  <p><strong>🚀 Elevando negocios locales al siguiente nivel con IA</strong></p>
  <p>Desarrollado con ❤️ por el equipo de Micronauta</p>
</div>
