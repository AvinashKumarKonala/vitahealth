"use client";

import { AppShell } from "@/components/layout/AppShell";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { Button } from "@/components/ui/Button";
import { doctors } from "@/lib/data/doctors";
import { Search, Video } from "lucide-react";
import { useMemo, useState } from "react";

const specialties = [
  "All",
  "General Physician",
  "Dermatologist",
  "Nutritionist",
  "Fitness & Sports Medicine",
  "Cardiologist",
  "Orthopedic",
];

export default function ConsultationsPage() {
  const [specialty, setSpecialty] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      if (specialty !== "All" && d.specialty !== specialty) return false;
      if (
        query &&
        !`${d.name} ${d.specialty}`.toLowerCase().includes(query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [specialty, query]);

  return (
    <AppShell>
      <div className="px-4 py-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl leaf-pattern p-8 md:p-10">
          <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink sm:text-4xl">
            Consult top doctors, from anywhere
          </h1>
          <p className="mt-2 max-w-xl text-muted">
            Book video consults with verified specialists — available when you
            need them.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <label className="relative min-w-[240px] flex-1 max-w-md">
              <Search
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search doctors or specialties..."
                className="w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-forest"
              />
            </label>
            <Button>
              <Video size={16} /> Instant Consult
            </Button>
          </div>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {specialties.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSpecialty(s)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
                specialty === s
                  ? "bg-forest text-white"
                  : "bg-white text-muted ring-1 ring-border hover:bg-mint"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
