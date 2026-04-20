"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/30 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-12">Experience.</h3>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l-2 border-border"
        >
          <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1"></div>
          <div className="mb-1 text-sm font-medium text-accent">Oct 2024 – Nov 2024</div>
          <h4 className="text-xl font-bold text-white">Full Stack Development Intern</h4>
          <div className="text-muted font-medium mb-4">NoviTech R&D Pvt. Ltd</div>
          <ul className="list-disc pl-5 space-y-2 text-neutral-300">
            <li>Architected and developed secure REST APIs and robust authentication systems.</li>
            <li>Engineered seamless frontend-backend data integration pipelines.</li>
            <li>Optimized database schemas and executed complex querying operations.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}