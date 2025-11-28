import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
// Note: In a production app, you should use a backend proxy to hide the key.
// For this client-side demo, we'll use the key directly as requested.
const API_KEY = "AIzaSyCb39XGWLmxUKzzTQ-dAUw6P4wewsCqstM";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const checkAnswerWithAI = async (riddleQuestion, correctAnswer, userAnswer) => {
    try {
        const prompt = `
      You are a friendly, encouraging judge for a kid's riddle game.
      
      Riddle: "${riddleQuestion}"
      Correct Answer: "${correctAnswer}"
      Kid's Answer: "${userAnswer}"
      
      Task:
      1. Determine if the kid's answer is correct (or close enough).
      2. Provide a short, encouraging feedback message (max 2 sentences).
      3. If incorrect, give a small hint without revealing the answer.
      
      Return ONLY a JSON object with this format:
      {
        "isCorrect": boolean,
        "feedback": "string"
      }
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean up the response in case it includes markdown code blocks
        const jsonString = text.replace(/```json/g, '').replace(/```/g, '').trim();

        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error calling Gemini:", error);
        // Fallback if API fails
        return {
            isCorrect: false,
            feedback: "Oops! I couldn't check your answer right now. Please try again!"
        };
    }
};
