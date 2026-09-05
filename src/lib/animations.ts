import type { Variants, Transition } from "framer-motion";

// ═══════════════════════════════════════════
// AURUM & EMBER — Animation System
// ═══════════════════════════════════════════

const smoothEase = [0.16, 1, 0.3, 1] as const;
const gentleEase = [0.4, 0, 0.2, 1] as const;

// ── Base Transitions ──
export const transitions = {
  smooth: { duration: 0.8, ease: smoothEase } satisfies Transition,
  gentle: { duration: 0.6, ease: gentleEase } satisfies Transition,
  fast: { duration: 0.3, ease: gentleEase } satisfies Transition,
  slow: { duration: 1.2, ease: smoothEase } satisfies Transition,
  spring: { type: "spring", stiffness: 100, damping: 15, mass: 0.5 } satisfies Transition,
};

// ── Fade Variants ──
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.gentle },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: transitions.smooth },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: transitions.smooth },
};

// ── Scale Variants ──
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: transitions.smooth },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: transitions.smooth },
};

// ── Stagger Container ──
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// ── Stagger Items ──
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

// ── Navigation ──
export const navSlideDown: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: transitions.fast },
};

// ── Mobile Menu ──
export const menuOverlay: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.3 } },
};

export const menuPanel: Variants = {
  closed: { x: "100%" },
  open: { x: "0%", transition: { duration: 0.5, ease: smoothEase } },
};

export const menuItem: Variants = {
  closed: { opacity: 0, x: 30 },
  open: { opacity: 1, x: 0 },
};

export const menuStagger: Variants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// ── Image reveal ──
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: smoothEase },
  },
};

// ── Parallax helper ──
export const parallaxY = (amount: number = 50) => ({
  initial: { y: -amount },
  whileInView: { y: amount },
  transition: { duration: 0 }, // controlled by scroll
});

// ── Hover presets ──
export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: transitions.fast,
};

export const hoverGlow = {
  whileHover: { boxShadow: "0 0 30px rgba(196, 154, 42, 0.15)" },
  transition: transitions.fast,
};

export const hoverLift = {
  whileHover: { y: -4 },
  transition: transitions.fast,
};

// ── Page transition ──
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: smoothEase } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3 } },
};

// ── Text reveal (character by character) ──
export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.02 },
  },
};

export const textRevealChar: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: smoothEase } },
};

// ── Line draw ──
export const lineDraw: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: smoothEase },
  },
};
