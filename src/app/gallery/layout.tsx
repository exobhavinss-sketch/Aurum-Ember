import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through Aurum & Ember's kitchen, dining spaces, and the artistry that defines every evening.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
