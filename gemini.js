import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config()
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro-latest" });
    const prompt = "I am picking a Jungler for my draft. The enemy team consists of Rumble, Kindred, Lissandra, Jhin, and Gragas. What should I pick to counter the enemy's team kits? Please suggest 3 defensive and 3 offensive champions."
    const result = await model.generateContent(prompt)
    const response = await result.response;
    const text = response.text();
    console.log(`Text: ${text}`)
}

run();