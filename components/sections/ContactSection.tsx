import React from 'react';
import { useLocaleStore } from '../../stores/useLocaleStore';
import { translations } from '../../lib/i18n';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/ciappinamaurooj/quick-call';

const ContactSection: React.FC = () => {
  const { locale } = useLocaleStore();
  const t = translations[locale];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleAuditClick = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <section id="contact" className="py-48 relative overflow-hidden z-10">
      <div className="container mx-auto px-6 text-center">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2
            className="font-display text-6xl md:text-8xl font-bold mb-10 tracking-tighter italic"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {t.contact.title.toUpperCase()}
          </h2>
          <p
            className="text-2xl md:text-3xl font-light opacity-90 mb-16 leading-relaxed"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {t.contact.subtitle}
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAuditClick}
            className="bg-accent text-background text-2xl md:text-4xl font-black px-16 md:px-24 py-8 md:py-12 rounded-[3rem] shadow-[0_30px_100px_rgba(252,202,163,0.3)] hover:shadow-[0_40px_120px_rgba(252,202,163,0.5)] transition-all flex items-center justify-center gap-6 mx-auto group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span>{t.contact.cta}</span>
            <ArrowRight className="w-10 h-10 md:w-12 md:h-12 group-hover:translate-x-4 transition-transform duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
