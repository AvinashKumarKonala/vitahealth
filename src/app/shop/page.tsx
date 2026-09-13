"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Pill,
  Sparkles,
  Scissors,
  Heart,
  Dumbbell,
  Apple,
  Leaf,
  Home,
  Baby,
  Tag,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { ShopFooter } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { products, brands, productTabs } from "@/lib/data/products";
import { shopCategories, filterCategories } from "@/lib/data/doctors";
import { cn, formatINR } from "@/lib/utils";

const catIcons = {
  pill: Pill,
  sparkles: Sparkles,
  scissors: Scissors,
  heart: Heart,
  dumbbell: Dumbbell,
  apple: Apple,
  leaf: Leaf,
  home: Home,
  baby: Baby,
  tag: Tag,
};

export default function ShopPage() {
  const [tab, setTab] = useState("All");
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [priceMax, setPriceMax] = useState(5000);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (tab !== "All" && !p.tags.includes(tab)) return false;
      if (selectedCats.length && !selectedCats.includes(p.category))
        return false;
      if (selectedBrands.length && !selectedBrands.includes(p.brand))
        return false;
      if (p.rating < minRating) return false;
      if (p.price > priceMax) return false;
      return true;
    });
  }, [tab, selectedCats, selectedBrands, minRating, priceMax]);

  function toggle(list: string[], value: string, setter: (v: string[]) => void) {
    setter(
      list.includes(value) ? list.filter((x) => x !== value) : [...list, value]
    );
  }

  const visibleBrands = showAllBrands ? brands : brands.slice(0, 5);

  return (
    <AppShell>
      <div className="px-4 py-6 lg:px-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl leaf-pattern">
          <div className="grid items-center gap-6 p-6 md:grid-cols-2 md:p-10 lg:p-12">
            <div className="animate-fade-up">
              <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
                Wellness for a brighter you
              </h1>
              <p className="mt-3 max-w-md text-muted">
                Trusted products. Real results. A healthier, happier you — all
                in one place.
              </p>
              <Button size="lg" className="mt-6">
                Shop Now <ArrowRight size={18} />
              </Button>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-forest">
                {[
                  "100% Genuine Products",
                  "Fast & Reliable Delivery",
                  "Expert Curated Recommendations",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md animate-fade-up delay-200 md:aspect-[5/4]">
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=700&fit=crop"
                alt="Wellness products among greenery"
                fill
                className="rounded-2xl object-cover shadow-lg"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <p className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 px-4 py-3 font-[family-name:var(--font-caveat)] text-xl text-forest shadow backdrop-blur">
                Small steps, Big changes, Better you ♡
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">Shop by Category</h2>
            <button
              type="button"
              className="text-sm font-medium text-forest hover:underline"
            >
              View All Categories →
            </button>
          </div>
          <div className="mt-4 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {shopCategories.map((cat) => {
              const Icon = catIcons[cat.icon as keyof typeof catIcons];
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() =>
                    toggle(selectedCats, cat.name, setSelectedCats)
                  }
                  className="flex w-24 shrink-0 flex-col items-center gap-2"
                >
                  <span
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-full bg-white text-forest shadow-sm ring-1 ring-border transition",
                      selectedCats.includes(cat.name) &&
                        "bg-mint ring-2 ring-forest"
                    )}
                  >
                    <Icon size={22} />
                  </span>
                  <span className="text-center text-[11px] font-medium leading-tight text-muted">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="mt-10 grid gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="h-fit rounded-2xl border border-border bg-white p-4">
            <h3 className="text-sm font-semibold text-ink">Filters</h3>

            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Categories
              </p>
              <ul className="mt-2 space-y-2">
                {filterCategories.map((c) => (
                  <li key={c}>
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-ink">
                      <input
                        type="checkbox"
                        checked={selectedCats.includes(c)}
                        onChange={() => toggle(selectedCats, c, setSelectedCats)}
                        className="rounded border-border text-forest accent-forest"
                      />
                      {c}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Price Range
              </p>
              <input
                type="range"
                min={0}
                max={5000}
                step={100}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="mt-3 w-full accent-forest"
              />
              <div className="mt-1 flex justify-between text-xs text-muted">
                <span>{formatINR(0)}</span>
                <span>{formatINR(priceMax)}</span>
              </div>
            </div>

            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Brand
              </p>
              <ul className="mt-2 space-y-2">
                {visibleBrands.map((b) => (
                  <li key={b}>
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-ink">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(b)}
                        onChange={() =>
                          toggle(selectedBrands, b, setSelectedBrands)
                        }
                        className="rounded border-border accent-forest"
                      />
                      {b}
                    </label>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setShowAllBrands((v) => !v)}
                className="mt-2 text-xs font-medium text-forest"
              >
                {showAllBrands ? "Show Less" : "Show More"}
              </button>
            </div>

            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Rating
              </p>
              <ul className="mt-2 space-y-2">
                {[4, 3, 2].map((r) => (
                  <li key={r}>
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-ink">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === r}
                        onChange={() => setMinRating(r)}
                        className="accent-forest"
                      />
                      {r}★ & above
                    </label>
                  </li>
                ))}
                <li>
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-ink">
                    <input
                      type="radio"
                      name="rating"
                      checked={minRating === 0}
                      onChange={() => setMinRating(0)}
                      className="accent-forest"
                    />
                    All ratings
                  </label>
                </li>
              </ul>
            </div>
          </aside>

          <div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {productTabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition",
                    tab === t
                      ? "bg-forest text-white"
                      : "bg-white text-muted ring-1 ring-border hover:bg-mint hover:text-forest"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>

            <p className="mt-3 text-sm text-muted">
              Showing {filtered.length} products
            </p>

            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-10 rounded-2xl border border-dashed border-border bg-white p-10 text-center">
                <p className="font-medium text-ink">No products match</p>
                <p className="mt-1 text-sm text-muted">
                  Try adjusting filters or tabs.
                </p>
                <Button
                  className="mt-4"
                  variant="soft"
                  onClick={() => {
                    setTab("All");
                    setSelectedCats([]);
                    setSelectedBrands([]);
                    setMinRating(0);
                    setPriceMax(5000);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}

            {/* Promo banners */}
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-forest to-forest-soft p-6 text-white">
                <div>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold">
                    Flat 20% Off on Wellness Essentials
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    Stock up on vitamins, proteins & daily care favourites.
                  </p>
                </div>
                <Link href="#top" className="mt-6">
                  <Button variant="white" size="sm">
                    Shop the Sale <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=500&fit=crop"
                  alt="Skincare routine"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="relative flex min-h-[180px] flex-col justify-end bg-gradient-to-t from-ink/70 to-transparent p-6 text-white">
                  <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold">
                    Skincare for Healthier Skin
                  </h3>
                  <Button variant="white" size="sm" className="mt-4 w-fit">
                    Explore Skincare <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ShopFooter />
    </AppShell>
  );
}
