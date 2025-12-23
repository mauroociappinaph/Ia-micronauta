
/**
 * Generates a response from our secure API endpoint for the chat assistant "Astro".
 * Focus: Sales closer, concise, non-robotic, remembers name, provides WA and Calendly links.
 * Security: API key is never exposed to the frontend - all calls go through our secure backend.
 */
export const generateAIChatResponse = async (userPrompt: string, locale: string, history: { role: 'user' | 'bot'; text: string }[]) => {
  try {
    // Call our secure API endpoint instead of directly calling Groq
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userPrompt,
        locale,
        history
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.response) {
      throw new Error("Empty response from API");
    }

    return data.response.trim();
  } catch (error) {
    console.error("API Error:", error);
    return locale === 'es'
      ? `Perdón, se cortó la señal. Escríbeme por aquí para agendar: https://wa.me/5492235916616`
      : `Sorry, connection lost. Write me here to book: https://wa.me/5492235916616`;
  }
};
