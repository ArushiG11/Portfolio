"use client";

import { useEffect, useMemo } from "react";
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
    <main className="relative min-h-screen w-full overflow-hidden text-white bg-black">
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

      {/* Navigation Tabs */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-6 text-sm font-medium bg-black/50 backdrop-blur-md px-4 py-2 rounded-full pointer-events-auto">
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

      {/* Floating Chat Widget */}
      {/* <FloatingChat /> */}
    </main>
  );
}

