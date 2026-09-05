"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider } from "@/components/ui";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      {/* Hero */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-20">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem}>
            <Tag className="mb-6 block">About Us</Tag>
          </motion.div>
          <motion.h1
            variants={staggerItem}
            className="font-display text-cream leading-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Rooted in <span className="text-gradient-gold italic">Tradition,</span><br/>
            Forged in Fire
          </motion.h1>
          <motion.div variants={staggerItem} className="mt-10">
            <Divider ornamental />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Core Values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-[var(--section-gap)]"
        >
          <motion.div variants={staggerItem} className="text-center">
            <h3 className="font-display text-2xl text-cream mb-4">Sourcing</h3>
            <p className="text-sand/80 leading-relaxed">
              We work exclusively with small-scale farms, independent foragers, and sustainable fisheries.
              Our menu is entirely dictated by what is extraordinary on any given day.
            </p>
          </motion.div>
          <motion.div variants={staggerItem} className="text-center">
            <h3 className="font-display text-2xl text-cream mb-4">Technique</h3>
            <p className="text-sand/80 leading-relaxed">
              We reject modern shortcuts. Everything is made in-house, from our cultured butter to our
              three-year aged garums. We believe flavor takes time.
            </p>
          </motion.div>
          <motion.div variants={staggerItem} className="text-center">
            <h3 className="font-display text-2xl text-cream mb-4">Hospitality</h3>
            <p className="text-sand/80 leading-relaxed">
              Service should be invisible but omnipresent. We strive for an atmosphere that is deeply
              luxurious yet entirely unpretentious.
            </p>
          </motion.div>
        </motion.div>

        {/* The Space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-[var(--section-gap)]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/images/hero/hero.jpg" alt="Dining Room" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={staggerItem}>
              <Tag className="mb-6 block">The Space</Tag>
            </motion.div>
            <motion.h2 variants={staggerItem} className="font-display text-cream text-3xl md:text-4xl leading-tight">
              An Environment of Intent
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-8 text-sand/80 text-lg leading-relaxed">
              Designed by award-winning architectural firm Studio Atelier, our space is an exercise in
              sensory reduction. By utilizing dark, natural materials like charred oak, bronze, and raw
              stone, we minimize visual noise.
            </motion.p>
            <motion.p variants={staggerItem} className="mt-6 text-sand/80 text-lg leading-relaxed">
              This darkness is intentional. It draws focus to the table, to the food, and to the people
              you are sharing your evening with. The lighting is precision-focused, illuminating only what matters.
            </motion.p>
            <motion.div variants={staggerItem} className="mt-10 flex gap-4">
               <Link href="/gallery"><Button variant="ghost">View Gallery</Button></Link>
               <Link href="/story"><Button variant="secondary">Read Our Story</Button></Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
