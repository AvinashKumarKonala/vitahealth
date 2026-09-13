"use client";

import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/utils";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    totalPrice,
    totalItems,
    clearCart,
  } = useCart();

  const shipping = totalPrice >= 499 || totalPrice === 0 ? 0 : 49;
  const grandTotal = totalPrice + shipping;

  return (
    <AppShell>
      <div className="px-4 py-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink">
          Your Cart
        </h1>
        <p className="mt-1 text-muted">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </p>

        {items.length === 0 ? (
          <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-border bg-white px-6 py-16 text-center">
            <ShoppingBag size={40} className="text-muted" />
            <p className="mt-4 font-medium text-ink">Your cart is empty</p>
            <p className="mt-1 text-sm text-muted">
              Discover wellness essentials in our store.
            </p>
            <Link href="/shop" className="mt-6">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="space-y-3">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 rounded-2xl border border-border bg-white p-4"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate font-semibold text-ink">
                      {product.name}
                    </h2>
                    <p className="text-xs text-muted">{product.brand}</p>
                    <p className="mt-1 font-semibold text-forest">
                      {formatINR(product.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          type="button"
                          className="p-1.5 text-muted hover:text-forest"
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                          aria-label="Decrease"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          className="p-1.5 text-muted hover:text-forest"
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          aria-label="Increase"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        className="text-muted hover:text-danger"
                        aria-label="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={clearCart}
                className="text-sm text-muted hover:text-danger"
              >
                Clear cart
              </button>
            </div>

            <aside className="h-fit rounded-2xl border border-border bg-white p-5">
              <h2 className="font-semibold text-ink">Order Summary</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted">Subtotal</dt>
                  <dd className="font-medium">{formatINR(totalPrice)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Shipping</dt>
                  <dd className="font-medium">
                    {shipping === 0 ? "Free" : formatINR(shipping)}
                  </dd>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-forest">
                    Add {formatINR(499 - totalPrice)} more for free shipping
                  </p>
                )}
                <div className="flex justify-between border-t border-border pt-3 text-base">
                  <dt className="font-semibold">Total</dt>
                  <dd className="font-bold text-forest">
                    {formatINR(grandTotal)}
                  </dd>
                </div>
              </dl>
              <Button className="mt-5 w-full" size="lg">
                Proceed to Checkout
              </Button>
              <Link href="/shop">
                <Button variant="ghost" className="mt-2 w-full">
                  Continue Shopping
                </Button>
              </Link>
            </aside>
          </div>
        )}
      </div>
    </AppShell>
  );
}
