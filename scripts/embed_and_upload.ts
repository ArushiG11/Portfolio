import { createClient } from "@supabase/supabase-js";
import { OpenAI } from "openai";
import * as dotenv from "dotenv";
import { chunks } from "./resume_chunks";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

async function embedAndUpload() {
  for (const chunk of chunks) {
    const embedding = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: chunk.content,
    });

    const { error } = await supabase.from("documents").insert({
      content: chunk.content,
      metadata: chunk.metadata,
      embedding: embedding.data[0].embedding,
    });

    if (error) {
      console.error("Insert error:", error);
    } else {
      console.log(`✅ Uploaded: ${chunk.metadata.title || chunk.metadata.section}`);
    }
  }
}

embedAndUpload();
