"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent font-medium tracking-wide mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Muhammad Isa Haameem
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Engineering Scalable Backend Systems & Distributed Infrastructure.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
            Specializing in high-performance data systems, concurrency, and architecture design. Based in Chennai, building the infrastructure that powers modern applications.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="#projects" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors">
              View Systems <ArrowRight size={18} />
            </Link>
            <Link href="https://github.com/yourusername" target="_blank" className="p-3 bg-surface border border-border rounded-xl text-muted hover:text-white transition-colors">
              <FiGithub size={24} />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" className="p-3 bg-surface border border-border rounded-xl text-muted hover:text-white transition-colors">
              <FiLinkedin size={24} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}