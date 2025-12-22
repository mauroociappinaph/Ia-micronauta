
import React, { useState, useEffect } from 'react';
import { useLocaleStore } from '../stores/useLocaleStore';
import { translations } from '../lib/i18n';
import { motion } from 'framer-motion';
import { Layout, Cpu, Sparkles, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/ciappinamaurooj/quick-call';

const LandingPage: React.FC<{ backgroundImage?: string }> = ({ backgroundImage }) => {
  const { locale } = useLocaleStore();
  const t = translations[locale];
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      const handleVideoEnd = () => {
        setShowContent(true);
      };
      video.addEventListener('ended', handleVideoEnd);
      return () => video.removeEventListener('ended', handleVideoEnd);
    }
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleAuditClick = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  const methodologySteps = t.methodology.steps.map((text, i) => ({
    title: text,
    desc: locale === 'es'
      ? [
          "Definimos objetivos y alcances reales.",
          "Auditamos tu presencia actual y competencia.",
          "Diseñamos el roadmap tecnológico a medida.",
          "Lanzamos tu proyecto con soporte continuo."
        ][i]
      : [
          "We define real goals and scopes.",
          "We audit your current presence and competition.",
          "We design the custom technological roadmap.",
          "We launch your project with continuous support."
        ][i]
  }));

  return (
    <div
      className="relative bg-background"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Decorative Lights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[50%] bg-white/5 blur-[120px] rounded-full animate-float"></div>
      </div>

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Services Section */}
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

      {/* Methodology Section */}
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

      {/* Contact Section */}
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
              {locale === 'es'
                ? 'Agenda tu consultoría gratuita hoy y despega.'
                : 'Book your free consultation today and liftoff.'}
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
    </div>
  );
};

export default LandingPage;
