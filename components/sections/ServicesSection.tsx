"use client";

import { useEffect, useRef } from "react";
import { Wrench, Settings, Package, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Cung Cấp Thiết Bị",
    description:
      "Phân phối thiết bị điện mặt trời chính hãng: tấm pin, inverter, pin lưu trữ, phụ kiện từ các thương hiệu hàng đầu thế giới.",
    features: ["Hàng chính hãng có CO CQ", "Giá cạnh tranh, giao nhanh", "Hỗ trợ đại lý toàn quốc"],
    color: "#F97316",
  },
  {
    icon: Wrench,
    title: "Lắp Đặt Hệ Thống",
    description:
      "Thiết kế và lắp đặt hệ thống điện mặt trời trọn gói cho hộ gia đình, doanh nghiệp, trang trại và khu công nghiệp.",
    features: ["Khảo sát tư vấn miễn phí", "Thi công đúng tiến độ", "Bàn giao vận hành chuyên nghiệp"],
    color: "#FACC15",
  },
  {
    icon: Settings,
    title: "Bảo Trì Sửa Chữa",
    description:
      "Dịch vụ bảo trì định kỳ, kiểm tra hiệu suất, sửa chữa và nâng cấp hệ thống hiện có với đội ngũ kỹ thuật chuyên nghiệp.",
    features: ["Bảo trì định kỳ 6 tháng/lần", "Sửa chữa inverter, pin, tấm pin", "Hỗ trợ 24/7 qua điện thoại"],
    color: "#34D399",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".svc-card")
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

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#F97316" }}
          >
            Dịch vụ của chúng tôi
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black text-solar-dark"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Giải pháp{" "}
            <span style={{ color: "#F97316" }}>toàn diện</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Từ tư vấn, cung cấp thiết bị đến lắp đặt và bảo trì – Tài Chánh Solar đồng hành cùng bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="svc-card p-8 rounded-3xl"
                style={{
                  background: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: "all 0.6s ease",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${svc.color}20` }}
                >
                  <Icon size={28} style={{ color: svc.color }} />
                </div>
                <h3
                  className="font-bold text-xl text-solar-dark mb-4"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: svc.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/lien-he"
                  className="flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: svc.color }}
                >
                  Tìm hiểu thêm <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .svc-card { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
