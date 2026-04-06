"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const products = getFeaturedProducts();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".prod-card")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, i * 100);
              });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24"
      style={{ background: "#0D1117" }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#F97316" }}
            >
              Sản phẩm nổi bật
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Thiết bị{" "}
              <span style={{ color: "#F97316" }}>chất lượng cao</span>
            </h2>
          </div>
          <Link
            href="/san-pham"
            className="text-sm font-semibold flex-shrink-0 transition-colors"
            style={{ color: "#F97316" }}
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.slice(0, 8).map((product) => (
            <Link
              key={product.id}
              href={`/san-pham/${product.categorySlug}/${product.slug}`}
              className="prod-card group rounded-2xl overflow-hidden block transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.06)",
                opacity: 0,
                transform: "translateY(40px)",
                transition:
                  "opacity 0.6s ease, transform 0.3s ease",
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <span
                    className="absolute top-3 left-3 px-2 py-1 text-xs font-bold text-white rounded-lg"
                    style={{ background: "#F97316" }}
                  >
                    Mới
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2 mb-3 group-hover:text-solar-orange transition-colors">
                  {product.name}
                </h3>
                {product.power && (
                  <span
                    className="inline-block px-2.5 py-1 text-xs rounded-lg font-medium mb-3"
                    style={{
                      background: "rgba(249,115,22,0.15)",
                      color: "#F97316",
                    }}
                  >
                    {product.power}
                  </span>
                )}
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 cursor-pointer"
                  style={{ background: "rgba(249,115,22,0.2)", color: "#F97316" }}
                  onClick={(e) => { e.preventDefault(); window.location.href = "tel:0969578787"; }}
                >
                  <Phone size={14} />
                  Liên hệ báo giá
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .prod-card { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
