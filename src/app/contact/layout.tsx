import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aurum & Ember for reservations, private events, press inquiries, or general questions. Located in New York City.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
