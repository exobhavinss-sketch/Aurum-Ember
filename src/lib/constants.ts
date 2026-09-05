// ═══════════════════════════════════════════
// AURUM & EMBER — Site Constants
// ═══════════════════════════════════════════

export const SITE = {
  name: "Aurum & Ember",
  tagline: "Where Gold Meets Fire",
  description:
    "A fine dining experience where fire, time, and devotion converge. Seasonal tasting menus crafted with the finest ingredients in an atmosphere of understated luxury.",
  url: "https://aurumandember.com",
  locale: "en_US",
  phone: "+1 (212) 555-0187",
  email: "reservations@aurumandember.com",
  address: {
    street: "142 West 24th Street",
    city: "New York",
    state: "NY",
    zip: "10011",
    country: "United States",
  },
  hours: {
    dining: "Tuesday – Saturday, 5:30 PM – 10:00 PM",
    bar: "Tuesday – Saturday, 5:00 PM – 11:00 PM",
    brunch: "Sunday, 11:00 AM – 2:00 PM",
    closed: "Monday",
  },
  social: {
    instagram: "https://instagram.com/aurumandember",
    facebook: "https://facebook.com/aurumandember",
    twitter: "https://twitter.com/aurumandember",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Story", href: "/story" },
  { label: "Our Chef", href: "/chef" },
  { label: "Menu", href: "/menu" },
  { label: "Experience", href: "/experience" },
  { label: "Private Dining", href: "/private-dining" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const MENU_CATEGORIES = [
  "Amuse-Bouche",
  "First Course",
  "Second Course",
  "Main Course",
  "Cheese",
  "Dessert",
  "Tasting Menu",
] as const;

export const EXPERIENCES = [
  {
    title: "The Dining Room",
    description: "Our main dining space seats forty guests in an atmosphere of intimate luxury. Each table is positioned for privacy while remaining connected to the energy of the room.",
    capacity: "40 guests",
  },
  {
    title: "The Private Cellar",
    description: "An exclusive underground space for gatherings of up to twelve. Surrounded by our curated wine collection, this room offers a deeply personal dining experience.",
    capacity: "12 guests",
  },
  {
    title: "The Chef's Counter",
    description: "Six seats at the heart of our kitchen. Watch every detail of the tasting menu unfold as our chefs narrate each course from preparation to plate.",
    capacity: "6 guests",
  },
  {
    title: "The Bar",
    description: "Our bar program honors the same philosophy as our kitchen. Seasonal cocktails crafted with house-made ingredients and rare spirits.",
    capacity: "16 seats",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "An evening at Aurum & Ember is not merely a meal — it is a meditation on what food can become when every detail is considered.",
    author: "James Whitfield",
    role: "Food Critic, The New York Chronicle",
    rating: 5,
  },
  {
    quote: "The tasting menu is a journey through flavor that rewards patience and attention. Each course builds upon the last, creating something far greater than the sum of its parts.",
    author: "Clara Beaumont",
    role: "Culinary Editor, Epicurean Magazine",
    rating: 5,
  },
  {
    quote: "In a city of extraordinary dining, Aurum & Ember stands apart. The atmosphere, the service, the wine pairings — everything conspires to create an unforgettable evening.",
    author: "Michael Chen",
    role: "Dining Correspondent, Metropolitan Review",
    rating: 5,
  },
] as const;

export const CHEF = {
  name: "Sebastian Voss",
  title: "Executive Chef & Founder",
  bio: "With two decades of experience across Michelin-starred kitchens in Paris, Tokyo, and Copenhagen, Chef Voss brings a philosophy of elemental cooking to Aurum & Ember. His approach honors the ingredient above all — allowing fire, salt, and time to reveal what nature has already perfected.",
  philosophy: "We cook with conviction, not complication. Every dish begins with a single idea, a single ingredient at its peak. Our role is not to transform, but to reveal.",
} as const;
