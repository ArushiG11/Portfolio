'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Chat() {
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typedResponse, setTypedResponse] = useState('');

  const sendMessage = async () => {
    const question = input.trim();
    if (!question) return;
    const history = messages.map((msg) => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.text,
      }));
      

    setMessages([...messages, { type: 'user', text: question }]);
    setInput('');
    setIsTyping(true);
    setTypedResponse('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, history }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const text = await res.text();
      if (!text) {
        throw new Error('Empty response from server');
      }

      const data = JSON.parse(text);
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

  const sendMessageWithPrompt = async (promptText: string) => {
    setMessages([...messages, { type: 'user', text: promptText }]);
    setInput('');
    setIsTyping(true);
    setTypedResponse('');
    
    const history = messages.map((msg) => ({
      role: msg.type === 'user' ? 'user' : 'assistant',
      content: msg.text,
    }));
  
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: promptText, history }),
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const text = await res.text();
      if (!text) {
        throw new Error('Empty response from server');
      }

      const data = JSON.parse(text);
      const answer = data.answer || 'Sorry, I couldn\'t find an answer.';
  
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
    <div className="max-w-2xl w-full mx-auto p-4">
        <div className="flex flex-wrap gap-2 mb-4">
        {[
            'Tell me about your experience at MAQ Software',
            'What are your top skills?',
            'What did you do at Robot Toolworx?',
        ].map((prompt) => (
            <button
            key={prompt}
            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 transition disabled:opacity-50"
            onClick={() => {
                setInput(prompt);
                sendMessageWithPrompt(prompt);
            }}
            disabled={isTyping}
            >
            {prompt}
            </button>
        ))}
        </div>

      <div className="min-h-[400px] border border-white/20 rounded-md p-4 space-y-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
        {messages.length === 0 && (
          <div className="text-zinc-400 text-sm">
            Hi, I'm Arushi. Ask me anything about my experience or projects!
          </div>
        )}
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
                    className={`max-w-[75%] p-3 rounded-xl text-sm ${
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


        {typedResponse && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-2 justify-start"
        >
            <div className="w-8 h-8 flex-shrink-0 rounded-full border border-white/20 overflow-hidden bg-purple-500/20">
              <img 
                src="/avatar_sticker.svg" 
                alt="Arushi"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="max-w-[75%] p-3 rounded-xl text-sm bg-white/5 text-white border border-white/10">
            {typedResponse}
            <span className="animate-pulse">|</span>
            </div>
        </motion.div>
        )}

      </div>

      <div className="flex mt-4 items-center gap-2">
        <input
          className="flex-1 border border-white/20 rounded-lg p-3 text-sm bg-white/5 text-white placeholder:text-zinc-400 focus:outline-none focus:border-purple-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask about my skills, projects, or experience..."
          disabled={isTyping}
        />
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg transition disabled:opacity-50"
          onClick={sendMessage}
          disabled={isTyping}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
