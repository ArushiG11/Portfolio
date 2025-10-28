"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PortfolioLayout from "@/components/PortfolioLayout";

export default function Home() {
  const router = useRouter();

  return (
    <PortfolioLayout>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6">
       
      <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl"
        >
          Hi, I'm Arushi
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl font-bold mb-4 drop-shadow-xl"
        >
          Still figuring things out, but having fun doing it.
        </motion.h3>

       {/* Centered Avatar Sticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="w-48 h-48 md:w-64 md:h-64 mb-8"
        >
          <Image
            src="/avatar_sticker.svg"
            alt="Arushi"
            width={256}
            height={256}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>

        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl max-w-xl text-zinc-300 mb-6"
        >
          My Portfolio is powered by AI, so am I.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => router.push("/why-hire-me")}
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            Why Hire Me?
          </button>
          <button
            onClick={() => router.push("/chat")}
            className="border border-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition"
          >
            Chat with Me
          </button>
        </motion.div>
      </section>
    </PortfolioLayout>
  );
}
