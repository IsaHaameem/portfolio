"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">System Design Mindset.</h3>
          <div className="space-y-4 text-muted text-lg leading-relaxed">
            <p>
              I am a Backend-focused Computer Science Engineering undergraduate specializing in distributed systems and high-performance backend infrastructure. My core focus is on building resilient systems that handle scale gracefully.
            </p>
            <p>
              I thrive on solving complex engineering problems—whether it&apos;s managing state across distributed nodes, optimizing database queries for lower latency, or writing thread-safe concurrent operations. I approach software engineering with a rigorous focus on architecture, reliability, and observability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}