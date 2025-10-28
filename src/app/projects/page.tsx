'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import PortfolioLayout from '@/components/PortfolioLayout';
import Link from 'next/link';

export default function ProjectsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <PortfolioLayout>
      <div className="relative z-10 min-h-screen p-6 pt-24 pb-32">
        <h1 className="text-3xl font-bold mb-6 text-white">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-white/20 p-4 rounded-lg shadow-lg bg-transparent transition hover:scale-[1.02] hover:bg-white/5"
              style={{ backdropFilter: 'none' }}
            >
              <h2 className="text-lg font-semibold mb-1 text-white">{project.title}</h2>
              <p className="text-sm text-zinc-300 mb-2">{project.summary}</p>
              <div className="text-xs text-zinc-400 mb-3">{project.stack.join(' • ')}</div>
              
              {/* GitHub and Demo Links */}
              <div className="flex gap-3 mb-3">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition border border-white/10"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C17.146 18.181 20 14.425 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-white bg-purple-500/20 hover:bg-purple-500/30 px-3 py-1.5 rounded-full transition border border-purple-400/30"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </Link>
                )}
              </div>

              <button
                onClick={() => setExpanded(idx === expanded ? null : idx)}
                className="text-purple-400 hover:text-purple-300 text-sm"
              >
                {idx === expanded ? 'Hide details ▲' : 'Show details ▼'}
              </button>
              {idx === expanded && (
                <p className="mt-2 text-sm text-zinc-300 whitespace-pre-line">{project.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </PortfolioLayout>
  );
}
