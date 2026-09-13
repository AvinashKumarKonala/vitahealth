"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { formatINR, formatReviews, cn } from "@/lib/utils";
import { Button } from "./Button";

export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const wished = wishlist.includes(product.id);

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-forest/8",
        compact ? "p-3" : "p-4"
      )}
    >
      {product.badge && (
        <span
          className={cn(
            "absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold",
            product.badge.includes("OFF")
              ? "bg-danger text-white"
              : product.badge === "New"
                ? "bg-sage text-forest-deep"
                : "bg-forest text-white"
          )}
        >
          {product.badge}
        </span>
      )}

      <button
        type="button"
        aria-label="Toggle wishlist"
        onClick={() => toggleWishlist(product.id)}
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-muted shadow-sm transition hover:text-danger"
      >
        <Heart
          size={16}
          className={cn(wished && "fill-danger text-danger")}
        />
      </button>

      <div
        className={cn(
          "relative mx-auto mb-3 w-full overflow-hidden rounded-xl bg-cream",
          compact ? "aspect-square" : "aspect-[4/3]"
        )}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 20vw"
        />
      </div>

      <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
        {product.brand}
      </p>
      <h3 className="mt-0.5 line-clamp-2 text-sm font-semibold text-ink">
        {product.name}
      </h3>
      <p className="mt-0.5 text-xs text-muted">{product.quantity}</p>

      <div className="mt-2 flex items-center gap-1 text-xs">
        <Star size={12} className="fill-amber-400 text-amber-400" />
        <span className="font-medium">{product.rating}</span>
        <span className="text-muted">
          ({formatReviews(product.reviews)} reviews)
        </span>
      </div>

      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-base font-bold text-forest">
          {formatINR(product.price)}
        </span>
        {product.originalPrice && (
          <span className="text-xs text-muted line-through">
            {formatINR(product.originalPrice)}
          </span>
        )}
      </div>

      <Button
        className="mt-3 w-full"
        size="sm"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </article>
  );
}
