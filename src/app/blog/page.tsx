"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider } from "@/components/ui";

const posts = [
  {
    title: "The Alchemy of Fire and Time",
    category: "Philosophy",
    date: "October 12, 2026",
    excerpt: "Why we abandoned induction and returned to the unpredictability of the open hearth. A look into our kitchen's heart.",
    image: "/images/hero/hero.jpg",
    slug: "alchemy-of-fire-and-time"
  },
  {
    title: "Foraging in the Hudson Valley",
    category: "Sourcing",
    date: "September 28, 2026",
    excerpt: "A morning spent with our primary forager, hunting for the elusive autumn chanterelles that define our current menu.",
    image: "/images/dishes/ingredients.jpg",
    slug: "foraging-hudson-valley"
  },
  {
    title: "The Art of the Pairing",
    category: "Wine",
    date: "September 15, 2026",
    excerpt: "Our Head Sommelier discusses the philosophy behind matching a 2012 Premier Cru with dry-aged duck.",
    image: "/images/interior/bar.jpg",
    slug: "art-of-the-pairing"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-20">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem}>
            <Tag className="mb-6 block">Journal</Tag>
          </motion.div>
          <motion.h1
            variants={staggerItem}
            className="font-display text-cream leading-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Stories from <span className="text-gradient-gold italic">Aurum & Ember</span>
          </motion.h1>
          <motion.div variants={staggerItem} className="mt-10">
            <Divider ornamental />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <Tag>{post.category}</Tag>
                  <span className="text-xs font-accent text-taupe">{post.date}</span>
                </div>
                <h2 className="font-display text-2xl text-cream mb-3 group-hover:text-gold transition-colors">{post.title}</h2>
                <p className="text-sand/70 line-clamp-2">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
