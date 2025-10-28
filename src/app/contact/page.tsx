// src/app/contact/page.tsx
import PortfolioLayout from '@/components/PortfolioLayout';

export default function ContactPage() {
    return (
      <PortfolioLayout>
        <div className="relative z-10 min-h-screen p-6 pt-24 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-white">Get in Touch</h1>
  
          <form
            action="https://formspree.io/f/xwpwpwwn" 
            method="POST"
            className="w-full max-w-md space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-white/20 rounded bg-black/40 backdrop-blur-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-purple-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-white/20 rounded bg-black/40 backdrop-blur-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-purple-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 border border-white/20 rounded h-32 bg-black/40 backdrop-blur-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-purple-400"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
    
          <div className="mt-8 text-sm text-zinc-300 flex flex-col items-center">
            <span>Or connect on:</span>
            <div className="flex gap-5 mt-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/arushi-gupta11"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" className="text-purple-400 hover:text-purple-300">
                  <rect x="2" y="2" width="28" height="28" rx="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M11 14h3v8h-3zM12.5 11.5C11.67 11.5 11 10.83 11 10s.67-1.5 1.5-1.5S14 9.17 14 10s-.67 1.5-1.5 1.5zM17 14h3v1.27c.43-.61 1.23-1.27 2.3-1.27 2 0 2.7 1.1 2.7 3.18V22h-3v-3.2c0-.77-.02-1.8-1.1-1.8-1.1 0-1.3.86-1.3 1.75V22h-3v-8z" fill="currentColor"/>
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/ArushiG11"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                aria-label="GitHub"
              >
                <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" className="text-purple-400 hover:text-purple-300">
                  <rect x="2" y="2" width="28" height="28" rx="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 6c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.51.5.09.68-.21.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.18-1.11-1.5-1.11-1.5-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03 .89 1.53 2.34 1.09 2.9.83.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.09-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 16 9.66c.85.004 1.7.12 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.73c0 .27.18.58.69.48A10.01 10.01 0 0 0 26 16c0-5.52-4.48-10-10-10z" fill="currentColor"/>
                </svg>
              </a>
              {/* Gmail */}
              <a
                href="mailto:arushi.gupta1@rutgers.edu"
                className="hover:scale-110 transition"
                aria-label="Email"
              >
                <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" className="text-purple-400 hover:text-purple-300">
                  <rect x="2" y="2" width="28" height="28" rx="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path fill="currentColor" d="M7 10.5v11a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 23.5 9h-15A1.5 1.5 0 0 0 7 10.5zm3.04.43 4.96 3.71 4.96-3.71A.5.5 0 0 1 21 11.5v10a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .08-.27zm11.47-.86L16 13.92l-5.5-3.85a.5.5 0 0 1 .5-.57h11a.5.5 0 0 1 .51.57z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </PortfolioLayout>
    );
  }
  