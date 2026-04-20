"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          Muhammad Isa Haameem<span className="text-accent"></span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-neutral-200 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-border p-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-muted hover:text-white">
              {link.name}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-2 w-full text-center px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}