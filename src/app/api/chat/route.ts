import connectDB from "@/lib/db";
import Settings from "@/model/settings.model";
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        const {message, ownerId} = await req.json()
        if(!message || !ownerId){
            return NextResponse.json(
                {message:"message and ownerID is required"},
                {status:400}
            )
        }

        await connectDB()
        const settings = await Settings.findOne({ownerId})
        if(!settings){
             return NextResponse.json(
                {message:"Chatbot is not configured yet."},
                {status:400}
            )
        }
        const KNOWLEDGE = `
        business name- ${settings.businessName || "not provided"}
        support email- ${settings.supportEmail || "not provided"}
        knowledge- ${settings.knowledge || "not provided"}

        `

        const prompt = `
        You are a professional customer support assistant for this business.
        
        Use only the information provided below to answer the customer's questions.
        You may rephrase, summarize, ot interpret the information if needed.
        Do NOT invent new policies, prices, or promises.
        
        If the customer's question is completely unrelated to the information, 
        or cannot be reasonably answered from it, reply exactly with:
        "Please contact support."

        -------------------------
        BUSINESS INFORMATION
        -------------------------
        &{KNOWLEDGE}

        -------------------------
        CUSTOMER QUESTION
        -------------------------
        {$message}

        -------------------------
        ANSWER
        -------------------------
         `;

         const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});
          const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return NextResponse.json(response)
    } catch (error) {
         return NextResponse.json(
                {message:`Error ${error}`},
                {status:500}
            )
    }
}