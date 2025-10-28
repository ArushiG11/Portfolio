// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
type ChatMessage = { role: 'user' | 'assistant'; content: string };

export async function POST(req: NextRequest) {
    const { question, history }: { question: string; history: ChatMessage[] } = await req.json();


  if (!question) {
    return NextResponse.json({ error: "Missing question" }, { status: 400 });
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
  const prompt = `You are Arushi Gupta's AI assistant. Use the following resume and project context to answer questions honestly, concisely, and professionally:\n\n${context}\n\nQuestion: ${question}`;
  const chatMessages: ChatMessage[] = [
    { role: 'assistant', content: 'You are a helpful AI assistant for Arushi Gupta. Only answer based on the context.' },
    ...history,
    { role: 'user', content: prompt }
  ];
  
  const chatRes = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: chatMessages,
    temperature: 0.7,
  });
  

  const answer = chatRes.choices[0].message.content;
  return NextResponse.json({ answer });
}
