"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { landingNav } from "@/lib/data/doctors";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

export function LandingHeader() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {landingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-mint hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/shop"
            className="rounded-full p-2 text-forest hover:bg-mint"
            aria-label="Search"
          >
            <Search size={18} />
          </Link>
          <Link
            href="/cart"
            className="relative rounded-full p-2 text-forest hover:bg-mint"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            href="/dashboard"
            className="hidden text-sm font-medium text-forest sm:block"
          >
            Sign In
          </Link>
          <Link href="/dashboard" className="hidden sm:block">
            <Button size="sm">Get Started</Button>
          </Link>
          <button
            type="button"
            className="lg:hidden rounded-full p-2 text-forest"
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-ink/40 transition lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      >
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-72 flex-col bg-white p-5 shadow-xl transition",
            open ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between">
            <Logo size="sm" />
            <button type="button" onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>
          {landingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium text-ink hover:bg-mint"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/dashboard" className="mt-4">
            <Button className="w-full">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
