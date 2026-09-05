"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider } from "@/components/ui";

const allFaqs = [
  { q: "What is your dress code?", a: "Our dress code is elegant casual. We ask that guests refrain from wearing athletic wear, shorts, or flip-flops. Jackets are preferred but not required for gentlemen." },
  { q: "Can you accommodate dietary restrictions?", a: "We can accommodate most dietary restrictions and allergies with at least 48 hours advance notice. Please include this information in your reservation notes." },
  { q: "Do you offer vegetarian or vegan tasting menus?", a: "Yes, we offer a complete plant-based tasting menu. Please indicate this preference when making your reservation." },
  { q: "How far in advance can I make a reservation?", a: "Reservations open 30 days in advance at 10:00 AM EST on a rolling basis." },
  { q: "What is your cancellation policy?", a: "Due to the intimate size of our restaurant and the preparation required for our menus, we require 48 hours notice for cancellations. Cancellations within 48 hours will incur a fee of $150 per person." },
  { q: "Do you allow children?", a: "We welcome children who are able to enjoy our multi-course tasting menu. However, we do not offer a separate children's menu or high chairs." },
  { q: "Can I bring my own wine?", a: "Our corkage policy permits up to two 750ml bottles per table at a fee of $75 per bottle, provided the wine is not currently on our list." },
  { q: "Is the restaurant wheelchair accessible?", a: "Yes, both our main dining room and restrooms are fully wheelchair accessible." }
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center mb-16">
          <motion.div variants={staggerItem}><Tag className="mb-6 block">Inquiries</Tag></motion.div>
          <motion.h1 variants={staggerItem} className="font-display text-cream leading-tight" style={{ fontSize: "var(--text-h1)" }}>
            Frequently Asked <span className="text-gradient-gold italic">Questions</span>
          </motion.h1>
          <motion.div variants={staggerItem} className="mt-10"><Divider ornamental /></motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 max-w-3xl mx-auto">
          {allFaqs.map((faq, i) => (
            <motion.div key={i} className="border-b border-white/[0.04] pb-4">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex items-center justify-between w-full text-left py-4 focus:outline-none">
                <span className="font-display text-lg text-cream pr-4">{faq.q}</span>
                <ChevronDown className={`text-gold transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="text-sand/70 text-base leading-relaxed pb-6 pt-2">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
