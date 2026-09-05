"use client";

import React from "react";
import { cn } from "@/lib/cn";

// ═══════════════════════════════════════════
// BUTTON COMPONENT
// ═══════════════════════════════════════════

type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-obsidian font-medium hover:bg-gold-light hover:shadow-[var(--shadow-glow-md)] active:scale-[0.98]",
  secondary:
    "bg-transparent border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold active:scale-[0.98]",
  ghost:
    "bg-transparent text-cream hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
  icon:
    "bg-white/5 text-cream hover:bg-white/10 hover:text-gold rounded-full p-0 flex items-center justify-center",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

const iconSizes: Record<ButtonSize, string> = {
  sm: "w-9 h-9",
  md: "w-11 h-11",
  lg: "w-13 h-13",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  const isIcon = variant === "icon";

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-body tracking-wide transition-all duration-300 ease-out",
        "disabled:opacity-40 disabled:pointer-events-none",
        "focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2",
        variantStyles[variant],
        isIcon ? iconSizes[size] : sizeStyles[size],
        loading && "opacity-70 pointer-events-none",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}
