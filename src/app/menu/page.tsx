"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider } from "@/components/ui";
import type { Metadata } from "next";

// Menu data
const menuSections = [
  {
    title: "Amuse-Bouche",
    subtitle: "A gift from the kitchen",
    items: [
      { name: "Smoked Oyster Velouté", desc: "Champagne foam, dill oil, finger lime caviar", price: "—" },
      { name: "Truffle Gougères", desc: "Warm gruyère pastry, black truffle cream", price: "—" },
    ],
  },
  {
    title: "First Course",
    subtitle: "Beginnings",
    items: [
      { name: "Diver Scallops", desc: "Hand-dived scallops, cauliflower purée, golden raisins, brown butter, herb oil", price: "$48" },
      { name: "Burrata Tartare", desc: "Heirloom tomato, aged balsamic, basil oil, sourdough crisp", price: "$36" },
      { name: "Foie Gras Torchon", desc: "Sauternes gelée, brioche, Marcona almonds, fleur de sel", price: "$52" },
      { name: "Yellowtail Crudo", desc: "Yuzu kosho, pickled ginger, shiso, toasted sesame", price: "$42" },
    ],
  },
  {
    title: "Second Course",
    subtitle: "Interlude",
    items: [
      { name: "Wild Mushroom Risotto", desc: "Porcini, chanterelle, truffle butter, 36-month Parmigiano", price: "$44" },
      { name: "Lobster Bisque", desc: "Maine lobster, cognac cream, chive oil, brioche croutons", price: "$38" },
      { name: "Roasted Beet Salad", desc: "Golden and crimson beets, whipped goat cheese, candied walnuts, aged sherry vinaigrette", price: "$32" },
    ],
  },
  {
    title: "Main Course",
    subtitle: "The heart of the evening",
    items: [
      { name: "Wagyu Tenderloin", desc: "A5 wagyu, beetroot purée, chanterelle mushrooms, aged red wine jus", price: "$86" },
      { name: "Pan-Roasted Halibut", desc: "Saffron velouté, braised leeks, herb oil, preserved lemon", price: "$62" },
      { name: "Dry-Aged Duck Breast", desc: "Cherry mostarda, roasted parsnip, duck jus, micro herbs", price: "$58" },
      { name: "Lamb Saddle", desc: "Herb-crusted Colorado lamb, white bean purée, olive tapenade, rosemary jus", price: "$72" },
      { name: "Wild-Caught Salmon", desc: "Miso glaze, forbidden rice, pickled daikon, wasabi cream", price: "$54" },
    ],
  },
  {
    title: "Cheese",
    subtitle: "A curated selection",
    items: [
      { name: "Artisan Cheese Board", desc: "Five selections from our aging cave with honeycomb, seasonal preserves, and walnut bread", price: "$34" },
    ],
  },
  {
    title: "Dessert",
    subtitle: "Sweet conclusions",
    items: [
      { name: "Golden Sphere", desc: "Valrhona chocolate sphere, 24k gold leaf, berry coulis, hazelnut tuile", price: "$32" },
      { name: "Tarte Tatin", desc: "Caramelized apple, vanilla bean ice cream, calvados sabayon", price: "$28" },
      { name: "Crème Brûlée", desc: "Tahitian vanilla, burnt sugar crust, seasonal berries", price: "$24" },
      { name: "Petit Fours", desc: "A selection of handmade confections to accompany your evening", price: "—" },
    ],
  },
  {
    title: "Tasting Menu",
    subtitle: "The complete journey",
    items: [
      { name: "Seven-Course Tasting", desc: "A curated journey through our seasonal kitchen. Wine pairing available.", price: "$195" },
      { name: "Grand Tasting", desc: "Twelve courses with optional wine pairing. Our most complete expression.", price: "$295" },
      { name: "Wine Pairing", desc: "Sommelier-selected wines to accompany either tasting experience.", price: "+$125" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      {/* Header */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItem}>
            <Tag className="mb-6 block">Autumn 2026</Tag>
          </motion.div>
          <motion.h1
            variants={staggerItem}
            className="font-display text-cream leading-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            The Menu
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 text-lg text-sand/80 max-w-xl mx-auto">
            Our menu evolves with the seasons, guided by what the land and sea offer at their peak.
            Each dish is a reflection of this moment.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-8">
            <Divider ornamental />
          </motion.div>
        </motion.div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)]">
        {menuSections.map((section, sectionIdx) => (
          <motion.div
            key={section.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-20"
          >
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-cream">{section.title}</h2>
              <p className="font-display italic text-sm text-gold/70 mt-1">{section.subtitle}</p>
            </div>

            <div className="space-y-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-baseline gap-4 py-4 border-b border-white/[0.04] last:border-0 hover:border-gold/10 transition-colors duration-300"
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
            </div>

            {sectionIdx < menuSections.length - 1 && (
              <Divider className="mt-12" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mt-12">
        <Divider ornamental className="mb-8" />
        <p className="text-xs text-stone leading-relaxed max-w-md mx-auto">
          Menu items are subject to seasonal availability. Please inform your server of any dietary
          restrictions or allergies. A 20% service charge is included for parties of six or more.
        </p>
      </div>
    </div>
  );
}
