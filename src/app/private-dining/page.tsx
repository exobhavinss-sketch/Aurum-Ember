"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider, Input, TextArea, Select } from "@/components/ui";
import { Button } from "@/components/ui/Button";

export default function PrivateDiningPage() {
  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      {/* Hero */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-20">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem}>
            <Tag className="mb-6 block">Exclusive Events</Tag>
          </motion.div>
          <motion.h1
            variants={staggerItem}
            className="font-display text-cream leading-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Private <span className="text-gradient-gold italic">Dining</span>
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 text-lg text-sand/80 max-w-xl mx-auto">
            An intimately secluded environment for bespoke celebrations and corporate gatherings, featuring tailored menus and dedicated service.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-10">
            <Divider ornamental />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-[var(--section-gap)]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/interior/private-dining.jpg" alt="Private Wine Cellar Dining Room" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={staggerItem}>
              <Tag className="mb-6 block">The Wine Cellar</Tag>
            </motion.div>
            <motion.h2 variants={staggerItem} className="font-display text-cream text-3xl md:text-4xl leading-tight">
              A Subterranean Sanctuary
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-8 text-sand/80 text-lg leading-relaxed">
              Located beneath the main dining room, surrounded by our 600-label wine collection, the Private Cellar offers total seclusion. The space is anchored by a solid walnut communal table and features independent climate and lighting controls.
            </motion.p>
            <ul className="mt-8 space-y-4">
              <motion.li variants={staggerItem} className="flex items-center gap-4 text-sand border-b border-white/[0.04] pb-4">
                <span className="text-gold font-accent tracking-widest text-xs uppercase w-24">Capacity</span>
                <span>Up to 14 guests seated</span>
              </motion.li>
              <motion.li variants={staggerItem} className="flex items-center gap-4 text-sand border-b border-white/[0.04] pb-4">
                <span className="text-gold font-accent tracking-widest text-xs uppercase w-24">Menu</span>
                <span>Customized Tasting Menu</span>
              </motion.li>
              <motion.li variants={staggerItem} className="flex items-center gap-4 text-sand border-b border-white/[0.04] pb-4">
                <span className="text-gold font-accent tracking-widest text-xs uppercase w-24">Pairing</span>
                <span>Dedicated Sommelier Service</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Inquiry Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12 mt-12"
        >
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl text-cream">Inquire About an Event</h2>
            <p className="text-sand/70 mt-2">Our events team will respond within 24 hours.</p>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Input label="First Name" type="text" id="pd-first-name" required />
              <Input label="Last Name" type="text" id="pd-last-name" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Input label="Email Address" type="email" id="pd-email" required />
              <Input label="Phone Number" type="tel" id="pd-phone" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="pd-date" className="block text-xs text-sand mb-2 font-accent tracking-wide">Proposed Date</label>
                <input type="date" id="pd-date" className="w-full bg-graphite border-2 border-white/10 rounded-lg py-3 px-4 text-cream focus:outline-none focus:border-gold/40 transition-colors" required />
              </div>
              <Input label="Estimated Guest Count" type="number" id="pd-guests" required />
            </div>
            <div className="mb-10">
              <TextArea label="Event Details & Special Requests" id="pd-details" rows={4} />
            </div>
            <div className="text-center">
              <Button variant="primary" size="lg" type="submit">Submit Inquiry</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
