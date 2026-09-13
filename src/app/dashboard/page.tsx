"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import {
  Activity,
  Calendar,
  ShoppingBag,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const quick = [
  {
    title: "Shop Wellness",
    desc: "Browse supplements & care",
    href: "/shop",
    icon: ShoppingBag,
  },
  {
    title: "Consult a Doctor",
    desc: "Available specialists online",
    href: "/consultations",
    icon: Stethoscope,
  },
  {
    title: "Track Health",
    desc: "Score 87 · Keep it up",
    href: "/tracker",
    icon: Activity,
  },
  {
    title: "Appointments",
    desc: "2 upcoming this week",
    href: "/appointments",
    icon: Calendar,
  },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="px-4 py-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl leaf-pattern p-8 md:p-10">
          <p className="text-sm font-medium text-forest">Good afternoon, Alex</p>
          <h1 className="mt-1 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink sm:text-4xl">
            Your health hub
          </h1>
          <p className="mt-2 max-w-lg text-muted">
            Everything you need today — shop, consult, track, and stay on plan.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quick.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="group rounded-2xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-forest/10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-forest">
                <q.icon size={20} />
              </span>
              <h2 className="mt-3 font-semibold text-ink">{q.title}</h2>
              <p className="mt-0.5 text-sm text-muted">{q.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-forest opacity-0 transition group-hover:opacity-100">
                Open <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="font-semibold text-ink">Today&apos;s focus</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Drink 1.8L more water to hit your goal",
                "Nutrition consult with Dr. Neha on Wed",
                "Reorder Omega-3 — running low",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-cream px-4 py-3 text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-forest p-6 text-white">
            <h2 className="font-semibold">Unlock VitaHealth+</h2>
            <p className="mt-2 text-sm text-white/80">
              Priority consults, personalised kits, and member-only pricing.
            </p>
            <Link href="/subscriptions" className="mt-5 inline-block">
              <Button variant="white" size="sm">
                Upgrade Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
