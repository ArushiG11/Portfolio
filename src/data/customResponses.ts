// src/data/customResponses.ts

export interface CustomResponse {
  keywords: string[];
  response: string;
}

export const customResponses: CustomResponse[] = [
  // Greetings
  {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'sup', 'howdy'],
    response: "Hi there! 👋 I'm Arushi. Thanks for stopping by my portfolio! Feel free to ask me anything about my experience, projects, skills, or even my interests."
  },
  {
    keywords: ['how are you', 'how are you doing', "how's it going", 'how have you been'],
    response: "I'm doing great, thanks for asking! Building cool things with AI and ML keeps me energized. How can I help you today?"
  },
  {
    keywords: ['who are you', 'what is your name', 'introduce yourself', 'tell me about yourself'],
    response: "I'm Arushi Gupta, an AI/ML Engineer specializing in full-stack development and AI pipeline experience. I love working with RAG systems, LLM integrations, and building scalable applications. What would you like to know about me?"
  },
  
  // Hobbies & Personal Interests (add your custom answers here)
  {
    keywords: ['hobby', 'hobbies', 'interests', 'what do you like to do', 'what do you do for fun', 'free time'],
    response: "When I'm not coding, I love reading historical fiction or romance novels, watching anime, or binge-watching debates on YouTube! What about you?"
  },
  
  // General thanks
  {
    keywords: ['thanks', 'thank you', 'appreciate it'],
    response: "You're welcome! Happy to help. Feel free to ask me anything else!"
  },
  
  // Encouraging collaboration
  {
    keywords: ['contact', 'reach out', 'collaborate', 'work together', 'get in touch'],
    response: "Absolutely! I'm always open to collaborating on interesting projects. Feel free to reach out through the contact page or connect with me on LinkedIn. I'd love to hear about what you're working on!"
  }
];

export function getCustomResponse(userMessage: string): string | null {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const customResponse of customResponses) {
    // Check if any keyword matches
    if (customResponse.keywords.some(keyword => 
      lowerMessage.includes(keyword) || 
      lowerMessage === keyword ||
      lowerMessage.split(' ').includes(keyword)
    )) {
      return customResponse.response;
    }
  }
  
  return null;
}

