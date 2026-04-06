"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCounter({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p
        className="text-5xl font-black mb-2"
        style={{
          color: "#F97316",
          fontFamily: "var(--font-plus-jakarta), sans-serif",
        }}
      >
        {count}
        {suffix}
      </p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".reveal")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, i * 150);
              });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    "Thiết bị chính hãng 100%, có đầy đủ chứng nhận",
    "Đội ngũ kỹ thuật lành nghề, được đào tạo bài bản",
    "Dịch vụ tư vấn – thiết kế – lắp đặt trọn gói",
    "Bảo hành, bảo trì định kỳ sau khi lắp đặt",
    "Giá cả cạnh tranh, chính sách đại lý hấp dẫn",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24"
      style={{ background: "#111827" }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <p
              className="reveal text-sm font-semibold tracking-widest uppercase mb-4"
              style={{
                color: "#F97316",
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.6s ease",
              }}
            >
              Giới thiệu về chúng tôi
            </p>
            <h2
              className="reveal text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.6s ease 0.1s",
              }}
            >
              Tài Chánh Solar –{" "}
              <span style={{ color: "#F97316" }}>
                Đối tác tin cậy
              </span>{" "}
              của bạn
            </h2>
            <p
              className="reveal text-gray-400 text-base leading-relaxed mb-8"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.6s ease 0.2s",
              }}
            >
              Công ty TNHH Xây Dựng Cơ Điện Tài Chánh Solar là đơn vị chuyên cung cấp
              và lắp đặt hệ thống điện năng lượng mặt trời tại Tây Ninh và các tỉnh lân cận.
              Với đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang đến giải pháp tốt nhất
              – tiết kiệm điện, bảo vệ môi trường, tối ưu chi phí cho từng khách hàng.
            </p>
            <ul
              className="reveal space-y-3 mb-10"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.6s ease 0.3s",
              }}
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#F97316" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <a
              className="reveal inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-105"
              href="/gioi-thieu"
              style={{
                background: "linear-gradient(135deg, #F97316, #EA6C0A)",
                boxShadow: "0 6px 20px rgba(249,115,22,0.35)",
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.6s ease 0.4s",
              }}
            >
              Tìm hiểu thêm →
            </a>
          </div>

          {/* Right: image + stat counters */}
          <div className="space-y-8">
            <div
              className="reveal rounded-3xl overflow-hidden"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.7s ease 0.2s",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80"
                alt="Hệ thống điện mặt trời"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Stats grid */}
            <div
              className="reveal grid grid-cols-2 gap-5"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.7s ease 0.35s",
              }}
            >
              {[
                { value: 500, label: "Công trình đã thực hiện", suffix: "+" },
                { value: 5, label: "Năm kinh nghiệm", suffix: "+" },
                { value: 10, label: "Thương hiệu đối tác", suffix: "+" },
                { value: 100, label: "Khách hàng hài lòng", suffix: "%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl"
                  style={{
                    background: "rgba(249,115,22,0.08)",
                    border: "1px solid rgba(249,115,22,0.2)",
                  }}
                >
                  <StatCounter
                    value={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
