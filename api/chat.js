const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userPrompt, locale = 'es', history = [] } = req.body;

    // Convertir historial al formato de Groq
    const messages = [
      // System message
      {
        role: 'system',
        content: locale === 'es'
          ? `Eres "Astro", un consultor experto de Micronauta Agency. No eres un bot, eres un humano ayudando a otros.
             REGLAS CRÍTICAS:
             1. CONCISIÓN: Máximo 2-3 oraciones.
             2. PERSONALIZACIÓN: Si sabes el nombre del usuario, úsalo.
             3. CONVERSIÓN: Tu meta es que agenden la auditoría o vayan a WhatsApp.
             4. WHATSAPP: Proporciona este enlace exacto cuando sugieras hablar por ahí: https://wa.me/5492235916616
             5. CALENDLY: Proporciona este enlace cuando quieran agendar una reunión o auditoría: https://calendly.com/ciappinamaurooj/quick-call
             6. TONO: Directo, profesional y empático.
             7. MEMORIA: Usa el historial para saber quién es el usuario.`
          : `You are "Astro", an expert consultant at Micronauta Agency. You are not a bot, but a human helping others.
             CRITICAL RULES:
             1. CONCISION: Max 2-3 sentences.
             2. PERSONALIZATION: If you know the user's name, use it.
             3. CONVERSION: Your goal is to get them to book the audit or go to WhatsApp.
             4. WHATSAPP: Provide this exact link when suggesting WhatsApp: https://wa.me/5492235916616
             5. CALENDLY: Provide this link when they want to book a meeting or audit: https://calendly.com/ciappinamaurooj/quick-call
             6. TONE: Direct, professional, and empathetic.
             7. MEMORY: Use the history to know who the user is.`
      },
      // Convertir historial
      ...history.map(h => ({
        role: h.role === 'user' ? 'user' : 'assistant',
        content: h.text
      })),
      // Prompt actual
      {
        role: 'user',
        content: userPrompt
      }
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
        model: 'llama3-70b-8192',
      temperature: 0.7,
      max_tokens: 400,
      top_p: 1,
      stream: false,
    });

    const response = chatCompletion.choices[0]?.message?.content;

    if (!response) {
      throw new Error('No response from Groq');
    }

    res.status(200).json({ response });

  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      error: 'Error interno del servidor',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
