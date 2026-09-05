import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Four distinct ways to dine at Aurum & Ember. From the main dining room to the Chef's Counter, each space offers an intimate culinary journey.",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
