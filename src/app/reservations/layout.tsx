import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve your evening at Aurum & Ember. Select your preferred date, time, and dining experience for an unforgettable fine dining occasion.",
};

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
