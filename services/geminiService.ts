import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * Generates text content using the Gemini API.
 * @param {string} prompt The text prompt to send to the model.
 * @returns {Promise<string>} A promise that resolves to the generated text.
 */
export const generateContent = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt
    });
    
    const text = response.text;
    
    if (text) {
      return text;
    } else {
      throw new Error("API returned no text content.");
    }
  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate content: ${error.message}`);
    }
    throw new Error("An unknown error occurred while calling the Gemini API.");
  }
};


/**
 * Generates an image using the Imagen API.
 * @param {string} prompt The text prompt describing the desired image.
 * @returns {Promise<string>} A promise that resolves to the base64 encoded image data.
 */
export const generateArchitecturalImage = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                // Use a landscape aspect ratio for a more cinematic view
                aspectRatio: '16:9', 
            },
        });

        const image = response.generatedImages[0]?.image?.imageBytes;

        if (image) {
            return image;
        } else {
            throw new Error("API returned no image data.");
        }
    } catch (error) {
        console.error("Error generating image from Gemini API:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to generate image: ${error.message}`);
        }
        throw new Error("An unknown error occurred while generating the image.");
    }
};