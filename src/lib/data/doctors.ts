import type { Doctor, Category, NavItem } from "../types";

export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Priya Sharma",
    specialty: "General Physician",
    rating: 4.9,
    available: true,
    experience: "12 years",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    id: "d2",
    name: "Dr. Arjun Mehta",
    specialty: "Dermatologist",
    rating: 4.8,
    available: true,
    experience: "9 years",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  },
  {
    id: "d3",
    name: "Dr. Neha Kapoor",
    specialty: "Nutritionist",
    rating: 4.9,
    available: true,
    experience: "8 years",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  },
  {
    id: "d4",
    name: "Dr. Rohan Iyer",
    specialty: "Fitness & Sports Medicine",
    rating: 4.7,
    available: false,
    experience: "11 years",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  },
  {
    id: "d5",
    name: "Dr. Ananya Reddy",
    specialty: "Cardiologist",
    rating: 4.9,
    available: true,
    experience: "15 years",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop",
  },
  {
    id: "d6",
    name: "Dr. Vikram Singh",
    specialty: "Orthopedic",
    rating: 4.6,
    available: true,
    experience: "14 years",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
  },
];

export const shopCategories: Category[] = [
  { id: "vitamins", name: "Vitamins & Supplements", icon: "pill" },
  { id: "skincare", name: "Skincare", icon: "sparkles" },
  { id: "hair", name: "Hair Care", icon: "scissors" },
  { id: "personal", name: "Personal Care", icon: "heart" },
  { id: "fitness", name: "Fitness Nutrition", icon: "dumbbell" },
  { id: "foods", name: "Healthy Foods", icon: "apple" },
  { id: "ayurveda", name: "Ayurveda & Herbal", icon: "leaf" },
  { id: "home", name: "Home Health", icon: "home" },
  { id: "baby", name: "Mom & Baby", icon: "baby" },
  { id: "offers", name: "Offers", icon: "tag" },
];

export const filterCategories = [
  "Vitamins & Supplements",
  "Skincare",
  "Hair Care",
  "Personal Care",
  "Fitness Nutrition",
  "Healthy Foods",
  "Ayurveda & Herbal",
  "Home Health",
  "Mom & Baby",
];

export const appNav: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: "layout-dashboard" },
  { href: "/shop", label: "Shop", icon: "shopping-bag" },
  { href: "/consultations", label: "Consultations", icon: "stethoscope" },
  { href: "/tracker", label: "Health Tracker", icon: "activity" },
  { href: "/nutrition", label: "Nutrition", icon: "salad" },
  { href: "/subscriptions", label: "Subscriptions", icon: "repeat" },
  { href: "/appointments", label: "Appointments", icon: "calendar" },
  { href: "/profile", label: "Profile", icon: "user" },
];

export const landingNav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/consultations", label: "Consultations" },
  { href: "/tracker", label: "Health Tracker" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/subscriptions", label: "Subscriptions" },
];
