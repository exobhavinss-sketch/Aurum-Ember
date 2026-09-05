import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the seasonal tasting menu at Aurum & Ember. From hand-dived scallops to Valrhona chocolate sphere, each course is a meditation on flavor.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
