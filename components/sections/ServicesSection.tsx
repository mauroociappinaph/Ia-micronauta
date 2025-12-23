import React from 'react';
import { useLocaleStore } from '../../stores/useLocaleStore';
import { translations } from '../../lib/i18n';
import { motion } from 'framer-motion';
import { Layout, Cpu, Sparkles } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { locale } = useLocaleStore();
  const t = translations[locale];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="services" className="py-40 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-20">
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tighter"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {t.services.title}
          </h2>
          <p
            className="text-white/60 text-lg max-w-xl mx-auto font-light"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {locale === 'es' ? 'Soluciones digitales diseñadas para el crecimiento real.' : 'Digital solutions designed for real growth.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Web Design Card */}
          <motion.div
            {...fadeIn}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-teal-500/15 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 group flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
              <Layout className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">{t.services.web.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
              {t.services.web.desc}
            </p>
            <div className="w-full h-[1px] bg-white/10 group-hover:bg-accent/30 transition-colors" />
          </motion.div>

          {/* Visual AI Card */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-teal-500/15 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 group flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">{t.services.branding.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
              {t.services.branding.desc}
            </p>
            <div className="w-full h-[1px] bg-white/10 group-hover:bg-accent/30 transition-colors" />
          </motion.div>

          {/* Automation Card */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-teal-500/15 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 group flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">{t.services.automation.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
              {t.services.automation.desc}
            </p>
            <div className="w-full h-[1px] bg-white/10 group-hover:bg-accent/30 transition-colors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
