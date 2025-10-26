// src/components/Chat.tsx
'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="max-w-2xl w-full mx-auto p-4">
      <div className="min-h-[400px] border rounded-md p-4 space-y-4 bg-white dark:bg-zinc-900 overflow-y-auto">
        {messages.length === 0 && (
          <div className="text-zinc-500 text-sm">Hi, I'm [Your Name], ask me anything...</div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md">
            {msg}
          </div>
        ))}
      </div>

      <div className="flex mt-4 items-center gap-2">
      <div className="flex flex-wrap gap-2 mb-2">
        {['Give me your 30-second pitch', 'List your skills', 'Tell me about your projects'].map((prompt) => (
            <button
            key={prompt}
            onClick={() => {
                setMessages([...messages, prompt]);
            }}
            className="text-xs px-3 py-1 bg-zinc-200 dark:bg-zinc-700 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-600"
            >
            {prompt}
            </button>
        ))}
        </div>

        <input
          className="flex-1 border rounded-md p-2 text-sm bg-white dark:bg-zinc-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your question..."
        />
        <button
          className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-md"
          onClick={sendMessage}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
