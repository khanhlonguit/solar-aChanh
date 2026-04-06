"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".cat-card")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, i * 100);
              });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#F97316" }}
          >
            Danh mục sản phẩm
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black text-solar-dark leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Thiết bị{" "}
            <span style={{ color: "#F97316" }}>điện mặt trời</span>
            <br />
            đa dạng, chính hãng
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Từ tấm pin đến inverter, pin lưu trữ và phụ kiện – tất cả đều có đủ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/san-pham/${cat.slug}`}
              className="cat-card group relative rounded-3xl overflow-hidden block"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 30%, rgba(13,17,23,0.85) 100%)",
                  }}
                />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl mb-2 block">{cat.icon}</span>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-gray-300 text-xs mt-1 line-clamp-1">
                      {cat.brands.length} thương hiệu
                    </p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:translate-x-1"
                    style={{ background: "#F97316" }}
                  >
                    →
                  </div>
                </div>
              </div>

              {/* Hover glow border */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: "2px solid rgba(249,115,22,0.5)" }}
              />
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/san-pham"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-solar-dark font-semibold border-2 border-solar-orange hover:bg-solar-orange hover:text-white transition-all"
          >
            Xem tất cả sản phẩm →
          </Link>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .cat-card { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
