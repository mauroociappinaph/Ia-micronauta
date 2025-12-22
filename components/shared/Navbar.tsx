
import React, { useState, useEffect } from 'react';
import { useLocaleStore } from '../../stores/useLocaleStore';
import { translations } from '../../lib/i18n';
import { Globe, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { locale, setLocale } = useLocaleStore();
  const t = translations[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 opacity-90 backdrop-blur-sm ${scrolled ? 'py-3 shadow-xl border-b border-white/10' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="cursor-pointer group"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="flex items-center justify-center">
            <img src="/assets/logos/Logo_Micronauta_3dnoBGpng.png" alt="Micronauta Logo" className="w-20 h-20 object-contain" />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('services')} className="hover:text-accent transition-colors font-medium text-white">Servicios</button>
          <button onClick={() => scrollTo('methodology')} className="hover:text-accent transition-colors font-medium text-white">Metodología</button>
          <button
            onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
            className="flex items-center gap-1.5 hover:text-accent transition-colors uppercase font-bold text-sm tracking-widest bg-white/10 px-3 py-1 rounded-lg text-white"
          >
            <Globe className="w-4 h-4" />
            {locale}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-accent text-background px-6 py-2.5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(252,202,163,0.4)] hover:scale-105 transition-all"
          >
            {t.hero.cta}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#36958F] p-8 flex flex-col gap-8 items-center justify-center shadow-2xl animate-in fade-in duration-300">
          <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
            <X className="w-10 h-10" />
          </button>
          <button onClick={() => scrollTo('services')} className="text-2xl font-bold text-white">Servicios</button>
          <button onClick={() => scrollTo('methodology')} className="text-2xl font-bold text-white">Metodología</button>
          <button onClick={() => setLocale(locale === 'es' ? 'en' : 'es')} className="flex items-center gap-2 uppercase font-black text-xl bg-white/10 px-6 py-3 rounded-2xl text-white">
            <Globe className="w-6 h-6" />
            {locale}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-accent text-background px-10 py-5 rounded-full font-black w-full text-xl shadow-lg mt-4"
          >
            {t.hero.cta}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
