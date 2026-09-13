import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Stethoscope,
  Activity,
  Salad,
  Repeat,
  Sparkles,
  Check,
  Star,
} from "lucide-react";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { LandingFooter } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { featuredProducts } from "@/lib/data/products";
import { doctors } from "@/lib/data/doctors";

const services = [
  {
    icon: ShoppingBag,
    title: "Shop",
    desc: "Wellness products",
    href: "/shop",
  },
  {
    icon: Stethoscope,
    title: "Consult",
    desc: "Verified doctors",
    href: "/consultations",
  },
  {
    icon: Activity,
    title: "Track",
    desc: "Your health & fitness",
    href: "/tracker",
  },
  {
    icon: Salad,
    title: "Nutrition",
    desc: "Meal & calorie tracking",
    href: "/nutrition",
  },
  {
    icon: Repeat,
    title: "Subscribe",
    desc: "Personalized plans",
    href: "/subscriptions",
  },
  {
    icon: Sparkles,
    title: "Get Insights",
    desc: "AI-powered recommendations",
    href: "/dashboard",
  },
];

const careCards = [
  {
    title: "Healthcare Store",
    desc: "Vitamins, supplements, skincare & more from trusted brands.",
    href: "/shop",
    cta: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop",
  },
  {
    title: "Doctor Consultations",
    desc: "Talk to certified doctors online or book in-person visits.",
    href: "/consultations",
    cta: "Book Consult",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    title: "Health Tracking",
    desc: "Steps, sleep, heart rate and daily wellness — all in one view.",
    href: "/tracker",
    cta: "Start Tracking",
    image:
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=600&h=400&fit=crop",
  },
  {
    title: "Nutrition & Diet",
    desc: "Calorie tracking, meal plans and smarter eating habits.",
    href: "/nutrition",
    cta: "Explore Nutrition",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
  },
  {
    title: "Health Subscriptions",
    desc: "Curated wellness plans delivered on your schedule.",
    href: "/subscriptions",
    cta: "View Plans",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&h=400&fit=crop",
  },
  {
    title: "Appointments",
    desc: "Manage bookings, reminders and follow-ups effortlessly.",
    href: "/appointments",
    cta: "Manage Appointments",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
  },
];

const stats = [
  { value: "250K+", label: "Happy Users" },
  { value: "1,000+", label: "Verified Doctors" },
  { value: "50K+", label: "Products Sold" },
  { value: "4.8/5", label: "Average Rating" },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <LandingHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-soft">
              Healthier today, brighter tomorrow
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Your health.{" "}
              <span className="text-forest">One smarter place.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Shop trusted wellness products, consult verified doctors, track
              your health, and get AI insights — all designed around you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard">
                <Button size="lg">
                  Get Started <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="#features">
                <Button size="lg" variant="outline">
                  Explore Features
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
                ].map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-ink">
                  Trusted by 250,000+ users
                </p>
                <div className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  4.8/5 average rating
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up delay-200">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/15 sm:aspect-[5/5]">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&h=1100&fit=crop"
                alt="Woman enjoying a healthy outdoor moment"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
            </div>
            <div className="animate-float absolute bottom-8 left-4 right-4 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-auto sm:right-6 sm:w-64">
              <p className="font-[family-name:var(--font-caveat)] text-xl text-forest">
                Small steps. Big changes. Better you. ♡
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="border-y border-border bg-cream/80">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col items-center gap-2 rounded-2xl p-3 text-center transition hover:bg-white"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-forest shadow-sm ring-1 ring-border transition group-hover:bg-mint group-hover:shadow-md">
                <s.icon size={22} />
              </span>
              <span className="text-sm font-semibold text-ink">{s.title}</span>
              <span className="text-xs text-muted">{s.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Complete care */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink sm:text-4xl">
            All you need for a healthier life
          </h2>
          <p className="mt-3 text-muted">
            Complete care for a better tomorrow — products, people, and
            progress in one ecosystem.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-forest/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{card.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-forest">
                  {card.cta} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-center font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-ink sm:text-3xl">
            Trusted by a growing community
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-forest sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App promo */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] leaf-pattern p-8 lg:grid-cols-3 lg:p-12">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink">
              Your personalised health companion
            </h2>
            <p className="mt-2 text-lg text-forest">Track. Improve. Thrive.</p>
            <Link href="/tracker" className="mt-6 inline-block">
              <Button size="lg">
                Start Your Journey <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          <div className="relative mx-auto w-52 animate-float">
            <div className="rounded-[2rem] border-4 border-ink/90 bg-white p-4 shadow-2xl">
              <p className="text-center text-xs font-semibold text-muted">
                Health Score
              </p>
              <p className="mt-1 text-center text-4xl font-bold text-forest">
                87
              </p>
              <div className="mt-4 space-y-2 text-xs">
                {[
                  ["Steps", "7,842"],
                  ["Calories", "1,698 kcal"],
                  ["Water", "1.15 L"],
                  ["Sleep", "7h 48m"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between rounded-lg bg-mint px-3 py-2"
                  >
                    <span className="text-muted">{k}</span>
                    <span className="font-semibold text-ink">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-ink">
              Better habits. A brighter you.
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Track your progress",
                "Get AI-powered insights",
                "Build healthier habits",
                "Feel your best every day",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-forest text-white">
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink">
              Wellness essentials for you
            </h2>
            <p className="mt-2 text-muted">
              Curated picks to support your everyday health goals.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden shrink-0 text-sm font-semibold text-forest sm:inline-flex sm:items-center sm:gap-1"
          >
            View All Products <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} compact />
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink">
              Consult top doctors, from anywhere
            </h2>
            <p className="mt-2 text-muted">
              Verified specialists ready when you need them.
            </p>
          </div>
          <Link
            href="/consultations"
            className="hidden shrink-0 text-sm font-semibold text-forest sm:inline-flex sm:items-center sm:gap-1"
          >
            View All Doctors <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {doctors.slice(0, 4).map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative mx-4 mb-10 overflow-hidden rounded-[2rem] sm:mx-6 lg:mx-auto lg:max-w-7xl">
        <div className="relative min-h-[320px]">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&h=700&fit=crop"
            alt="Mountain landscape at sunrise"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/55" />
          <div className="relative flex min-h-[320px] flex-col items-center justify-center px-6 py-16 text-center text-white">
            <h2 className="max-w-xl font-[family-name:var(--font-fraunces)] text-3xl font-semibold sm:text-4xl">
              A healthier you is a brighter tomorrow.
            </h2>
            <p className="mt-3 max-w-md text-white/85">
              Join VitaHealth and take control of your health journey today.
            </p>
            <Link href="/dashboard" className="mt-6">
              <Button variant="white" size="lg">
                Get Started <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
