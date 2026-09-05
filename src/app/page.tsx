"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, Clock, MapPin, ChevronDown } from "lucide-react";

function InstagramIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
import { Button } from "@/components/ui/Button";
import { DishCard, FeatureCard, TestimonialCard } from "@/components/ui/Card";
import { Tag, Divider, Input } from "@/components/ui";
import {
  fadeUp, staggerContainer, staggerItem, imageReveal, fadeRight
} from "@/lib/animations";
import { SITE, CHEF, TESTIMONIALS, EXPERIENCES } from "@/lib/constants";

// ═══════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════

const menuCategories = ["Tasting", "A La Carte", "Wine Pairing"];
const menuItems = {
  "Tasting": [
    { name: "Diver Scallops", desc: "Cauliflower purée, golden raisins, brown butter", price: "Course 1" },
    { name: "Wild Mushroom Risotto", desc: "Porcini, chanterelle, truffle butter, 36-month Parmigiano", price: "Course 2" },
    { name: "A5 Wagyu Tenderloin", desc: "Beetroot purée, chanterelle mushrooms, aged red wine jus", price: "Course 3" },
    { name: "Golden Sphere", desc: "Valrhona chocolate, 24k gold leaf, berry coulis", price: "Course 4" },
  ],
  "A La Carte": [
    { name: "Yellowtail Crudo", desc: "Yuzu kosho, pickled ginger, shiso, toasted sesame", price: "$42" },
    { name: "Pan-Roasted Halibut", desc: "Saffron velouté, braised leeks, herb oil", price: "$62" },
    { name: "Dry-Aged Duck Breast", desc: "Cherry mostarda, roasted parsnip, duck jus", price: "$58" },
  ],
  "Wine Pairing": [
    { name: "Domaine de la Romanée-Conti", desc: "Montrachet Grand Cru 2018", price: "Glass" },
    { name: "Château Margaux", desc: "Premier Grand Cru Classé 2015", price: "Glass" },
    { name: "Krug Grande Cuvée", desc: "169ème Édition Brut", price: "Glass" },
  ],
};

const faqs = [
  { q: "Do you offer vegetarian or vegan tasting menus?", a: "Yes, we offer a complete plant-based tasting menu. Please indicate this preference when making your reservation so our kitchen can prepare." },
  { q: "What is your dress code?", a: "Our dress code is elegant casual. We ask that guests refrain from wearing athletic wear, shorts, or flip-flops. Jackets are preferred but not required for gentlemen." },
  { q: "Can you accommodate dietary restrictions?", a: "We can accommodate most dietary restrictions and allergies with at least 48 hours advance notice. Please include this information in your reservation notes." },
  { q: "How far in advance can I make a reservation?", a: "Reservations open 30 days in advance at 10:00 AM EST on a rolling basis." },
];

