"use client";
import { motion } from "framer-motion";
import { Mail, GitHub, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border/50 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-4xl font-extrabold text-white mb-4">Let&apos;s Build Systems.</h3>
          <p className="text-muted text-lg mb-10">Currently open for backend engineering roles. Whether it&apos;s distributed infrastructure, database optimization, or API architecture—let&apos;s connect.</p>
          
          <div className="flex justify-center gap-6">
            <a href="mailto:your.email@example.com" className="p-4 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" className="p-4 bg-surface border border-border text-white rounded-full hover:bg-neutral-800 transition-colors">
              <GitHub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="p-4 bg-surface border border-border text-white rounded-full hover:bg-neutral-800 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}