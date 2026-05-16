import {
  FiAward,
  FiCheckCircle,
  FiGift,
  FiHeart,
  FiLock,
  FiRefreshCcw,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const img = (url, width = 1400) => `${url}?auto=format&fit=crop&w=${width}&q=86`;

export const whatsappNumber = "917015815700";

export const buildWhatsAppOrderLink = (productName) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello NAZAKAT, I would like to order: ${productName} x 1.`,
  )}`;

export const defaultOrderLink = buildWhatsAppOrderLink("NAZAKAT Baby Nazariya");

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#bestsellers", menu: true },
  { label: "Collections", href: "#collections", menu: true },
  { label: "Gifts", href: "#occasions", menu: true },
  { label: "Our Story", href: "#story" },
  { label: "Blog", href: "#footer" },
  { label: "Contact", href: "#footer" },
];

export const heroData = {
  eyebrow: "WELCOME TO NAZAKAT KIDZ",
  title: "Tiny Treasures.",
  accent: "Eternal Protection.",
  copy: "14K & 18K Gold Nazariya Jewellery Crafted for Little Blessings",
  image: img("https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4"),
  primaryCta: { label: "Shop Collection", href: "#collections" },
  secondaryCta: { label: "Explore Story", href: "#story" },
  highlights: [
    { icon: FiAward, title: "Certified", copy: "Gold & Diamonds" },
    { icon: FiShield, title: "Hypoallergenic", copy: "& Safe for Kids" },
    { icon: FiCheckCircle, title: "Hallmarked", copy: "Jewellery" },
    { icon: FiGift, title: "Gift Ready", copy: "Packaging" },
  ],
};

export const collections = [
  {
    title: "Nazariya Bracelets",
    image: img("https://images.unsplash.com/photo-1606760227091-3dd870d97f1d", 900),
    href: "#bestsellers",
  },
  {
    title: "Baby Bangles",
    image: img("https://images.unsplash.com/photo-1617038220319-276d3cfab638", 900),
    href: "#bestsellers",
  },
  {
    title: "Diamond Nazariya",
    image: img("https://images.unsplash.com/photo-1611591437281-460bfbe1220a", 900),
    href: "#bestsellers",
  },
  {
    title: "Evil Eye Collection",
    image: img("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338", 900),
    href: "#bestsellers",
  },
  {
    title: "Milestone Gifts",
    image: img("https://images.unsplash.com/photo-1605100804763-247f67b3557e", 900),
    href: "#occasions",
  },
];

export const promiseData = {
  image: img("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338", 1200),
  eyebrow: "OUR PROMISE",
  title: "Made with Love.",
  accent: "Meant to Protect.",
  copy:
    "Every piece from Nazakat Kidz is handcrafted in 14K & 18K gold with refined finishing, baby-safe comfort and a keepsake feel designed for little blessings.",
  cta: { label: "Discover Our Story", href: "#footer" },
  points: [
    { icon: FiShield, title: "Hypoallergenic", copy: "Gold" },
    { icon: FiHeart, title: "Safe & Comfortable", copy: "For Kids" },
    { icon: FiAward, title: "Certified Natural", copy: "Diamonds" },
    { icon: FiCheckCircle, title: "Lightweight", copy: "Everyday Wear" },
  ],
};

export const occasions = [
  {
    title: "Naming Ceremony",
    image: img("https://images.unsplash.com/photo-1450297350677-623de575f31c", 900),
    href: "#bestsellers",
  },
  {
    title: "First Birthday",
    image: img("https://images.unsplash.com/photo-1535632066927-ab7c9ab60908", 900),
    href: "#bestsellers",
  },
  {
    title: "Baby Shower",
    image: img("https://images.unsplash.com/photo-1549465220-1a8b9238cd48", 900),
    href: "#bestsellers",
  },
  {
    title: "Rakhi Gifts",
    image: img("https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f", 900),
    href: "#bestsellers",
  },
  {
    title: "First Milestone",
    image: img("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338", 900),
    href: "#bestsellers",
  },
];

export const products = [
  {
    name: "Classic Nazariya Bracelet",
    material: "14K Gold",
    price: "₹14,999",
    image: img("https://images.unsplash.com/photo-1606760227091-3dd870d97f1d", 900),
  },
  {
    name: "Diamond Nazariya Bracelet",
    material: "18K Gold",
    price: "₹21,999",
    image: img("https://images.unsplash.com/photo-1611591437281-460bfbe1220a", 900),
  },
  {
    name: "Evil Eye Baby Bracelet",
    material: "14K Gold",
    price: "₹13,499",
    image: img("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338", 900),
  },
  {
    name: "Black Bead Nazariya Bracelet",
    material: "14K Gold",
    price: "₹12,999",
    image: img("https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f", 900),
  },
];

export const featuredTestimonial = {
  quote:
    "So beautiful, lightweight and perfect for my baby. The nazariya bracelet is our daily essential now.",
  name: "Priyanka",
  city: "Mumbai",
};

export const trustStrip = [
  { icon: FiTruck, title: "Free Shipping", copy: "Pan India" },
  { icon: FiRefreshCcw, title: "Easy Returns", copy: "7 Day Policy" },
  { icon: FiAward, title: "Certified &", copy: "Hallmarked" },
  { icon: FiLock, title: "Secure", copy: "Payments" },
  { icon: FiGift, title: "COD", copy: "Available" },
];

export const footerLinks = [
  {
    title: "Shop",
    links: [
      { label: "Nazariya Bracelets", href: "#collections" },
      { label: "Diamond Nazariya", href: "#collections" },
      { label: "Baby Bangles", href: "#collections" },
      { label: "Milestone Gifts", href: "#occasions" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "#story" },
      { label: "Gifting", href: "#occasions" },
      { label: "Craftsmanship", href: "#story" },
      { label: "Contact", href: "#footer" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "WhatsApp Orders", href: defaultOrderLink },
      { label: "Shipping", href: "#footer" },
      { label: "Returns", href: "#footer" },
      { label: "Care Guide", href: "#story" },
    ],
  },
];
