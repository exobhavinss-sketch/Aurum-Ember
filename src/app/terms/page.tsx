"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider } from "@/components/ui";

export default function TermsPage() {
  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mb-16">
          <motion.div variants={staggerItem}><Tag className="mb-6 block">Legal</Tag></motion.div>
          <motion.h1 variants={staggerItem} className="font-display text-cream text-4xl md:text-5xl mb-6">Terms of Service</motion.h1>
          <motion.p variants={staggerItem} className="text-sand/70">Last Updated: October 1, 2024</motion.p>
          <motion.div variants={staggerItem} className="mt-10"><Divider /></motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="prose prose-invert prose-sand max-w-none font-light leading-relaxed">
          <h2 className="font-display text-2xl text-cream mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-sand/80 mb-6">
            By accessing or using the Aurum & Ember website or booking a reservation, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>
          
          <h2 className="font-display text-2xl text-cream mt-10 mb-4">2. Reservations and Cancellations</h2>
          <p className="text-sand/80 mb-6">
            Reservations require a valid credit card to secure. Due to the limited capacity of our dining room, cancellations made within 48 hours of the reservation time will incur a cancellation fee of $150 per guest.
          </p>

          <h2 className="font-display text-2xl text-cream mt-10 mb-4">3. Dining Experience</h2>
          <p className="text-sand/80 mb-6">
            While we strive to accommodate dietary restrictions communicated in advance, we cannot guarantee a completely allergen-free environment. Menu items and pricing are subject to change without notice based on seasonal availability.
          </p>

          <h2 className="font-display text-2xl text-cream mt-10 mb-4">4. Copyright and Trademarks</h2>
          <p className="text-sand/80 mb-6">
            All content included on this site, such as text, graphics, logos, images, and software, is the property of Aurum & Ember or its content suppliers and protected by international copyright laws.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
