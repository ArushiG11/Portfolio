// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";
import { createClient } from "@supabase/supabase-js";
import { getCustomResponse } from "@/data/customResponses";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
type ChatMessage = { role: 'user' | 'assistant' | 'system'; content: string };

export async function POST(req: NextRequest) {
    const { question, history }: { question: string; history: ChatMessage[] } = await req.json();

  if (!question) {
    return NextResponse.json({ error: "Missing question" }, { status: 400 });
  }

  // Check for custom responses first (greetings, hobbies, etc.)
  const customResponse = getCustomResponse(question);
  if (customResponse) {
    return NextResponse.json({ answer: customResponse });
  }

  // Step 1: Embed the user query
  const embeddingRes = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: question,
  });

  const queryEmbedding = embeddingRes.data[0].embedding;

  // Step 2: Vector search in Supabase
  const { data: matches, error } = await supabase.rpc("match_documents", {
    query_embedding: queryEmbedding,
    match_threshold: 0.78,
    match_count: 5,
  });

  if (error || !matches) {
    console.error("Supabase match error:", error);
    return NextResponse.json({ error: "Vector search failed" }, { status: 500 });
  }

  const context = matches.map((doc: any) => doc.content).join("\n\n");

  // Step 3: Generate response with OpenAI
  const prompt = `You are Arushi Gupta's AI assistant. Use the following resume and project context to answer questions honestly, concisely, and professionally. 

If the question is about personal interests, hobbies, or general conversation that's not in the resume, you can have a friendly, conversational response while staying professional.

Context from resume and projects:
${context}

Question: ${question}

Provide a helpful, authentic answer based on the context available.`;
  
  const chatMessages = [
    { role: 'system' as const, content: 'You are a helpful, friendly AI assistant representing Arushi Gupta. Answer questions based on the resume context when available, and have natural conversations when appropriate.' },
    ...history,
    { role: 'user' as const, content: prompt }
  ];
  
  const chatRes = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: chatMessages,
    temperature: 0.7,
  });
  

  const answer = chatRes.choices[0].message.content;
  return NextResponse.json({ answer });
}
