
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { useLocaleStore } from '../../stores/useLocaleStore';
import { translations } from '../../lib/i18n';

const Footer: React.FC = () => {
  const { locale } = useLocaleStore();
  const t = translations[locale];

  return (
    <footer className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center justify-center">
            <img src="/assets/logos/Logo_Micronauta_3dnoBGpng.png" alt="Micronauta Logo" className="w-20 h-20 object-contain" />
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-white/60 hover:text-accent hover:scale-125 transition-all duration-300"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-white/60 hover:text-accent hover:scale-125 transition-all duration-300"><Linkedin className="w-6 h-6" /></a>
          </div>

          <p className="text-sm font-medium text-white/40 px-3 py-1 rounded-lg backdrop-blur-sm">
            © {new Date().getFullYear()} Micronauta. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
