"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, hoverLift, scaleIn } from "@/lib/animations";

// ═══════════════════════════════════════════
// CARD COMPONENTS
// ═══════════════════════════════════════════

/* ── Base Card ── */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hoverable?: boolean;
}

export function Card({ children, className, glass = false, hoverable = true }: CardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      {...(hoverable ? hoverLift : {})}
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-500",
        glass
          ? "glass"
          : "bg-graphite border border-white/[0.04]",
        hoverable && "hover:border-gold/20 hover:shadow-[var(--shadow-glow-sm)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

/* ── Dish Card ── */
interface DishCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  className?: string;
}

export function DishCard({ name, description, price, image, tag, className }: DishCardProps) {
  return (
    <Card className={cn("group cursor-pointer", className)}>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {tag && (
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-accent uppercase tracking-widest bg-gold/90 text-obsidian rounded-full">
            {tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors duration-300">
            {name}
          </h3>
          <span className="font-body text-sm text-gold ml-4 whitespace-nowrap">{price}</span>
        </div>
        <p className="text-sm text-sand leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}

/* ── Feature Card ── */
interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export function FeatureCard({ title, description, image, className }: FeatureCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer",
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="font-display text-2xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-sand/80 leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Info Card (Glass) ── */
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function InfoCard({ icon, title, children, className }: InfoCardProps) {
  return (
    <Card glass hoverable className={cn("p-8", className)}>
      <div className="text-gold mb-4">{icon}</div>
      <h3 className="font-display text-xl text-cream mb-3">{title}</h3>
      <div className="text-sm text-sand leading-relaxed">{children}</div>
    </Card>
  );
}

/* ── Testimonial Card ── */
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, className }: TestimonialCardProps) {
  return (
    <Card glass={false} hoverable={false} className={cn("p-8 md:p-10 border-gold/10 h-full flex flex-col", className)}>
      <div className="text-gold text-4xl font-display italic mb-6">&ldquo;</div>
      <blockquote className="flex-1 font-display text-lg md:text-xl text-cream/90 italic leading-relaxed mb-8">
        {quote}
      </blockquote>
      <div className="border-t border-white/[0.06] pt-6 mt-auto">
        <p className="font-body text-sm text-cream font-medium">{author}</p>
        <p className="font-body text-xs text-taupe mt-1">{role}</p>
      </div>
    </Card>
  );
}
