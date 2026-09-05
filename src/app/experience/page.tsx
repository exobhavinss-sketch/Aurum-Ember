"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { FeatureCard } from "@/components/ui/Card";
import { Tag, Divider } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { EXPERIENCES } from "@/lib/constants";

export default function ExperiencePage() {
  const expImages = [
    "/images/hero/hero.jpg",
    "/images/interior/private-dining.jpg",
    "/images/dishes/ingredients.jpg",
    "/images/interior/bar.jpg",
  ];

  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      {/* Header */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-20">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem}><Tag className="mb-6 block">The Experience</Tag></motion.div>
          <motion.h1 variants={staggerItem} className="font-display text-cream leading-tight" style={{ fontSize: "var(--text-h1)" }}>
            Four Ways to <span className="text-gradient-gold italic">Experience</span> Aurum & Ember
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 text-lg text-sand/80 max-w-xl mx-auto">
            Each space within our restaurant offers a distinct atmosphere and level of intimacy, while sharing the same uncompromising kitchen.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-10"><Divider ornamental /></motion.div>
        </motion.div>
      </div>

      {/* Experiences Grid */}
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-[var(--section-gap-sm)]"
          >
            <div className={i % 2 === 1 ? "order-2 lg:order-1" : ""}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image src={expImages[i]} alt={exp.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
            <div className={i % 2 === 1 ? "order-1 lg:order-2" : ""}>
              <Tag className="mb-4 block">{exp.capacity}</Tag>
              <h2 className="font-display text-cream text-3xl md:text-4xl">{exp.title}</h2>
              <p className="mt-6 text-sand/80 text-lg leading-relaxed">{exp.description}</p>
              <div className="mt-8">
                <Link href="/reservations"><Button variant="secondary">Reserve This Space</Button></Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Wine Program */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mt-[var(--section-gap-sm)]">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={staggerItem}><Divider ornamental className="mb-12" /></motion.div>
          <motion.div variants={staggerItem}><Tag className="mb-6 block">The Wine Program</Tag></motion.div>
          <motion.h2 variants={staggerItem} className="font-display text-cream text-3xl md:text-4xl">A Cellar of Conviction</motion.h2>
          <motion.p variants={staggerItem} className="mt-6 text-sand/80 text-lg leading-relaxed max-w-xl mx-auto">
            Our sommelier curates a collection of over 600 labels, with a particular focus on producers
            who share our devotion to terroir and craft. From rare Burgundy to natural wines from emerging
            regions, every bottle tells a story of its land.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
