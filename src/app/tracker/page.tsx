"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import {
  Footprints,
  Flame,
  Droplets,
  Moon,
  Heart,
  TrendingUp,
} from "lucide-react";

const metrics = [
  {
    label: "Steps",
    value: "7,842",
    goal: "10,000",
    pct: 78,
    icon: Footprints,
    color: "bg-mint",
  },
  {
    label: "Calories",
    value: "1,698",
    goal: "2,200 kcal",
    pct: 77,
    icon: Flame,
    color: "bg-orange-50",
  },
  {
    label: "Water",
    value: "1.15 L",
    goal: "3 L",
    pct: 38,
    icon: Droplets,
    color: "bg-sky-50",
  },
  {
    label: "Sleep",
    value: "7h 48m",
    goal: "8h",
    pct: 97,
    icon: Moon,
    color: "bg-indigo-50",
  },
];

const week = [
  { day: "Mon", steps: 6200 },
  { day: "Tue", steps: 8100 },
  { day: "Wed", steps: 7400 },
  { day: "Thu", steps: 9200 },
  { day: "Fri", steps: 7842 },
  { day: "Sat", steps: 10500 },
  { day: "Sun", steps: 5600 },
];

export default function TrackerPage() {
  const maxSteps = Math.max(...week.map((d) => d.steps));

  return (
    <AppShell>
      <div className="px-4 py-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink">
              Health Tracker
            </h1>
            <p className="mt-1 text-muted">
              Track. Improve. Thrive — your daily wellness at a glance.
            </p>
          </div>
          <Button variant="soft">Sync Devices</Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col items-center justify-center rounded-3xl leaf-pattern p-8 text-center">
            <p className="text-sm font-medium text-muted">Health Score</p>
            <p className="mt-2 text-6xl font-bold text-forest">87</p>
            <p className="mt-2 flex items-center gap-1 text-sm text-forest">
              <TrendingUp size={14} /> +4 from last week
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-ink shadow-sm">
              <Heart size={16} className="text-danger" /> Resting HR 68 bpm
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <div className={`rounded-xl p-2.5 ${m.color}`}>
                    <m.icon size={20} className="text-forest" />
                  </div>
                  <span className="text-xs text-muted">Goal: {m.goal}</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-ink">{m.value}</p>
                <p className="text-sm text-muted">{m.label}</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-cream">
                  <div
                    className="h-full rounded-full bg-forest transition-all"
                    style={{ width: `${m.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-white p-6">
          <h2 className="font-semibold text-ink">This week&apos;s steps</h2>
          <div className="mt-6 flex h-40 items-end justify-between gap-2">
            {week.map((d) => (
              <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full max-w-10 rounded-t-lg bg-forest/90 transition hover:bg-forest"
                  style={{ height: `${(d.steps / maxSteps) * 100}%` }}
                  title={`${d.steps} steps`}
                />
                <span className="text-xs text-muted">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-white p-6">
          <h2 className="font-semibold text-ink">AI Insights</h2>
          <ul className="mt-4 space-y-3">
            {[
              "Your sleep consistency improved — keep your bedtime around 11 PM.",
              "Water intake is below target. Try a glass after each meal.",
              "Great weekend activity! Aim for 8k+ steps on weekdays too.",
            ].map((tip) => (
              <li
                key={tip}
                className="rounded-xl bg-mint/60 px-4 py-3 text-sm text-ink"
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
