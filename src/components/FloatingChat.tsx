'use client';

import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center transition hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-black border border-white/20 rounded-lg shadow-2xl w-full max-w-md h-[600px] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-purple-500/20">
                    <img 
                      src="/avatar_sticker.svg" 
                      alt="Arushi"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Chat with Arushi</h3>
                    <p className="text-xs text-zinc-400">Ask me anything!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-zinc-400 transition p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-zinc-400 text-sm text-center py-8">
                    Hi! I'm Arushi. Ask me anything about my experience, projects, or skills!
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
                            ? 'bg-purple-500 text-white'
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

              {/* Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex gap-2">
                  <input
                    className="flex-1 border border-white/20 rounded-lg p-3 text-sm bg-white/5 text-white placeholder:text-zinc-400 focus:outline-none focus:border-purple-400"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask me anything..."
                    disabled={isTyping}
                  />
                  <button
                    className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg transition disabled:opacity-50"
                    onClick={sendMessage}
                    disabled={isTyping}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

