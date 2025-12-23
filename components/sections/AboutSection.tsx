import React from 'react';
import { useLocaleStore } from '../../stores/useLocaleStore';
import { translations } from '../../lib/i18n';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const { locale } = useLocaleStore();
  const t = translations[locale];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-32 relative z-10 bg-black/5">
      <div className="container mx-auto px-6">
        <motion.div {...fadeIn} className="max-w-4xl">
          <h2
            className="text-accent font-display text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            <span className="w-12 h-[2px] bg-accent rounded-full"></span>
            {t.about.title}
          </h2>
          <p
            className="text-3xl md:text-5xl font-light leading-[1.2] tracking-tight text-white/90"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {t.about.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
