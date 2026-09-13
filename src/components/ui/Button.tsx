"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost" | "white" | "soft";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-deep shadow-sm shadow-forest/20",
  outline:
    "border-2 border-forest text-forest bg-transparent hover:bg-mint",
  ghost: "text-forest hover:bg-mint",
  white: "bg-white text-forest hover:bg-mint-soft shadow-sm",
  soft: "bg-mint text-forest hover:bg-sage/30",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm rounded-full",
  md: "px-5 py-2.5 text-sm rounded-full",
  lg: "px-7 py-3.5 text-base rounded-full",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
