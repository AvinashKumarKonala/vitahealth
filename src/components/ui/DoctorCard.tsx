"use client";

import Image from "next/image";
import { Star, Video } from "lucide-react";
import type { Doctor } from "@/lib/types";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-forest/8">
      <div className="relative mb-3 aspect-square overflow-hidden rounded-xl bg-mint">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <h3 className="font-semibold text-ink">{doctor.name}</h3>
      <p className="text-sm text-muted">{doctor.specialty}</p>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span className="font-medium">{doctor.rating}</span>
        </div>
        <span
          className={cn(
            "flex items-center gap-1.5 text-xs font-medium",
            doctor.available ? "text-forest" : "text-muted"
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              doctor.available
                ? "animate-pulse-dot bg-sage"
                : "bg-muted"
            )}
          />
          {doctor.available ? "Available Now" : "Busy"}
        </span>
      </div>
      <Button
        className="mt-3 w-full"
        size="sm"
        variant={doctor.available ? "primary" : "soft"}
        disabled={!doctor.available}
      >
        <Video size={14} />
        Consult
      </Button>
    </article>
  );
}
