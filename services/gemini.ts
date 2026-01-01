
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the "Vedartha Insight Assistant". 
You represent Vedartha International Limited, a world-class professional services firm. 
Your goal is to help users understand Vedartha's services (Audit, Consulting, Tax, Advisory) and provide insights based on global trends.
Always be professional, insightful, and strategic.
If asked about Vedartha's mission, it is "To make an impact that matters".
Keep responses concise (max 3 sentences).`;

export async function getInsightResponse(prompt: string) {
  if (!process.env.API_KEY) {
    console.error("Gemini API Key is missing. Ensure process.env.API_KEY is configured.");
    return "I am currently in development mode. Please ensure the global configuration is active to receive real-time strategic insights.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      },
    });
    
    if (!response.text) {
      throw new Error("Empty response from Gemini API");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini Insight Error:", error);
    
    if (error?.message?.includes('401') || error?.message?.includes('API_KEY_INVALID')) {
      return "I'm having trouble authenticating with my knowledge base. Please check back later.";
    }
    
    return "Our systems are currently analyzing a high volume of global data. For immediate assistance, please visit our 'Contact Us' page or browse our latest thinking articles.";
  }
}
