import Link from "next/link";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "/",
  size = "md",
}: {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: { icon: 16, text: "text-base" },
    md: { icon: 20, text: "text-lg" },
    lg: { icon: 26, text: "text-2xl" },
  }[size];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-semibold tracking-tight text-forest",
        sizes.text,
        className
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint text-forest">
        <Leaf size={sizes.icon} strokeWidth={2.2} />
      </span>
      <span>
        VITA<span className="font-bold">HEALTH</span>
      </span>
    </Link>
  );
}
