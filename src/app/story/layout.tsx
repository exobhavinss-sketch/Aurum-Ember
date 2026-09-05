import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the story behind Aurum & Ember — born from a philosophy of restraint, elemental cooking, and devotion to the finest ingredients.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
