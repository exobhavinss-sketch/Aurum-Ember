"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider } from "@/components/ui";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mb-16">
          <motion.div variants={staggerItem}><Tag className="mb-6 block">Legal</Tag></motion.div>
          <motion.h1 variants={staggerItem} className="font-display text-cream text-4xl md:text-5xl mb-6">Privacy Policy</motion.h1>
          <motion.p variants={staggerItem} className="text-sand/70">Last Updated: October 1, 2024</motion.p>
          <motion.div variants={staggerItem} className="mt-10"><Divider /></motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="prose prose-invert prose-sand max-w-none font-light leading-relaxed">
          <h2 className="font-display text-2xl text-cream mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-sand/80 mb-6">
            We collect information you provide directly to us, such as when you make a reservation, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and dietary preferences.
          </p>
          
          <h2 className="font-display text-2xl text-cream mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="text-sand/80 mb-6">
            We use the information we collect to manage your reservations, communicate with you about your dining experience, send you marketing communications (if you have opted in), and improve our services.
          </p>

          <h2 className="font-display text-2xl text-cream mt-10 mb-4">3. Information Sharing</h2>
          <p className="text-sand/80 mb-6">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website or conducting our business (such as reservation platforms), so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="font-display text-2xl text-cream mt-10 mb-4">4. Data Security</h2>
          <p className="text-sand/80 mb-6">
            We implement a variety of security measures to maintain the safety of your personal information when you make a reservation or enter, submit, or access your personal information.
          </p>

          <h2 className="font-display text-2xl text-cream mt-10 mb-4">5. Contact Us</h2>
          <p className="text-sand/80 mb-6">
            If you have any questions about this Privacy Policy, please contact us at info@aurumandember.com.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
