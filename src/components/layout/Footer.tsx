"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

function SocialIcons({ className = "" }: { className?: string }) {
  const icons = [
    {
      label: "Instagram",
      path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
    },
    {
      label: "LinkedIn",
      path: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z",
    },
    {
      label: "X",
      path: "M18.244 2H21.5l-7.5 8.57L22.5 22h-6.57l-5.14-6.7L5.2 22H1.94l8.03-9.17L1.5 2h6.73l4.64 6.13L18.244 2zm-1.15 18h1.8L7.02 3.9H5.1L17.094 20z",
    },
    {
      label: "YouTube",
      path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z",
    },
  ];
  return (
    <div className={`flex gap-3 ${className}`}>
      {icons.map((icon) => (
        <a
          key={icon.label}
          href="#"
          className="rounded-full p-2 text-muted hover:bg-mint hover:text-forest"
          aria-label={icon.label}
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
            <path d={icon.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Your smarter place for wellness products, doctor consults, health
            tracking, and personalised care.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {[
              ["Home", "/"],
              ["Shop", "/shop"],
              ["Consultations", "/consultations"],
              ["Health Tracker", "/tracker"],
              ["Nutrition", "/nutrition"],
              ["Subscriptions", "/subscriptions"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-forest">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {[
              "Help Center",
              "Contact Us",
              "FAQ",
              "Privacy Policy",
              "Terms of Service",
            ].map((label) => (
              <li key={label}>
                <a href="#" className="hover:text-forest">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink">Stay Connected</h4>
          <p className="mt-2 text-sm text-muted">
            Get wellness tips and exclusive offers.
          </p>
          <form
            className="mt-3 flex overflow-hidden rounded-full border border-border bg-cream"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none"
            />
            <button
              type="submit"
              className="m-1 flex h-9 w-9 items-center justify-center rounded-full bg-forest text-white"
              aria-label="Subscribe"
            >
              <ArrowRight size={16} />
            </button>
          </form>
          <SocialIcons className="mt-4" />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} VitaHealth. All rights reserved.</p>
          <p>Made with ♡ for a healthier world.</p>
        </div>
      </div>
    </footer>
  );
}

export function ShopFooter() {
  return (
    <footer className="mt-10 border-t border-border bg-white">
      <div className="grid gap-6 border-b border-border px-6 py-6 sm:grid-cols-2 lg:grid-cols-5">
        {[
          ["100% Genuine Products", "Assured quality from trusted brands"],
          ["Fast & Reliable Delivery", "Across major Indian cities"],
          ["Free Shipping", "On orders above ₹499"],
          ["Easy Returns", "7-day hassle-free returns"],
          ["Expert Support", "Guided by certified specialists"],
        ].map(([title, desc]) => (
          <div key={title} className="text-center sm:text-left">
            <p className="text-sm font-semibold text-forest">{title}</p>
            <p className="mt-1 text-xs text-muted">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted">
            Trusted products. Real results. A healthier, happier you.
          </p>
          <SocialIcons className="mt-4 text-muted" />
        </div>
        {[
          {
            title: "Shop",
            links: ["All Products", "Bestsellers", "New Arrivals", "Offers"],
          },
          {
            title: "Help",
            links: ["Track Your Order", "FAQs", "Returns", "Contact Support"],
          },
          {
            title: "Company",
            links: ["About Us", "Careers", "Privacy Policy", "Terms"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-forest">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-2 border-t border-border px-6 py-4 text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} VitaHealth. All rights reserved.</p>
        <p className="font-[family-name:var(--font-caveat)] text-base text-forest">
          A healthier, happier you ♡
        </p>
      </div>
    </footer>
  );
}
