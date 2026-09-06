"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, fadeRight, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { CHEF } from "@/lib/constants";

export default function ChefPage() {
  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      {/* Hero */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-20">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem}>
            <Tag className="mb-6 block">Culinary Leadership</Tag>
          </motion.div>
          <motion.h1
            variants={staggerItem}
            className="font-display text-cream leading-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Meet <span className="text-gradient-gold italic">Chef {CHEF.name}</span>
          </motion.h1>
          <motion.div variants={staggerItem} className="mt-10">
            <Divider ornamental />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-[var(--section-gap)]">
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image src="/images/team/chef.jpg" alt={`Chef ${CHEF.name}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
            </div>
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={staggerItem}>
              <Tag className="mb-6 block">The Journey</Tag>
            </motion.div>
            <motion.h2 variants={staggerItem} className="font-display text-cream text-3xl md:text-4xl leading-tight">
              A Study in Discipline
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-8 text-sand/80 text-lg leading-relaxed">
              {CHEF.bio}
            </motion.p>
            <motion.p variants={staggerItem} className="mt-6 text-sand/80 text-lg leading-relaxed">
              After a decade of accumulating Michelin stars in Paris, Tokyo, and Copenhagen, Chef Voss realized 
              that true mastery isn&apos;t found in adding more components to a plate, but in having the courage to strip them away. 
              Aurum & Ember is the manifestation of this philosophy.
            </motion.p>
            <motion.blockquote variants={staggerItem} className="mt-10 pl-6 border-l-2 border-gold/30">
              <p className="font-display italic text-cream/80 text-xl leading-relaxed">
                &ldquo;{CHEF.philosophy}&rdquo;
              </p>
            </motion.blockquote>
            <motion.div variants={staggerItem} className="mt-10 flex gap-4">
               <Link href="/menu"><Button variant="primary">View the Menu</Button></Link>
               <Link href="/reservations"><Button variant="ghost">Book a Table</Button></Link>
            </motion.div>
          </motion.div>
        </div>

        {/* The Team */}
        <div className="text-center mb-16 mt-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Divider ornamental className="mb-12 mx-auto" />
            <h2 className="font-display text-cream text-3xl mb-6">The Culinary Team</h2>
            <p className="text-sand/80 max-w-2xl mx-auto leading-relaxed mb-16">
              A restaurant of this caliber requires an ecosystem of dedicated professionals. From our Sous Chefs to our 
              Sommelier and Maître D&apos;, every member of our team is instrumental in delivering the Aurum & Ember experience.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { src: "/images/team/sous-chef.jpg", name: "Elena Rossi", role: "Chef de Cuisine" },
              { src: "/images/team/sommelier.jpg", name: "Julian Vance", role: "Head Sommelier" },
              { src: "/images/team/pastry-chef.jpg", name: "Amelia Chen", role: "Executive Pastry Chef" },
              { src: "/images/team/maitre-d.jpg", name: "Marcus Thorne", role: "Maître D'" }
            ].map((member, i) => (
              <motion.div 
                key={member.name}
                variants={fadeUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                  <Image src={member.src} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <h3 className="font-display text-cream text-xl mb-1">{member.name}</h3>
                <p className="text-gold/70 text-sm font-accent uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
