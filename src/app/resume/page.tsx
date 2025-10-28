import PortfolioLayout from '@/components/PortfolioLayout';

export default function ResumePage() {
    return (
      <PortfolioLayout>
        <div className="relative z-10 min-h-screen p-4 pt-20 flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-white">My Resume</h1>

          <iframe
            src="/ArushiG_Resume.pdf"
            className="w-full max-w-5xl h-[75vh] border border-white/20 rounded-lg shadow-xl bg-black/40"
          ></iframe>

          <a
            href="/ArushiG_Resume.pdf"
            download
            className="mt-6 inline-block px-7 py-3 bg-black text-white border-2 border-white rounded-full font-semibold text-base shadow-lg transition hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.5)] hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95"
          >
            Download PDF
          </a>
        </div>
      </PortfolioLayout>
    );
  }
  