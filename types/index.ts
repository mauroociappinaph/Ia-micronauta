
export type Locale = 'es' | 'en';

export interface TranslationSchema {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
  };
  services: {
    title: string;
    web: { title: string; desc: string };
    branding: { title: string; desc: string };
    automation: { title: string; desc: string };
  };
  methodology: {
    title: string;
    steps: string[];
  };
  contact: {
    title: string;
    cta: string;
  };
  footer: {
    rights: string;
  };
}

export enum ChatStep {
  INITIAL = 'INITIAL',
  WHATSAPP = 'WHATSAPP',
  EXPLORE = 'EXPLORE',
  CALENDLY = 'CALENDLY',
  AI_CHAT = 'AI_CHAT'
}