export default function HomePage() {
  const [activeMenu, setActiveMenu] = useState("Tasting");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="absolute inset-0"
        >
          <Image
            src="/images/hero/hero.jpg"
            alt="Aurum & Ember dining room with golden ambient lighting"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/30 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-[var(--container-padding)] max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Tag className="text-gold/80 mb-8 block">Est. 2024 · New York City</Tag>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-cream leading-[0.95]"
            style={{ fontSize: "var(--text-hero)" }}
          >
            Fire. Time.{" "}
            <span className="text-gradient-gold italic">Devotion.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-sand/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            A seasonal tasting experience where the finest ingredients are transformed
            by flame and patience into moments of quiet luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/reservations">
              <Button variant="primary" size="lg">
                Reserve Your Evening
              </Button>
            </Link>
            <Link href="/menu">
              <Button variant="secondary" size="lg">
                View the Menu
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold/40"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── PHILOSOPHY / RESTAURANT STORY SECTION ── */}
      <section className="py-[var(--section-gap)] relative grain">
        <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={staggerItem}>
              <Divider ornamental className="mb-12" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <Tag className="mb-6 block">Our Philosophy</Tag>
            </motion.div>
            <motion.h2
              variants={staggerItem}
              className="font-display text-cream leading-tight"
              style={{ fontSize: "var(--text-h2)" }}
            >
              We believe luxury is not loud.
              <br />
              <span className="text-gold italic">It whispers.</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mt-8 text-sand/80 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Every dish begins with a single idea — a single ingredient at its peak.
              Our role is not to transform, but to reveal. Through fire, salt, and time,
              we honor what nature has already perfected in a space designed for connection.
            </motion.p>
            <motion.div variants={staggerItem} className="mt-12">
              <Link href="/story">
                <Button variant="ghost">Read Our Story →</Button>
              </Link>
            </motion.div>
            <motion.div variants={staggerItem} className="mt-12">
              <Divider ornamental />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── AWARDS SECTION (PLACEHOLDER) ── */}
      <section className="py-[var(--section-gap)] border-y border-white/[0.04] bg-charcoal/30">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <motion.div variants={staggerItem} className="flex flex-col items-center gap-2">
              <div className="text-xl font-display text-cream">Three Stars</div>
              <div className="text-xs tracking-widest text-gold uppercase">Michelin Guide</div>
            </motion.div>
            <motion.div variants={staggerItem} className="flex flex-col items-center gap-2">
              <div className="text-xl font-display text-cream">#14</div>
              <div className="text-xs tracking-widest text-gold uppercase">World's 50 Best</div>
            </motion.div>
            <motion.div variants={staggerItem} className="flex flex-col items-center gap-2">
              <div className="text-xl font-display text-cream">Outstanding Chef</div>
              <div className="text-xs tracking-widest text-gold uppercase">James Beard</div>
            </motion.div>
            <motion.div variants={staggerItem} className="flex flex-col items-center gap-2">
              <div className="text-xl font-display text-cream">Five Diamonds</div>
              <div className="text-xs tracking-widest text-gold uppercase">AAA Awards</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SIGNATURE DISHES SECTION ── */}
      <section className="py-[var(--section-gap)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
            <Tag className="mb-4 block">Signature Dishes</Tag>
            <h2 className="font-display text-cream" style={{ fontSize: "var(--text-h2)" }}>
              From Our Kitchen
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <DishCard
              name="Diver Scallops"
              description="Hand-dived scallops, cauliflower purée, golden raisins, brown butter, herb oil"
              price="$48"
              image="/images/dishes/appetizer.jpg"
              tag="Seasonal"
            />
            <DishCard
              name="Wagyu Tenderloin"
              description="A5 wagyu, beetroot purée, chanterelle mushrooms, aged red wine jus"
              price="$86"
              image="/images/dishes/main-course.jpg"
              tag="Chef&apos;s Selection"
            />
            <DishCard
              name="Golden Sphere"
              description="Valrhona chocolate sphere, 24k gold leaf, berry coulis, hazelnut tuile"
              price="$32"
              image="/images/dishes/dessert.jpg"
            />
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE MENU PREVIEW ── */}
      <section className="py-[var(--section-gap)] bg-charcoal/20">
        <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Tag className="mb-4 block">Curated Selection</Tag>
            <h2 className="font-display text-cream" style={{ fontSize: "var(--text-h2)" }}>
              A Taste of the Menu
            </h2>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveMenu(cat)}
                className={`px-6 py-2 rounded-full text-sm font-accent transition-all duration-300 ${
                  activeMenu === cat
                    ? "bg-gold text-obsidian"
                    : "bg-white/[0.04] text-sand hover:text-cream hover:bg-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {menuItems[activeMenu as keyof typeof menuItems].map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-baseline gap-4 py-4 border-b border-white/[0.04] last:border-0 hover:border-gold/20 transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-sm text-sand/70 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="font-body text-sm text-gold whitespace-nowrap shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/menu">
              <Button variant="ghost">View Full Menu →</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CHEF SECTION ── */}
      <section className="py-[var(--section-gap)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden mb-12"
            >
              <Image
                src="/images/team/chef.jpg"
                alt={`Chef ${CHEF.name} plating a dish`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <motion.div variants={staggerItem}>
                <Tag className="mb-6 block">The Kitchen</Tag>
              </motion.div>
              <motion.h2
                variants={staggerItem}
                className="font-display text-cream leading-tight"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Chef {CHEF.name}
              </motion.h2>
              <motion.p variants={staggerItem} className="text-gold font-display italic text-lg mt-2">
                {CHEF.title}
              </motion.p>
              <motion.p variants={staggerItem} className="mt-8 text-sand/80 leading-relaxed text-lg">
                {CHEF.bio}
              </motion.p>
              <motion.blockquote
                variants={staggerItem}
                className="mt-10 border-t border-b border-gold/20 py-8"
              >
                <p className="font-display italic text-cream/80 text-xl leading-relaxed">
                  &ldquo;{CHEF.philosophy}&rdquo;
                </p>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DINING EXPERIENCE SECTION ── */}
      <section className="py-[var(--section-gap)] bg-charcoal/30">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Tag className="mb-4 block">The Experience</Tag>
            <h2 className="font-display text-cream" style={{ fontSize: "var(--text-h2)" }}>
              Four Ways to Dine
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {EXPERIENCES.map((exp, i) => {
              const images = [
                "/images/hero/hero.jpg",
                "/images/interior/private-dining.jpg",
                "/images/dishes/ingredients.jpg",
                "/images/interior/bar.jpg",
              ];
              return (
                <FeatureCard
                  key={exp.title}
                  title={exp.title}
                  description={exp.description}
                  image={images[i]}
                />
              );
            })}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/experience">
              <Button variant="ghost">Explore the Spaces →</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW SECTION ── */}
      <section className="py-[var(--section-gap)] overflow-hidden">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-12"
          >
            <Tag className="mb-4 block">Visual Journey</Tag>
            <h2 className="font-display text-cream mb-6" style={{ fontSize: "var(--text-h2)" }}>
              Gallery Preview
            </h2>
            <Link href="/gallery">
              <Button variant="ghost">View Full Gallery →</Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/interior/private-dining.jpg",
              "/images/dishes/ingredients.jpg",
              "/images/dishes/signature.jpg",
              "/images/interior/bar.jpg",
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative rounded-xl overflow-hidden ${
                  i === 0 || i === 3 ? "aspect-square" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={src}
                  alt="Gallery Preview"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110 cursor-pointer"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section className="py-[var(--section-gap)] bg-charcoal/50">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Tag className="mb-4 block">Kind Words</Tag>
            <h2 className="font-display text-cream" style={{ fontSize: "var(--text-h2)" }}>
              From Our Guests
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.author} variants={staggerItem} className="h-full">
                <TestimonialCard
                  quote={t.quote}
                  author={t.author}
                  role={t.role}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-[var(--section-gap)]">
        <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Tag className="mb-4 block">Inquiries</Tag>
            <h2 className="font-display text-cream" style={{ fontSize: "var(--text-h2)" }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="border-b border-white/[0.04] pb-4"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full text-left py-4 focus:outline-none"
                >
                  <span className="font-display text-lg text-cream pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`text-gold transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sand/70 text-base leading-relaxed pb-6 pt-2">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INSTAGRAM PREVIEW LAYOUT ── */}
      <section className="pt-[var(--section-gap)] pb-12 border-t border-white/[0.04] bg-obsidian">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-accent tracking-widest uppercase text-sm text-gold flex items-center gap-2">
              <InstagramIcon size={16} /> @aurumandember
            </h3>
            <a href="#" className="text-sm text-sand/70 hover:text-cream transition-colors">
              Follow Us
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {[
              "/images/dishes/appetizer.jpg",
              "/images/hero/hero.jpg",
              "/images/team/chef.jpg",
              "/images/interior/private-dining.jpg",
              "/images/dishes/dessert.jpg",
              "/images/dishes/ingredients.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-sm overflow-hidden group">
                <Image
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-colors duration-300 flex items-center justify-center">
                  <InstagramIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVATION & CONTACT CTA ── */}
      <section className="py-[var(--section-gap)] relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/dishes/signature.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian/80" />
        </div>

        <div className="relative z-10 max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem}>
              <Sparkles className="w-8 h-8 text-gold mx-auto mb-6" />
            </motion.div>
            <motion.h2
              variants={staggerItem}
              className="font-display text-cream leading-tight"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Begin Your Evening
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mt-6 text-lg text-sand/80 max-w-xl mx-auto leading-relaxed"
            >
              We invite you to experience the convergence of fire, time, and devotion.
              Reserve your table and let us create an evening you&apos;ll remember.
            </motion.p>
            <motion.div variants={staggerItem} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reservations">
                <Button variant="primary" size="lg">
                  Reserve Your Evening
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="lg">
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Info row */}
            <motion.div
              variants={staggerItem}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-taupe"
            >
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-gold" />
                {SITE.hours.dining}
              </span>
              <span className="hidden sm:block text-stone">·</span>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                {SITE.address.city}, {SITE.address.state}
              </span>
              <span className="hidden sm:block text-stone">·</span>
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                {SITE.phone}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER SECTION ── */}
      <section className="py-[var(--section-gap)] border-t border-white/[0.04] bg-charcoal/20">
        <div className="max-w-2xl mx-auto px-[var(--container-padding)] text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl text-cream mb-4">Join Our Circle</h2>
            <p className="text-sand/80 mb-8">
              Subscribe to receive updates on seasonal menu changes, special events, and priority reservations.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-graphite border-2 border-white/10 rounded-lg py-3 px-4 text-cream focus:outline-none focus:border-gold/40 transition-colors"
                  required
                />
              </div>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Phone({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
