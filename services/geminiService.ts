import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateSupportResponse = async (userMessage: string, context?: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // System instruction to act as a support agent
    const systemInstruction = `You are "SwiftBot", a helpful, professional, and friendly AI support assistant for SwiftLogistics, a courier company. 
    Your goal is to assist customers with tracking queries, service information, and general logistics questions.
    
    Context Information:
    - We offer Next Day, Standard, Bulk, and International shipping.
    - We cover all 64 districts in the country.
    - Tracking format is usually 'TRK' followed by 6 digits.
    - If a user asks about a specific tracking number, ask them to use the tracking tool on the homepage if you can't see it, or provide general advice.
    - Be concise and polite.
    
    Current User Context: ${context || 'None provided.'}`;

    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing technical difficulties. Please contact our hotline.";
  }
};