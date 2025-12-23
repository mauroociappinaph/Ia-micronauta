import React from 'react';
import { useLocaleStore } from '../../stores/useLocaleStore';
import { translations } from '../../lib/i18n';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const MethodologySection: React.FC = () => {
  const { locale } = useLocaleStore();
  const t = translations[locale];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const methodologySteps = t.methodology.steps.map((text, i) => ({
    title: text,
    desc: t.methodology.descriptions[i]
  }));

  return (
    <section id="methodology" className="py-40 relative overflow-hidden z-10 bg-black/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <h2
            className="font-display text-5xl md:text-6xl font-bold mb-6 tracking-tighter"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {t.methodology.title}
          </h2>
          <p
            className="text-accent/80 text-xl font-bold uppercase tracking-[0.3em]"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            VIAJE ESTELAR
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[4px] bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent via-white to-accent w-full origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-32 relative">
            {methodologySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, type: "spring" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-white/5 p-10 rounded-[3rem] transition-all duration-500 backdrop-blur-sm group hover:translate-y-[-10px]">
                    <div className="inline-block px-4 py-1.5 bg-accent/20 rounded-full mb-4">
                      <span className="text-accent font-black text-xs uppercase tracking-widest">Fase 0{idx + 1}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 -translate-x-[2px] md:-translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 150, delay: idx * 0.2 + 0.5 }}
                    className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center z-10"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </motion.div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
