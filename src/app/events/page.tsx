"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider } from "@/components/ui";
import { Button } from "@/components/ui/Button";

const events = [
  {
    title: "Truffle & Barolo Dinner",
    date: "November 12, 2026",
    price: "$395 per guest",
    desc: "An exclusive six-course tasting menu highlighting the Alba white truffle season, paired perfectly with library vintages of Barolo from our cellar.",
    image: "/images/dishes/signature.jpg"
  },
  {
    title: "Guest Chef Series: Masa Takayama",
    date: "December 5, 2026",
    price: "$550 per guest",
    desc: "Chef Sebastian Voss welcomes Chef Masa Takayama for a collaborative evening merging Japanese precision with our fire-driven philosophy.",
    image: "/images/team/chef.jpg"
  },
  {
    title: "New Year's Eve Gala",
    date: "December 31, 2026",
    price: "$450 per guest",
    desc: "Ring in the new year with an opulent twelve-course grand tasting, live jazz, and a midnight champagne toast featuring Krug Grande Cuvée.",
    image: "/images/hero/hero.jpg"
  }
];

export default function EventsPage() {
  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-20">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem}>
            <Tag className="mb-6 block">Happenings</Tag>
          </motion.div>
          <motion.h1
            variants={staggerItem}
            className="font-display text-cream leading-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Special <span className="text-gradient-gold italic">Events</span>
          </motion.h1>
          <motion.div variants={staggerItem} className="mt-10">
            <Divider ornamental />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] space-y-24">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <Image src={event.image} alt={event.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <Tag className="mb-4 block">{event.date}</Tag>
              <h2 className="font-display text-cream text-3xl mb-4">{event.title}</h2>
              <p className="text-gold font-accent text-sm uppercase tracking-widest mb-6">{event.price}</p>
              <p className="text-sand/80 text-lg leading-relaxed mb-8">{event.desc}</p>
              <Button variant="secondary">Book Tickets</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
