"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Reservation", href: "/reservation" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-4" : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-display text-2xl text-gold-gradient">
            Saffron
          </span>
          <span className="font-display text-xs tracking-[0.4em] text-cream/60 uppercase group-hover:text-cream/90 transition-colors">
            Palace
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Reserve CTA */}
        <Link href="/reservation" className="hidden md:block btn-gold">
          Reserve
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cream/80 hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-gold/10 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservation"
            onClick={() => setMenuOpen(false)}
            className="btn-gold text-center mt-2"
          >
            Reserve
          </Link>
        </div>
      )}
    </header>
  );
}
