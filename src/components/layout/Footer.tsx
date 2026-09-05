"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

function Instagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function Facebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Divider } from "@/components/ui";

export function Footer() {
  return (
    <footer className="relative bg-void border-t border-white/[0.04]" role="contentinfo">
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] py-20 md:py-28">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col mb-6 group">
              <span className="font-display text-2xl text-cream tracking-wide">Aurum</span>
              <span className="font-display text-xs text-gold/60 tracking-[0.3em] uppercase">& Ember</span>
            </Link>
            <p className="text-sm text-sand/80 leading-relaxed max-w-xs">
              Where fire, time, and devotion converge. A fine dining experience that honors the alchemy of elemental cooking.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-accent text-xs uppercase tracking-[0.2em] text-taupe mb-6">Navigate</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand hover:text-gold transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservations"
                  className="text-sm text-gold hover:text-gold-light transition-colors duration-300 font-medium"
                >
                  Reserve Your Evening
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-accent text-xs uppercase tracking-[0.2em] text-taupe mb-6">Visit</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-sand leading-relaxed">
                  {SITE.address.street}<br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a href={`tel:${SITE.phone}`} className="text-sm text-sand hover:text-cream transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 shrink-0" />
                <div className="text-sm text-sand leading-relaxed">
                  <p>{SITE.hours.dining}</p>
                  <p className="text-taupe mt-1">Bar: {SITE.hours.bar}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-accent text-xs uppercase tracking-[0.2em] text-taupe mb-6">Stay Connected</h3>
            <p className="text-sm text-sand/80 leading-relaxed mb-5">
              Receive seasonal menus, exclusive events, and stories from our kitchen.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/[0.04] border border-white/10 border-r-0 rounded-l-lg px-4 py-2.5 text-sm text-cream placeholder:text-stone focus:outline-none focus:border-gold/40 transition-colors"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gold text-obsidian text-sm font-medium rounded-r-lg hover:bg-gold-light transition-colors duration-300"
              >
                Join
              </button>
            </form>
            {/* Social */}
            <div className="flex gap-4 mt-8">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center text-sand hover:text-gold hover:bg-white/[0.08] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center text-sand hover:text-gold hover:bg-white/[0.08] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <Divider />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-xs text-stone">
              © {new Date().getFullYear()} Aurum & Ember. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-xs text-stone hover:text-taupe transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-xs text-stone hover:text-taupe transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div className="text-xs text-stone flex items-center gap-2">
            <span>A portfolio project by</span>
            <a href="https://nextwebhostingdev.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-taupe hover:text-gold transition-colors group">
              <svg width="18" height="18" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80 group-hover:opacity-100 transition-opacity">
                <rect width="100" height="100" rx="24" fill="#121620"/>
                <line x1="30" y1="28" x2="30" y2="72" stroke="white" strokeWidth="14" strokeLinecap="round"/>
                <line x1="70" y1="28" x2="70" y2="72" stroke="white" strokeWidth="14" strokeLinecap="round"/>
                <line x1="30" y1="28" x2="70" y2="72" stroke="#38bdf8" strokeWidth="14" strokeLinecap="round"/>
              </svg>
              <span>NextWebHosting</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
