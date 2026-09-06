"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { menuOverlay, menuPanel, menuItem, menuStagger } from "@/lib/animations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5 md:py-6"
        )}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative z-10 flex items-center gap-3 group" 
            aria-label="Aurum & Ember - Home"
            onClick={() => {
              if (typeof window !== "undefined" && window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            {/* Logo Mark SVG */}
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" className="text-gold transition-colors duration-300 group-hover:text-gold-light">
              <path d="M16 0C16 0 4 14 4 24C4 30.627 9.373 36 16 36C22.627 36 28 30.627 28 24C28 14 16 0 16 0Z" fill="currentColor" fillOpacity="0.2"/>
              <path d="M16 8C16 8 10 18 10 24C10 27.314 12.686 30 16 30C19.314 30 22 27.314 22 24C22 18 16 8 16 8Z" fill="currentColor"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl text-cream tracking-wide leading-none">
                Aurum
              </span>
              <span className="font-display text-[0.65rem] text-gold/70 tracking-[0.3em] uppercase leading-none mt-0.5">
                & Ember
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {NAV_LINKS.filter(link => ["/", "/menu", "/experience", "/private-dining", "/contact"].includes(link.href)).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-body text-sm tracking-wide transition-colors duration-300",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300",
                  pathname === link.href
                    ? "text-gold after:w-full"
                    : "text-cream/80 hover:text-cream after:w-0 hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/reservations">
              <Button variant="secondary" size="sm">
                Reserve Your Evening
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-10 p-2 text-cream hover:text-gold transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              variants={menuOverlay}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              variants={menuPanel}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-obsidian z-40 lg:hidden border-l border-white/[0.04]"
            >
              <div className="flex flex-col h-full px-12 pt-32 pb-12 overflow-y-auto">
                <motion.nav
                  variants={menuStagger}
                  initial="closed"
                  animate="open"
                  className="flex flex-col gap-8"
                  aria-label="Mobile navigation"
                >
                  {NAV_LINKS.map((link) => (
                    <motion.div key={link.href} variants={menuItem}>
                      <Link
                        href={link.href}
                        className={cn(
                          "font-display text-4xl tracking-wide transition-colors duration-300",
                          pathname === link.href ? "text-gold" : "text-cream hover:text-gold"
                        )}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={menuItem} className="pt-6 mt-auto pb-4">
                    <Link href="/reservations" onClick={() => setMenuOpen(false)}>
                      <Button variant="primary" size="lg" className="w-full">
                        Reserve Your Evening
                      </Button>
                    </Link>
                  </motion.div>
                </motion.nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
