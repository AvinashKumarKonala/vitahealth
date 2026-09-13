"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Check, Sparkles } from "lucide-react";
import { formatINR } from "@/lib/utils";

const plans = [
  {
    name: "Essential",
    price: 499,
    period: "/month",
    desc: "Core wellness delivery for everyday habits.",
    features: [
      "Monthly vitamin pack",
      "Free shipping",
      "Basic health tips",
      "Cancel anytime",
    ],
    highlight: false,
  },
  {
    name: "VitaHealth+",
    price: 999,
    period: "/month",
    desc: "Premium care with priority consults & curated kits.",
    features: [
      "Personalised supplement kit",
      "2 doctor consults / month",
      "Priority support",
      "AI wellness insights",
      "Exclusive member pricing",
    ],
    highlight: true,
  },
  {
    name: "Family Care",
    price: 1799,
    period: "/month",
    desc: "Shared plans for up to 4 family members.",
    features: [
      "Up to 4 member profiles",
      "Shared cart & deliveries",
      "4 doctor consults / month",
      "Family health dashboard",
    ],
    highlight: false,
  },
];

export default function SubscriptionsPage() {
  return (
    <AppShell>
      <div className="px-4 py-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl leaf-pattern p-8 text-center md:p-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-forest shadow-sm">
            <Sparkles size={12} /> Memberships
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink sm:text-4xl">
            Health subscriptions that fit your life
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-muted">
            Curated wellness plans delivered on your schedule — with care that
            grows with you.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-forest bg-forest text-white shadow-lg shadow-forest/20"
                  : "border-border bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sage px-3 py-1 text-[11px] font-bold text-forest-deep">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p
                className={`mt-1 text-sm ${plan.highlight ? "text-white/75" : "text-muted"}`}
              >
                {plan.desc}
              </p>
              <p className="mt-4">
                <span className="text-3xl font-bold">
                  {formatINR(plan.price)}
                </span>
                <span
                  className={`text-sm ${plan.highlight ? "text-white/70" : "text-muted"}`}
                >
                  {plan.period}
                </span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-sage" : "text-forest"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-6 w-full"
                variant={plan.highlight ? "white" : "primary"}
              >
                {plan.highlight ? "Upgrade Now" : "Choose Plan"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
