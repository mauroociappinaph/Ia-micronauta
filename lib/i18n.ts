
import { TranslationSchema } from '../types';

export const translations: Record<'es' | 'en', TranslationSchema> = {
  es: {
    hero: {
      headline: "Llevamos tu negocio local al siguiente espacio.",
      subheadline: "Diseño web, branding con IA y automatización para comercios que buscan liderar su comunidad.",
      cta: "Agenda tu auditoría"
    },
    about: {
      title: "¿Qué hacemos?",
      content: "En Micronauta fusionamos tecnología de vanguardia con la cercanía del comercio local. Transformamos negocios tradicionales en potencias digitales mediante soluciones personalizadas y eficientes."
    },
    services: {
      title: "Servicios",
      web: { title: "Diseño Web", desc: "Landings de alta performance optimizadas para conversión y SEO local." },
      branding: { title: "IA Visual", desc: "Branding hiper-realista y fotografía generada por IA para destacar." },
      automation: { title: "Automatización", desc: "CRMs, inventarios y flujos de leads que trabajan por vos 24/7." }
    },
    methodology: {
      title: "Metodología",
      steps: ["Consultoría Inicial", "Análisis Profundo", "Propuesta Técnica", "Ejecución Estelar"]
    },
    contact: {
      title: "Listos para el despegue",
      cta: "Agenda tu auditoría"
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    hero: {
      headline: "Taking your local business to the next space.",
      subheadline: "Web design, AI-driven branding, and automation for businesses looking to lead their community.",
      cta: "Book your audit"
    },
    about: {
      title: "What we do",
      content: "At Micronauta, we merge cutting-edge technology with the closeness of local business. We transform traditional shops into digital powerhouses through customized and efficient solutions."
    },
    services: {
      title: "Services",
      web: { title: "Web Design", desc: "High-performance landings optimized for conversion and local SEO." },
      branding: { title: "Visual AI", desc: "Hyper-realistic branding and AI-generated photography to stand out." },
      automation: { title: "Automation", desc: "CRMs, inventories, and lead flows that work for you 24/7." }
    },
    methodology: {
      title: "Methodology",
      steps: ["Initial Discovery", "Deep Analysis", "Technical Proposal", "Stellar Execution"]
    },
    contact: {
      title: "Ready for takeoff",
      cta: "Book your audit"
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};
