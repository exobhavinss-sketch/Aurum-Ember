"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, fadeRight, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider } from "@/components/ui";
import { CHEF } from "@/lib/constants";

export default function StoryPage() {
  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      {/* Hero */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-20">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem}>
            <Tag className="mb-6 block">Our Story</Tag>
          </motion.div>
          <motion.h1
            variants={staggerItem}
            className="font-display text-cream leading-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            In the Quiet Space Between
            <br />
            <span className="text-gradient-gold italic">Flame and Gold</span>
          </motion.h1>
          <motion.div variants={staggerItem} className="mt-10">
            <Divider ornamental />
          </motion.div>
        </motion.div>
      </div>

      {/* Story content */}
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Section 1 — The Beginning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-[var(--section-gap)]">
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/images/dishes/ingredients.jpg" alt="Fresh seasonal ingredients" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={staggerItem}>
              <Tag className="mb-6 block">The Beginning</Tag>
            </motion.div>
            <motion.h2 variants={staggerItem} className="font-display text-cream text-3xl md:text-4xl leading-tight">
              Born from a Philosophy of Restraint
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-8 text-sand/80 text-lg leading-relaxed">
              Aurum & Ember was not conceived as a restaurant. It began as a question: what happens when
              you strip fine dining of its pretense and return to the elemental act of cooking over fire?
            </motion.p>
            <motion.p variants={staggerItem} className="mt-6 text-sand/80 text-lg leading-relaxed">
              Chef {CHEF.name} spent years in the world&apos;s most celebrated kitchens — learning technique,
              discipline, and the language of ingredients. But it was during a solitary year of travel
              through the countryside of Japan, France, and Scandinavia that the true vision emerged.
            </motion.p>
            <motion.p variants={staggerItem} className="mt-6 text-sand/80 text-lg leading-relaxed">
              In the simplicity of a wood-fired hearth, in the patience of a farmer waiting for the right
              moment to harvest, he found what luxury truly means: devotion to something beyond yourself.
            </motion.p>
          </motion.div>
        </div>

        {/* Section 2 — The Kitchen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-[var(--section-gap)]">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
            <motion.div variants={staggerItem}>
              <Tag className="mb-6 block">The Kitchen</Tag>
            </motion.div>
            <motion.h2 variants={staggerItem} className="font-display text-cream text-3xl md:text-4xl leading-tight">
              A Crucible of Transformation
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-8 text-sand/80 text-lg leading-relaxed">
              Our kitchen is built around a central hearth — a custom wood-fired oven and open flame grill
              that serves as the heart of every service. Every protein, many vegetables, and even some
              desserts pass through the fire at some point in their preparation.
            </motion.p>
            <motion.p variants={staggerItem} className="mt-6 text-sand/80 text-lg leading-relaxed">
              But fire is only one element. Time is the other. Our fermentation program runs year-round,
              with aged misos, vinegars, and garum that develop over months and years, adding depth and
              complexity that no technique can replicate in a single evening.
            </motion.p>
            <motion.blockquote variants={staggerItem} className="mt-8 pl-6 border-l-2 border-gold/30">
              <p className="font-display italic text-cream/80 text-xl leading-relaxed">
                &ldquo;We cook with conviction, not complication.&rdquo;
              </p>
              <cite className="text-sm text-taupe mt-2 block not-italic">— Chef {CHEF.name}</cite>
            </motion.blockquote>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/images/team/chef.jpg" alt={`Chef ${CHEF.name}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>
        </div>

        {/* Section 3 — The Space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/images/interior/private-dining.jpg" alt="Private dining room" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={staggerItem}>
              <Tag className="mb-6 block">The Space</Tag>
            </motion.div>
            <motion.h2 variants={staggerItem} className="font-display text-cream text-3xl md:text-4xl leading-tight">
              Designed to Slow Time
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-8 text-sand/80 text-lg leading-relaxed">
              Every element of the dining room — from the handmade ceramic plates to the weight of
              the linen napkins — has been considered as carefully as the food. We worked with
              artisans and craftspeople to create a space that feels both timeless and alive.
            </motion.p>
            <motion.p variants={staggerItem} className="mt-6 text-sand/80 text-lg leading-relaxed">
              Dark walnut, brushed brass, and natural stone create a warm, grounding atmosphere.
              The lighting is low and warm, designed to make time feel slower and conversation
              feel easier. There is no background music — just the quiet hum of a room devoted
              entirely to the experience of being present.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
