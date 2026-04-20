"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const projects = [
  {
    title: "KVSync — Distributed Key-Value Store",
    tech: ["Python", "TCP Sockets", "Threading", "Consistent Hashing"],
    description: "A fault-tolerant distributed key-value store engineered for high availability and concurrent access.",
    architecture: "Implemented consistent hashing for data sharding across dynamic nodes. Designed a custom TCP protocol for node communication. Ensured durability via Write-Ahead Logging (WAL) and crash recovery mechanisms. Handled concurrent reads/writes using thread-safe locking and async cross-node replication.",
    github: "https://github.com/IsaHaameem/kvsync-distributed-kv-store",
  },
  {
    title: "Distributed API Gateway & Traffic Manager",
    tech: ["NestJS", "Redis", "PostgreSQL", "Docker"],
    description: "A centralized traffic management platform routing requests to microservices securely.",
    architecture: "Engineered a token-bucket rate limiting algorithm using Redis to prevent service overload. Integrated JWT and API key authentication middleware. Built comprehensive logging and observability dashboards for monitoring request latency. Load tested for high-concurrency environments.",
    github: "#",
  },
  {
    title: "Distributed Job Queue System",
    tech: ["NestJS", "Redis", "BullMQ"],
    description: "An asynchronous background job processing engine.",
    architecture: "Designed a distributed worker architecture offloading heavy processes from the main event loop. Implemented robust retry logic, delayed executions, and priority queues. Exposed REST APIs for queue monitoring and real-time performance tracking.",
    github: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Core Systems.</h3>
          <p className="text-muted text-lg">Production-grade infrastructure and distributed architectures.</p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-surface border border-border hover:border-accent/50 rounded-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href={project.github} className="p-2 bg-background border border-border rounded-lg text-muted hover:text-white transition-colors">
                    <FiGithub size={20} />
                  </Link>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-neutral-300 text-base font-medium">{project.description}</p>
                <div className="p-4 bg-background border border-border rounded-xl">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Architecture & Implementation</span>
                  <p className="text-sm text-muted leading-relaxed">{project.architecture}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}