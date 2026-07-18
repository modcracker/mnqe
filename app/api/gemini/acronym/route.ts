import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

export async function POST(req: NextRequest) {
  try {
    const { industry } = await req.json();
    if (!industry || typeof industry !== "string") {
      return NextResponse.json(
        { error: "Industry field is required" },
        { status: 400 }
      );
    }

    const ai = getAiClient();

    const prompt = `Generate exactly 3 highly clever, unique, and viral startup branding concepts for the letters M.N.Q.E. 
The letters M, N, Q, E must stand for words starting with those letters in order (e.g., Marketing Next-Gen Quantum Ecosystem).
The concepts must be specifically customized to fit the following target industry niche: "${industry}".
Make the concepts sound like cutting-edge, high-growth startups or premium enterprise ventures. Include a tagline, a description of what they do, a brand vibe tag, and a estimated valuation based on high-scarcity branding.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              acronym: {
                type: Type.STRING,
                description: "Must always be 'M.N.Q.E.'",
              },
              title: {
                type: Type.STRING,
                description: "The full spelled out name starting with M, N, Q, E. (e.g. Mobile Network Quality Engine)",
              },
              description: {
                type: Type.STRING,
                description: "A detailed, compelling business pitch explaining what this startup does and why it is highly viral.",
              },
              vibe: {
                type: Type.STRING,
                description: "A short 1-3 word description of the brand design aesthetic (e.g., Enterprise Tech, Luxury Lifestyle, Cyberpunk Security).",
              },
              tagline: {
                type: Type.STRING,
                description: "A memorable, short, and punchy promotional tagline.",
              },
              estimatedValue: {
                type: Type.STRING,
                description: "A realistic premium domain-integrated valuation string (e.g. $285,000, $450,000).",
              },
            },
            required: ["acronym", "title", "description", "vibe", "tagline", "estimatedValue"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response text returned from Gemini API");
    }

    const parsedConcepts = JSON.parse(text.trim());
    return NextResponse.json({ concepts: parsedConcepts });

  } catch (error: any) {
    console.error("Gemini Acronym generation error:", error.message);
    
    // Fallback if key is missing or call fails
    return NextResponse.json(
      { 
        error: error.message || "Failed to generate concepts with Gemini",
        isFallback: true
      },
      { status: 200 } // Return 200 so the client can display custom fallbacks gracefully
    );
  }
}
