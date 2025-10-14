import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables
// Note: For Create React App, environment variables must be prefixed with REACT_APP_
// However, adhering to the provided guidelines, we use process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * Generates content using the Gemini API based on a given prompt.
 *
 * @param {string} prompt The text prompt to send to the model.
 * @returns {Promise<string>} A promise that resolves to the generated text.
 * @throws {Error} Throws an error if the API call fails or returns no text.
 */
export const generateContent = async (prompt: string): Promise<string> => {
  try {
    // Using a model suitable for complex text tasks as per guidelines
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt
    });
    
    const text = response.text;
    
    if (text) {
      return text;
    } else {
      // Per guideline, response.text is the correct way. If it's empty, we should handle it.
      throw new Error("API returned no text content.");
    }
  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    // Re-throw the error to be handled by the calling UI component
    if (error instanceof Error) {
        throw new Error(`Failed to generate content from Gemini API: ${error.message}`);
    }
    throw new Error("An unknown error occurred while calling the Gemini API.");
  }
};
