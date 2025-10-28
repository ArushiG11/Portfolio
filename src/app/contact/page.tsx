// src/app/contact/page.tsx
import PortfolioLayout from '@/components/PortfolioLayout';

export default function ContactPage() {
    return (
      <PortfolioLayout>
        <div className="relative z-10 min-h-screen p-6 pt-24 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-white text-center">Get in Touch</h1>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Contact Info Card */}
            <div className="border border-white/20 p-8 rounded-lg bg-black/40 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-6">Let's Connect</h2>
              <div className="flex flex-col items-center space-y-6">
                {/* Avatar Image */}
                <img
                  src="/avatar_sticker.svg"
                  alt="Arushi Gupta Avatar"
                  className="w-24 h-24 rounded-full border-4 border-purple-400 shadow-lg mb-2"
                />
                {/* Name */}
                <div className="flex items-center gap-3">
                  <span className="text-zinc-300">Arushi Gupta</span>
                </div>
                <div className="space-y-4 w-full">
                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                    <span className="text-zinc-300">New York Metropolitan area</span>
                  </div>
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a 
                      href="mailto:arushi.gupta1@rutgers.edu"
                      className="text-zinc-300 hover:text-purple-400 transition"
                    >
                      arushi.gupta1@rutgers.edu
                    </a>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-zinc-300">+1 (732) 123-4567</span>
                  </div>
                  
                  {/* LinkedIn */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <a 
                      href="https://linkedin.com/in/arushi-gupta11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-purple-400 transition"
                    >
                      linkedin.com/in/arushi-gupta11
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="border border-white/20 p-8 rounded-lg bg-black/40 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-6">Send me a message</h2>
              <form
                action="https://formspree.io/f/xwpwpwwn" 
                method="POST"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder:text-zinc-400 focus:outline-none focus:border-purple-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder:text-zinc-400 focus:outline-none focus:border-purple-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 border border-white/20 rounded-lg h-32 bg-white/5 text-white placeholder:text-zinc-400 focus:outline-none focus:border-purple-400"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </PortfolioLayout>
    );
  }
