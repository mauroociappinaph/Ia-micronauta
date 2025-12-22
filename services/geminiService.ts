
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a response from Gemini for the chat assistant "Astro".
 * Focus: Sales closer, concise, non-robotic, remembers name, provides WA and Calendly links.
 */
export const generateAIChatResponse = async (userPrompt: string, locale: string, history: { role: 'user' | 'bot'; text: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const chatHistory = history.map(h => ({
    role: h.role === 'user' ? 'user' : 'model',
    parts: [{ text: h.text }]
  }));

  const waLink = "https://wa.me/5492235916616";
  const calendlyLink = "https://calendly.com/ciappinamaurooj/quick-call";

  const systemInstruction = locale === 'es' 
    ? `Eres "Astro", un consultor experto de Micronauta Agency. No eres un bot, eres un humano ayudando a otros.
       REGLAS CRÍTICAS:
       1. CONCISIÓN: Máximo 2-3 oraciones.
       2. PERSONALIZACIÓN: Si sabes el nombre del usuario, úsalo.
       3. CONVERSIÓN: Tu meta es que agenden la auditoría o vayan a WhatsApp.
       4. WHATSAPP: Proporciona este enlace exacto cuando sugieras hablar por ahí: ${waLink}
       5. CALENDLY: Proporciona este enlace cuando quieran agendar una reunión o auditoría: ${calendlyLink}
       6. TONO: Directo, profesional y empático.
       7. MEMORIA: Usa el historial para saber quién es el usuario.`
    : `You are "Astro", an expert consultant at Micronauta Agency. You are not a bot, but a human helping others.
       CRITICAL RULES:
       1. CONCISION: Max 2-3 sentences.
       2. PERSONALIZATION: If you know the user's name, use it.
       3. CONVERSION: Your goal is to get them to book the audit or go to WhatsApp.
       4. WHATSAPP: Provide this exact link when suggesting WhatsApp: ${waLink}
       5. CALENDLY: Provide this link when they want to book a meeting or audit: ${calendlyLink}
       6. TONE: Direct, professional, and empathetic.
       7. MEMORY: Use the history to know who the user is.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: `Historial previo: ${JSON.stringify(chatHistory)}` }] },
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 400,
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    const text = response.text?.trim();
    if (!text) throw new Error("Empty response");
    
    return text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return locale === 'es' 
      ? `Perdón, se cortó la señal. Escríbeme por aquí para agendar: ${waLink}` 
      : `Sorry, connection lost. Write me here to book: ${waLink}`;
  }
};
