
import React from 'react';
import { useLocaleStore } from '../../stores/useLocaleStore';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const { locale } = useLocaleStore();
  
  const handleClick = () => {
    // Fixed: buildWhatsAppLink expects 6 arguments. Providing placeholders for missing data.
    const link = buildWhatsAppLink(
      "Usuario Web", 
      "vía botón flotante", 
      "Empresa no especificada", 
      "Hola! Quisiera recibir más información sobre los servicios de Micronauta.", 
      "General", 
      locale
    );
    window.open(link, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Contact on WhatsApp"
      className="fixed bottom-[92px] right-7 bg-green-500 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform z-40 md:flex hidden border-2 border-background"
    >
      <MessageCircle className="w-5 h-5" />
    </button>
  );
};

export default WhatsAppButton;
