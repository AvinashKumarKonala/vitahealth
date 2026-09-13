"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Plus, Utensils } from "lucide-react";

const meals = [
  {
    name: "Breakfast",
    items: "Oats bowl with berries & almonds",
    cal: 420,
    time: "8:15 AM",
  },
  {
    name: "Lunch",
    items: "Grilled paneer salad + quinoa",
    cal: 580,
    time: "1:10 PM",
  },
  {
    name: "Snack",
    items: "Greek yogurt & walnuts",
    cal: 210,
    time: "4:30 PM",
  },
  {
    name: "Dinner",
    items: "Not logged yet",
    cal: 0,
    time: "—",
  },
];

const macros = [
  { label: "Protein", value: 78, goal: 120, unit: "g", color: "bg-forest" },
  { label: "Carbs", value: 162, goal: 220, unit: "g", color: "bg-sage" },
  { label: "Fats", value: 48, goal: 65, unit: "g", color: "bg-amber-400" },
];

export default function NutritionPage() {
  const totalCal = meals.reduce((s, m) => s + m.cal, 0);

  return (
    <AppShell>
      <div className="px-4 py-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink">
              Nutrition
            </h1>
            <p className="mt-1 text-muted">
              Meal plans, calorie tracking, and smarter eating habits.
            </p>
          </div>
          <Button>
            <Plus size={16} /> Log Meal
          </Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl leaf-pattern p-8 text-center lg:col-span-1">
            <Utensils className="mx-auto text-forest" size={28} />
            <p className="mt-3 text-sm text-muted">Today&apos;s intake</p>
            <p className="mt-1 text-5xl font-bold text-forest">{totalCal}</p>
            <p className="text-sm text-muted">of 2,200 kcal goal</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-forest"
                style={{ width: `${Math.min(100, (totalCal / 2200) * 100)}%` }}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
            {macros.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <p className="text-sm text-muted">{m.label}</p>
                <p className="mt-1 text-2xl font-bold text-ink">
                  {m.value}
                  <span className="text-sm font-normal text-muted">
                    /{m.goal}
                    {m.unit}
                  </span>
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-cream">
                  <div
                    className={`h-full rounded-full ${m.color}`}
                    style={{ width: `${(m.value / m.goal) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-white">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-semibold text-ink">Today&apos;s meals</h2>
          </div>
          <ul className="divide-y divide-border">
            {meals.map((meal) => (
              <li
                key={meal.name}
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
              >
                <div>
                  <p className="font-medium text-ink">{meal.name}</p>
                  <p className="text-sm text-muted">{meal.items}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-forest">
                    {meal.cal ? `${meal.cal} kcal` : "—"}
                  </p>
                  <p className="text-xs text-muted">{meal.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Balanced Week Plan",
              desc: "High-protein vegetarian meals tailored to your goals.",
            },
            {
              title: "Light & Fresh",
              desc: "Lower calorie plan with colourful plates and hydration focus.",
            },
          ].map((plan) => (
            <div
              key={plan.title}
              className="rounded-2xl border border-border bg-white p-5"
            >
              <h3 className="font-semibold text-ink">{plan.title}</h3>
              <p className="mt-1 text-sm text-muted">{plan.desc}</p>
              <Button variant="soft" size="sm" className="mt-4">
                View Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
