"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { MapPin, Package, Heart, Settings } from "lucide-react";

export default function ProfilePage() {
  return (
    <AppShell>
      <div className="px-4 py-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-white p-6 sm:flex-row sm:items-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-2xl font-semibold text-white">
            A
          </span>
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-ink">Alex Kumar</h1>
            <p className="text-sm text-muted">alex.kumar@email.com</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted">
              <MapPin size={12} /> Bangalore 560001
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Settings size={14} /> Edit Profile
          </Button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Package, label: "Orders", value: "12" },
            { icon: Heart, label: "Wishlist", value: "5" },
            { icon: MapPin, label: "Addresses", value: "2" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-white p-5"
            >
              <s.icon size={20} className="text-forest" />
              <p className="mt-3 text-2xl font-bold text-ink">{s.value}</p>
              <p className="text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-white p-6">
          <h2 className="font-semibold text-ink">Health preferences</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Immunity",
              "Skin Health",
              "Fitness",
              "Vegetarian",
              "Sleep",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-mint px-3 py-1.5 text-xs font-medium text-forest"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
