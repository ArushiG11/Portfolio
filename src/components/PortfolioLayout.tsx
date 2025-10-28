"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
// import FloatingChat from "./FloatingChat"; 

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // init particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  // options memoized to avoid re-renders
  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      background: { color: "#000000" },
      detectRetina: true,
      particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: { min: 0.2, max: 0.6 } },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 1, outModes: { default: "out" } },
        links: { enable: true, distance: 150, color: "#888888", opacity: 0.3, width: 1 },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
          push: { quantity: 4 },
        },
      },
    }),
    []
  );

  const navItems = [
    ["Home", "/"],
    ["Projects", "/projects"],
    ["Experience", "/experience"],
    ["Resume", "/resume"],
    ["Education", "/education"],
    ["Contact", "/contact"],
  ];

  return (
    <main className="relative min-h-screen w-full text-white bg-black">
      {/* Particle Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Particles id="tsparticles" options={options} />
      </div>

      {/* Name in top left with glow effect */}
      <Link href="/" className="fixed top-4 left-4 z-20">
        <h1 className="text-2xl font-bold text-white tracking-tight cursor-pointer hover:scale-105 transition-transform">
          <span className="text-shadow-glow">Arushi</span>
        </h1>
      </Link>

      <style jsx>{`
        .text-shadow-glow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
                       0 0 20px rgba(255, 255, 255, 0.3),
                       0 0 30px rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Hamburger Menu Button - Mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 md:hidden w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full border border-white/20 hover:bg-black/70 transition"
      >
        {isMenuOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Menu */}
          <div className="absolute top-0 right-0 h-full w-64 bg-black/95 border-l border-white/20 backdrop-blur-md shadow-2xl p-6 pt-20">
            <nav className="flex flex-col gap-4">
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg text-white hover:text-purple-400 transition py-2 border-b border-white/10 ${
                    pathname === href ? "text-purple-400 font-semibold" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Navigation Tabs */}
      <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 gap-6 text-sm font-medium bg-black/50 backdrop-blur-md px-4 py-2 rounded-full pointer-events-auto">
        {navItems.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className={`hover:underline text-white transition cursor-pointer ${
              pathname === href ? "underline font-semibold" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Page Content */}
      <div className="relative z-10">{children}</div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Made with love */}
            <p className="text-sm text-zinc-400">
              Made with love ❤️ by Arushi
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ArushiG11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition"
                aria-label="GitHub"
              >
                {/* Newer (simple, clean) GitHub mark SVG */}
                <svg className="w-5 h-5" fill="currentColor" aria-hidden="true" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38v-1.33C4.02 14.8 3.48 13.54 3.48 13.54c-.36-.92-.88-1.16-.88-1.16-.72-.49.05-.48.05-.48.79.06 1.2.81 1.2.81.71 1.21 1.87.86 2.33.66.07-.52.28-.86.5-1.06C5.1 11.31 3.1 10.63 3.1 7.99c0-.73.26-1.33.69-1.8-.07-.17-.3-.86.07-1.8 0 0 .6-.19 1.98.7A6.97 6.97 0 018 5.37c.61.003 1.23.082 1.8.24 1.38-.89 1.98-.7 1.98-.7.37.93.15 1.63.07 1.8.43.47.69 1.07.69 1.8 0 2.65-2 3.32-3.9 3.5.28.24.53.73.53 1.47v2.18c0 .21.15.45.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              
              <a
                href="https://linkedin.com/in/arushi-gupta11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="mailto:arushi.gupta1@rutgers.edu"
                className="text-white hover:text-purple-400 transition"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      {/* <FloatingChat /> */}
    </main>
  );
}
