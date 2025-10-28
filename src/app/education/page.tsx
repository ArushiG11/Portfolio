"use client";

import { motion } from "framer-motion";
import PortfolioLayout from '@/components/PortfolioLayout';
import { education } from '@/data/education';

export default function EducationPage() {
  return (
    <PortfolioLayout>
      <div className="relative z-10 min-h-screen px-6 py-12 pt-24 pb-32 max-w-6xl mx-auto">
        {/* Vertical Timeline */}
        <div className="relative">
          {/* Centered Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-purple-300 to-purple-400 -translate-x-1/2" />
          
          <div className="space-y-12">
            {education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`w-full max-w-[45%] ${
                    isEven ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}>
                    <div className="border border-white/20 p-6 rounded-lg bg-transparent hover:bg-white/5 transition hover:border-purple-400/50 backdrop-blur-none">
                      <div className={`flex flex-col mb-3 ${isEven ? 'items-end' : 'items-start'}`}>
                        <div className="text-left">
                          <h2 className="text-xl font-semibold text-white">{edu.institution}</h2>
                          <p className="text-purple-400 font-medium">{edu.degree}</p>
                        </div>
                        <span className="text-sm text-zinc-400 font-mono">{edu.year}</span>
                      </div>
                      {edu.description && (
                        <p className="text-zinc-300">{edu.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot and logo */}
                  <div className="relative z-10 flex-shrink-0 w-20 flex items-center justify-center">
                    {/* Timeline dot */}
                    <div className="absolute w-4 h-4 bg-purple-400 rounded-full ring-4 ring-black ring-offset-2 ring-offset-black">
                      <div className="absolute inset-0 bg-purple-400 rounded-full animate-pulse" />
                    </div>

                    {/* Institution Logo placeholder */}
                    <div className="absolute w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full border border-white/10 backdrop-blur-sm flex items-center justify-center text-lg font-bold text-white shadow-lg overflow-hidden">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="object-contain w-14 h-14"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className={`w-full max-w-[45%] ${isEven ? 'pl-8' : 'pr-8'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}
