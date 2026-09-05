"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function Instagram({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function Facebook({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider, Input, TextArea } from "@/components/ui";
import { InfoCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      {/* Header */}
      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-16">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem}><Tag className="mb-6 block">Contact</Tag></motion.div>
          <motion.h1 variants={staggerItem} className="font-display text-cream leading-tight" style={{ fontSize: "var(--text-h1)" }}>
            Get in <span className="text-gradient-gold italic">Touch</span>
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 text-lg text-sand/80 max-w-xl mx-auto">
            For reservations, private events, press inquiries, or simply to say hello — we&apos;d love to hear from you.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-10"><Divider ornamental /></motion.div>
        </motion.div>
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-2xl text-cream mb-8">Send a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input label="Your Name" type="text" id="contact-name" required />
                <Input label="Email Address" type="email" id="contact-email" required />
              </div>
              <Input label="Subject" type="text" id="contact-subject" />
              <TextArea label="Your Message" id="contact-message" rows={6} />
              <Button variant="primary" size="lg" type="submit">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={staggerItem}>
              <InfoCard icon={<MapPin size={24} />} title="Location">
                <p>{SITE.address.street}</p>
                <p>{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
                <p className="mt-2 text-taupe">{SITE.address.country}</p>
              </InfoCard>
            </motion.div>

            <motion.div variants={staggerItem}>
              <InfoCard icon={<Clock size={24} />} title="Hours">
                <p><strong className="text-cream/80">Dinner:</strong> {SITE.hours.dining}</p>
                <p className="mt-1"><strong className="text-cream/80">Bar:</strong> {SITE.hours.bar}</p>
                <p className="mt-1"><strong className="text-cream/80">Brunch:</strong> {SITE.hours.brunch}</p>
                <p className="mt-1 text-taupe">Closed {SITE.hours.closed}</p>
              </InfoCard>
            </motion.div>

            <motion.div variants={staggerItem}>
              <InfoCard icon={<Phone size={24} />} title="Reach Us">
                <p>
                  <a href={`tel:${SITE.phone}`} className="text-cream hover:text-gold transition-colors">
                    {SITE.phone}
                  </a>
                </p>
                <p className="mt-1">
                  <a href={`mailto:${SITE.email}`} className="text-cream hover:text-gold transition-colors">
                    {SITE.email}
                  </a>
                </p>
              </InfoCard>
            </motion.div>

            <motion.div variants={staggerItem}>
              <InfoCard icon={<Instagram size={24} />} title="Follow Us">
                <div className="flex gap-4 mt-2">
                  <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cream hover:text-gold transition-colors">
                    <Instagram size={16} /> Instagram
                  </a>
                  <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cream hover:text-gold transition-colors">
                    <Facebook size={16} /> Facebook
                  </a>
                </div>
              </InfoCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
