"use client";
import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

export default function Achievements() {
  return (
    <section className="py-24 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Trophy className="text-accent"/> Hackathons & Awards</h3>
          <ul className="space-y-4 text-neutral-300">
            <li className="p-4 bg-surface border border-border rounded-xl">
              <strong>Top 5 Finalist</strong> — PrayACThon Hackathon
            </li>
            <li className="p-4 bg-surface border border-border rounded-xl">
              <strong>Participant</strong> — IndiaAI Hackathon (IISc + IBM)
            </li>
            <li className="p-4 bg-surface border border-border rounded-xl">
              <strong>Participant</strong> — Smart India Hackathon Internal Round
            </li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Award className="text-accent"/> Certifications</h3>
          <div className="p-4 bg-surface border border-border rounded-xl text-neutral-300">
            <strong className="block text-white mb-1">Multithreading & Concurrency</strong>
            <span className="text-sm text-muted">Issued by pod.ai</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}