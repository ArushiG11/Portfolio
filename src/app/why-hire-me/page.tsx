"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import PortfolioLayout from '@/components/PortfolioLayout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const FAQs = [
  "What roles are you open to?",
  "What are your strengths in AI?",
  "What tech stack are you most comfortable with?",
];

export default function WhyHireMePage() {
  const router = useRouter();
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typedResponse, setTypedResponse] = useState('');

  const sendMessage = async (question: string) => {
    if (!question.trim()) return;
    
    const history = messages.map((msg) => ({
      role: msg.type === 'user' ? 'user' : 'assistant',
      content: msg.text,
    }));

    setMessages([...messages, { type: 'user', text: question }]);
    setIsTyping(true);
    setTypedResponse('');
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, history }),
      });

      const data = await res.json();
      const answer = data.answer || 'Sorry, I couldn\'t find an answer.';

      // Animate typing
      let i = 0;
      const speed = 15;
      const interval = setInterval(() => {
        setTypedResponse((prev) => prev + answer.charAt(i));
        i++;
        if (i >= answer.length) {
          clearInterval(interval);
          setMessages((prev) => [...prev, { type: 'bot', text: answer }]);
          setTypedResponse('');
          setIsTyping(false);
        }
      }, speed);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [...prev, { type: 'bot', text: 'An error occurred. Please try again.' }]);
      setIsTyping(false);
    }
  };

  return (
    <PortfolioLayout>
      <div className="relative z-10 min-h-screen px-4 py-12 pt-24 pb-32">
        {/* Close button in top right */}
        <Link 
          href="/" 
          className="hidden md:flex fixed top-6 right-6 z-50 w-10 h-10 items-center justify-center bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition hover:scale-110"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <img
                  src="/avatar_sticker.svg"
                  alt="Arushi Gupta Avatar"
                  className="object-contain w-16 h-16"
                  style={{
                    background: "transparent",
                    borderRadius: "0.5rem" // subtle blending, not a full circle
                  }}
                />
              <div>
                <h1 className="text-2xl font-bold text-white">Arushi Gupta</h1>
                <p className="text-sm text-zinc-400">AI/ML Engineer | Data Science & MLOps</p>
                <div className="flex items-center gap-1 mt-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-4 h-4 text-zinc-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 21c-3.866-4.942-6-8.311-6-11a6 6 0 1112 0c0 2.689-2.134 6.058-6 11z" 
                    />
                    <circle cx="12" cy="10" r="2" fill="currentColor" />
                  </svg>
                  <span className="text-xs text-zinc-400">New York Metropolitan area</span>
                </div>
              </div>
              
            </div>
            <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/30">Open to opportunities</span>
          </div>

          <div className="mb-6">
            <p className="text-sm text-zinc-300">
              I bring full-stack development and AI/ML pipeline experience across cloud-native environments and scalable architectures. My past work includes RAG pipelines, LLM integrations, data dashboards, and open-source contributions.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold mb-2 text-white">💻 Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-zinc-300">
              {[
                'Python','FastAPI','PostgreSQL + pgvector','Azure','Hugging Face Transformers',
                'RAG','Docker','AWS (Lambda, S3, Cognito)','GCP (Cloud Run, Firestore)',
                'React + Next.js','LangChain / LangGraph','CI/CD (GitHub Actions)'
              ].map(skill => (
                <span
                  key={skill}
                  className="px-2 py-1  rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>



          <div className="mb-6">
            <h2 className="font-semibold mb-2 text-white">💡 What I Bring</h2>
            <ul className="list-disc pl-6 text-sm text-zinc-300 space-y-1">
              <li>AI/ML systems: RAG pipelines, Langfuse telemetry, OpenAI integration</li>
              <li>Fast prototyping using Python, Streamlit, FastAPI, and React</li>
              <li>Experience with MLOps, cloud infra, and DevOps automation</li>
              <li>User-centered design and scalable app architecture</li>
            </ul>
          </div>

          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => router.push('/contact')}
              className="bg-white text-black text-sm px-4 py-2 rounded-full hover:scale-105 transition font-semibold"
            >
              Contact Me
            </button>
            <button 
              onClick={() => router.push('/resume')}
              className="border border-white/20 text-white text-sm px-4 py-2 rounded-full hover:bg-white/10 transition"
            >
              View Resume
            </button>
          </div>

          {/* Chat + FAQ */}
          <div className="border-t border-white/20 pt-6">
            <h3 className="font-semibold text-white mb-2">Ask Me Anything</h3>
            
            {/* Messages Display */}
            {messages.length > 0 && (
              <div className="mb-4 max-h-64 overflow-y-auto space-y-3">
                <AnimatePresence initial={false}>
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                  className={`flex items-start gap-2 ${
                    msg.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 flex-shrink-0 rounded-full border border-white/20 overflow-hidden bg-purple-500/20">
                      <img 
                        src="/avatar_sticker.svg" 
                        alt="Arushi"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-xl text-sm ${
                      msg.type === 'user'
                        ? 'bg-white text-black'
                        : 'bg-white/5 text-white border border-white/10'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.type === 'user' && (
                    <div className="w-8 h-8 flex-shrink-0 rounded-full border border-white/20 overflow-hidden bg-white/10">
                      <img 
                        src="/user_mascot.svg" 
                        alt="User"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Typing indicator */}
                {typedResponse && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start gap-2 justify-start"
                  >
                    <div className="w-8 h-8 flex-shrink-0 rounded-full border border-white/20 overflow-hidden bg-purple-500/20">
                      <img 
                        src="/avatar_sticker.svg" 
                        alt="Arushi"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="max-w-[80%] p-3 rounded-xl text-sm bg-white/5 text-white border border-white/10">
                      {typedResponse}
                      <span className="animate-pulse">|</span>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            <div className="mb-2 flex flex-wrap gap-2">
              {FAQs.map((faq, idx) => (
                <button 
                  key={idx} 
                  onClick={() => sendMessage(faq)} 
                  disabled={isTyping}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 transition disabled:opacity-50"
                >
                  {faq}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                placeholder="What else would you like to know?"
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-black/40 backdrop-blur-sm text-white placeholder:text-zinc-400 text-sm focus:outline-none focus:border-purple-400"
                disabled={isTyping}
              />
              <button 
                onClick={() => sendMessage(input)} 
                disabled={isTyping}
                className="px-3 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition disabled:opacity-50"
              >
                ➜
              </button>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}
