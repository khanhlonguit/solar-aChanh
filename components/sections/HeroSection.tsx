"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Staggered word reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const words =
              entry.target.querySelectorAll<HTMLSpanElement>(".word");
            words.forEach((word, i) => {
              setTimeout(() => {
                word.style.opacity = "1";
                word.style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (headlineRef.current) observer.observe(headlineRef.current);
    return () => observer.disconnect();
  }, []);

  const headline = "Giải Pháp Điện Mặt Trời Toàn Diện Cho Tây Ninh";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0D1117" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80"
          alt="Solar farm"
          className="w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,17,23,0.6) 0%, rgba(13,17,23,0.85) 50%, #0D1117 100%)",
          }}
        />
      </div>

      {/* Animated particles / glow */}
      <div
        className="absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 70%)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-24">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "rgba(249,115,22,0.15)",
            border: "1px solid rgba(249,115,22,0.4)",
            color: "#F97316",
            animation: "fade-in-down 0.8s ease forwards",
          }}
        >
          <span
            className="w-2 h-2 rounded-full bg-solar-orange"
            style={{ animation: "pulse 2s infinite" }}
          />
          Tây Ninh &bull; Cung cấp &amp; Lắp đặt chuyên nghiệp
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
        >
          {headline.split(" ").map((word, i) => (
            <span
              key={i}
              className="word inline-block mr-[0.25em]"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                color:
                  word === "Điện" || word === "Mặt" || word === "Trời"
                    ? "#F97316"
                    : "white",
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fade-in-up 1s ease 0.8s both" }}
        >
          Cung cấp thiết bị chính hãng – Inverter Deye, Tấm pin Aiko, Jinko,
          Pin lưu trữ Lithium. Tư vấn miễn phí, lắp đặt chuyên nghiệp.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fade-in-up 1s ease 1s both" }}
        >
          <Link
            href="/san-pham"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #F97316, #FACC15)",
              boxShadow: "0 8px 30px rgba(249,115,22,0.4)",
            }}
          >
            Xem Sản Phẩm
            <ArrowRight size={20} />
          </Link>
          <a
            href="tel:0969578787"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:bg-white/10"
            style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
          >
            <Phone size={20} />
            0969.578.787
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          style={{ animation: "fade-in-up 1s ease 1.2s both" }}
        >
          {[
            { num: "500+", label: "Công trình" },
            { num: "5+", label: "Năm kinh nghiệm" },
            { num: "10+", label: "Thương hiệu" },
            { num: "100%", label: "Chính hãng" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-black"
                style={{ color: "#F97316" }}
              >
                {stat.num}
              </p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "bounce 2s infinite" }}
        aria-hidden="true"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">
          Cuộn xuống
        </span>
        <ChevronDown size={20} className="text-gray-500" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .word { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
