"use client";
import { motion } from "framer-motion";

const skillsData = [
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { category: "Backend", items: ["Node.js", "NestJS", "FastAPI"] },
  { category: "Infrastructure", items: ["Docker", "Git", "BullMQ", "TCP/IP Sockets"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { category: "Core Concepts", items: ["Distributed Systems", "Consistent Hashing", "Concurrency", "Multithreading", "System Design"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12">Technical Arsenal.</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-surface border border-border rounded-lg text-sm font-medium text-neutral-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}