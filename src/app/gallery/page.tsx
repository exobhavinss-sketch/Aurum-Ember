"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, staggerItem, scaleIn } from "@/lib/animations";
import { Tag, Divider } from "@/components/ui";

const galleryImages = [
  { src: "/images/hero/hero.jpg", alt: "Main dining room", category: "Interior" },
  { src: "/images/dishes/appetizer.jpg", alt: "Seared scallops", category: "Cuisine" },
  { src: "/images/interior/private-dining.jpg", alt: "Private dining room", category: "Interior" },
  { src: "/images/dishes/main-course.jpg", alt: "Wagyu tenderloin", category: "Cuisine" },
  { src: "/images/team/chef.jpg", alt: "Chef Sebastian Voss", category: "Team" },
  { src: "/images/dishes/dessert.jpg", alt: "Golden sphere dessert", category: "Cuisine" },
  { src: "/images/interior/bar.jpg", alt: "Cocktail bar", category: "Interior" },
  { src: "/images/dishes/signature.jpg", alt: "Signature dish", category: "Cuisine" },
  { src: "/images/dishes/ingredients.jpg", alt: "Fresh seasonal ingredients", category: "Cuisine" },
];

const categories = ["All", "Interior", "Cuisine", "Team"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      {/* Header */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-16">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem}><Tag className="mb-6 block">Gallery</Tag></motion.div>
          <motion.h1 variants={staggerItem} className="font-display text-cream leading-tight" style={{ fontSize: "var(--text-h1)" }}>
            Moments of <span className="text-gradient-gold italic">Beauty</span>
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 text-lg text-sand/80 max-w-xl mx-auto">
            A visual journey through our kitchen, dining spaces, and the artistry that defines every evening.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-10"><Divider ornamental /></motion.div>
        </motion.div>
      </div>

      {/* Filter */}
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-accent transition-all duration-300 ${
                filter === cat
                  ? "bg-gold text-obsidian"
                  : "bg-white/[0.04] text-sand hover:text-cream hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="font-display text-lg text-cream">{img.alt}</p>
                <p className="text-xs text-gold/70 mt-1 font-accent uppercase tracking-wider">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
