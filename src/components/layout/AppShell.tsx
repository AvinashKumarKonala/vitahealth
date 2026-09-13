"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingCart,
  Bell,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { useCart } from "@/lib/cart-context";
import { appNav } from "@/lib/data/doctors";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ShoppingBag,
  Stethoscope,
  Activity,
  Salad,
  Repeat,
  Calendar,
  User,
} from "lucide-react";

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  "shopping-bag": ShoppingBag,
  stethoscope: Stethoscope,
  activity: Activity,
  salad: Salad,
  repeat: Repeat,
  calendar: Calendar,
  user: User,
};

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-white lg:flex">
      <div className="flex flex-1 flex-col gap-1 p-4 pt-6">
        {appNav.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                active
                  ? "bg-mint text-forest"
                  : "text-muted hover:bg-cream hover:text-forest"
              )}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="m-4 rounded-2xl bg-gradient-to-br from-forest to-forest-soft p-4 text-white">
        <p className="text-sm font-semibold">VITAHEALTH+</p>
        <p className="mt-1 text-xs text-white/80">
          Unlock premium care, priority consults & exclusive deals.
        </p>
        <button className="mt-3 w-full rounded-full bg-white px-3 py-2 text-xs font-semibold text-forest transition hover:bg-mint">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
}

export function AppHeader() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
        <div className="flex h-16 items-center gap-4 px-4 lg:px-6">
          <button
            type="button"
            className="lg:hidden text-forest"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <Logo size="sm" href="/dashboard" className="shrink-0" />

          <div className="mx-auto hidden max-w-xl flex-1 md:block">
            <label className="relative block">
              <Search
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="search"
                placeholder="Search for medicines, supplements, skincare, wellness and more..."
                className="w-full rounded-full border border-border bg-cream py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-forest focus:bg-white"
              />
            </label>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              className="hidden items-center gap-1.5 text-xs text-muted xl:flex"
            >
              <MapPin size={14} className="text-forest" />
              Deliver to Bangalore 560001
            </button>

            <Link
              href="/cart"
              className="relative rounded-full p-2 text-forest hover:bg-mint"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              type="button"
              className="hidden rounded-full p-2 text-forest hover:bg-mint sm:block"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>

            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 hover:bg-mint"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-xs font-semibold text-white">
                A
              </span>
              <span className="hidden text-sm font-medium text-ink sm:block">
                Hi, Alex
              </span>
            </Link>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          />
          <div className="absolute left-0 top-0 flex h-full w-72 flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <Logo size="sm" />
              <button type="button" onClick={() => setMobileOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-3">
              {appNav.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium",
                      active
                        ? "bg-mint text-forest"
                        : "text-muted hover:bg-cream"
                    )}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <AppHeader />
      <div className="flex flex-1">
        <AppSidebar />
        <main className="flex-1 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
