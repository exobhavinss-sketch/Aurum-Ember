"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-obsidian">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-charcoal" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-display text-gold text-8xl md:text-[120px] mb-6 opacity-80">404</h1>
        <h2 className="font-display text-cream text-3xl md:text-4xl mb-6">
          Page Not Found
        </h2>
        <p className="text-sand/70 text-lg mb-12 max-w-md mx-auto">
          The page you are looking for has been moved or no longer exists.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">Return Home</Button>
        </Link>
      </motion.div>
    </div>
  );
}
