
export const buildWhatsAppLink = (
  name: string,
  email: string,
  company: string,
  message: string,
  category: string,
  locale: string
): string => {
  const phone = "5492235916616";
  const timestamp = new Date().toLocaleString(locale === 'es' ? 'es-AR' : 'en-US');
  
  // Plantilla con formato de WhatsApp (asteriscos para negritas)
  // Se eliminan placeholders genéricos para forzar el uso de las variables de entrada
  const fullMessage = 
    `🚀 *NUEVA CONSULTA - MICRONAUTA WEB*\n\n` +
    `👤 *Cliente:* ${name || 'No provisto'}\n` +
    `📧 *Email:* ${email || 'No provisto'}\n` +
    `🏢 *Empresa:* ${company || 'No provisto'}\n` +
    `📂 *Asunto:* ${category}\n` +
    `💬 *Mensaje:* ${message || 'Sin mensaje'}\n\n` +
    `────────────────\n` +
    `⏰ _Enviado el: ${timestamp}_`;
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;
};
