
import { MessageSquare, X, Send, Bot, Calendar, MessageCircle, ArrowLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import { useLocaleStore } from '../../stores/useLocaleStore';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { generateAIChatResponse } from '../../services/chatService';

const CALENDLY_URL = 'https://calendly.com/ciappinamaurooj/quick-call';

const ChatWidget: React.FC = () => {
  const { locale } = useLocaleStore();
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenNotification, setHasSeenNotification] = useState(false);
  const [step, setStep] = useState<'CHOICE' | 'WA_FORM' | 'AI_CHAT'>('CHOICE');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [waData, setWaData] = useState({ name: '', email: '', company: '', msg: '' });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const toggleChat = () => {
    if (!isOpen) setHasSeenNotification(true);
    setIsOpen(!isOpen);
    if (!isOpen) setStep('CHOICE');
  };

  const handleAISend = async () => {
    if (!input.trim()) return;
    const userText = input;
    setInput('');

    const updatedMessages = [...messages, { role: 'user' as const, text: userText }];
    setMessages(updatedMessages);
    setIsTyping(true);

    const botResponse = await generateAIChatResponse(userText, locale, updatedMessages);

    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
  };

  const handleWASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = buildWhatsAppLink(waData.name, waData.email, waData.company, waData.msg, "Chat Web", locale);
    window.open(link, '_blank');
    setIsOpen(false);
  };

  const handleCalendlyClick = () => {
    window.open(CALENDLY_URL, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="relative w-[260px] sm:w-[280px] mb-4"
          >
            <div className="absolute -inset-1 bg-accent/20 blur-2xl rounded-[1.5rem] pointer-events-none"></div>

            <div className="bg-[#2d7d78]/95 backdrop-blur-xl h-[380px] sm:h-[420px] rounded-[1.5rem] overflow-hidden flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/20 relative">

              <div className="bg-accent/10 border-b border-white/10 px-4 py-3 flex items-center justify-between shrink-0 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer"></div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-8 h-8 bg-[#1a4a47] rounded-full flex items-center justify-center border border-accent/30 shadow-[0_0_10px_rgba(252,202,163,0.3)]">
                      <Bot className="w-5 h-5 text-accent" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#1a4a47] animate-pulse"></div>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-white flex items-center gap-1">
                      ASTRO
                      <Sparkles className="w-2.5 h-2.5 text-accent animate-spin-slow" />
                    </p>
                    <p className="text-[8px] font-medium text-accent uppercase tracking-widest opacity-80">Asistente</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors group">
                  <X className="w-4 h-4 text-white/70 group-hover:text-white" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-4 bg-black/10 space-y-3" ref={scrollRef}>
                {step === 'CHOICE' && (
                  <div className="flex flex-col gap-2 pt-4">
                    <motion.button whileHover={{ scale: 1.02, x: 3 }} onClick={handleCalendlyClick} className="flex items-center gap-3 p-4 rounded-xl bg-accent text-[#1a4a47] text-left shadow-lg border border-white/30 relative overflow-hidden group">
                      <Calendar className="w-5 h-5 shrink-0" />
                      <div>
                        <span className="font-black text-[10px] uppercase block">Agendar Auditoría</span>
                        <span className="text-[8px] font-bold opacity-60">Call rápida con Mauro</span>
                      </div>
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.02, x: 3 }} onClick={() => setStep('WA_FORM')} className="flex items-center gap-3 p-4 rounded-xl bg-[#36958F] text-white text-left border border-white/10 hover:bg-[#3ea8a1] shadow-lg group">
                      <MessageCircle className="w-5 h-5 text-accent shrink-0 group-hover:rotate-12 transition-transform" />
                      <div>
                        <span className="font-bold text-[10px] uppercase block">WhatsApp Directo</span>
                        <span className="text-[8px] text-white/60">Respuesta rápida</span>
                      </div>
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.02, x: 3 }} onClick={() => { setStep('AI_CHAT'); setMessages([{ role: 'bot', text: locale === 'es' ? '¡Hola! Soy Astro. ¿Cómo te llamas?' : 'Hi! I am Astro. What is your name?' }]); }} className="flex items-center gap-3 p-4 rounded-xl bg-[#36958F] text-white text-left border border-white/10 hover:bg-[#3ea8a1] shadow-lg group">
                      <Bot className="w-5 h-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="font-bold text-[10px] uppercase block">Hablar con Astro</span>
                        <span className="text-[8px] text-white/60">Asistente IA</span>
                      </div>
                    </motion.button>
                  </div>
                )}

                {step === 'WA_FORM' && (
                  <form onSubmit={handleWASubmit} className="flex flex-col gap-2">
                    <button type="button" onClick={() => setStep('CHOICE')} className="text-[8px] flex items-center gap-1 text-accent font-bold mb-1 uppercase tracking-widest"><ArrowLeft className="w-3 h-3" /> Volver</button>
                    <input required placeholder="Tu nombre" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-[10px] text-white outline-none focus:ring-1 focus:ring-accent/50" value={waData.name} onChange={e => setWaData({...waData, name: e.target.value})} />
                    <input required placeholder="Tu negocio" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-[10px] text-white outline-none focus:ring-1 focus:ring-accent/50" value={waData.company} onChange={e => setWaData({...waData, company: e.target.value})} />
                    <textarea required placeholder="¿En qué te ayudamos?" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-[10px] h-20 text-white outline-none resize-none focus:ring-1 focus:ring-accent/50" value={waData.msg} onChange={e => setWaData({...waData, msg: e.target.value})} />
                    <motion.button whileHover={{ scale: 1.02 }} type="submit" className="bg-accent text-[#1a4a47] font-black p-3 rounded-lg mt-1 text-[9px] uppercase tracking-widest shadow-xl">Enviar a WhatsApp</motion.button>
                  </form>
                )}

                {step === 'AI_CHAT' && (
                  <div className="flex flex-col gap-3">
                    <button onClick={() => setStep('CHOICE')} className="text-[8px] text-accent font-bold mb-1 uppercase tracking-widest flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Menú</button>
                    {messages.map((m, i) => (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-3 rounded-[1rem] text-[11px] leading-relaxed shadow-lg ${m.role === 'user' ? 'bg-accent text-[#1a4a47] font-semibold rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none border border-white/10 backdrop-blur-sm'}`}>{m.text}</div>
                      </motion.div>
                    ))}
                    {isTyping && (
                      <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl w-fit ml-1 border border-white/10">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {step === 'AI_CHAT' && (
                <div className="p-3 border-t border-white/10 bg-black/20 flex gap-2 shrink-0 backdrop-blur-md">
                  <input type="text" className="flex-grow bg-white/5 rounded-full px-4 py-2 text-[10px] text-white outline-none focus:ring-1 focus:ring-accent/50 placeholder-white/20" placeholder={locale === 'es' ? 'Escribe aquí...' : 'Type here...'} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAISend()} />
                  <motion.button whileHover={{ scale: 1.1 }} onClick={handleAISend} className="bg-accent text-[#1a4a47] p-2 rounded-full shadow-lg"><Send className="w-3.5 h-3.5" /></motion.button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group flex justify-end">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleChat}
          className={`bg-accent text-[#1a4a47] p-3.5 rounded-full shadow-2xl border-2 border-white relative transition-all duration-500 animate-float btn-glow`}
        >
          <MessageSquare className="w-5 h-5" />
          {!hasSeenNotification && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full animate-bounce shadow-xl ring-1 ring-white">1</span>
          )}
          <div className="absolute inset-0 rounded-full animate-glow-pulse -z-10"></div>
        </motion.button>
      </div>
    </div>
  );
};

export default ChatWidget;
