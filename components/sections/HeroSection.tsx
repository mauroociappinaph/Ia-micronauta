import React from 'react';
import { useLocaleStore } from '../../stores/useLocaleStore';
import { translations } from '../../lib/i18n';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/ciappinamaurooj/quick-call';

const HeroSection: React.FC = () => {
  const { locale } = useLocaleStore();
  const t = translations[locale];

  const handleAuditClick = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-48 pb-20 md:pt-64 overflow-hidden z-10">
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="font-display text-5xl md:text-8xl font-bold leading-[1.1] mb-8 tracking-tighter"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.7), 0 4px 12px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)'
              }}
            >
              {t.hero.headline}
            </h1>
            <p
              className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl leading-relaxed font-light"
              style={{
                textShadow: '0 1px 3px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4)'
              }}
            >
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(252, 202, 163, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAuditClick}
                className="bg-accent text-background text-lg font-black px-12 py-6 rounded-full transition-all flex items-center justify-center gap-3 group relative overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                {t.hero.cta}
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}
                className="bg-white/5 text-white text-lg font-bold px-10 py-5 rounded-full backdrop-blur-md transition-all border border-white/20 flex items-center justify-center gap-2 group"
              >
                {locale === 'es' ? 'Ver Servicios' : 'View Services'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
