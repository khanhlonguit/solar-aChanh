"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { categories } from "@/data/categories";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setHidden(currentY > lastScrollY.current && currentY > 100);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Trang Chủ", href: "/" },
    { label: "Sản Phẩm", href: "/san-pham", hasDropdown: true },
    { label: "Công Trình", href: "/cong-trinh" },
    { label: "Tin Tức", href: "/tin-tuc" },
    { label: "Giới Thiệu", href: "/gioi-thieu" },
    { label: "Liên Hệ", href: "/lien-he" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        background: scrolled
          ? "rgba(13,17,23,0.96)"
          : "linear-gradient(180deg, rgba(13,17,23,0.9) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(249,115,22,0.15)" : "none",
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #F97316, #FACC15)" }}
            >
              <span className="text-white font-black text-lg">TC</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-base leading-tight">
                Tài Chánh Solar
              </p>
              <p className="text-xs" style={{ color: "#F97316" }}>
                Năng Lượng Mặt Trời
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setHoveredMenu(item.label)
                }
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${hoveredMenu === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Mega dropdown */}
                {item.hasDropdown && hoveredMenu === item.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] rounded-2xl p-6 grid grid-cols-2 gap-2"
                    style={{
                      background: "rgba(17,24,39,0.98)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(249,115,22,0.2)",
                      boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
                    }}
                  >
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/san-pham/${cat.slug}`}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <span className="text-2xl">{cat.icon}</span>
                        <div>
                          <p className="text-white text-sm font-semibold group-hover:text-solar-orange transition-colors">
                            {cat.name}
                          </p>
                          <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">
                            {cat.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href="/san-pham"
                      className="col-span-2 mt-2 text-center text-sm py-2 rounded-xl text-solar-orange border border-solar-orange/30 hover:bg-solar-orange/10 transition-colors"
                    >
                      Xem tất cả sản phẩm →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0969578787"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #F97316, #EA6C0A)",
                boxShadow: "0 4px 15px rgba(249,115,22,0.4)",
              }}
            >
              <Phone size={15} />
              0969.578.787
            </a>
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-4 pb-6 pt-2"
          style={{
            background: "rgba(13,17,23,0.98)",
            borderTop: "1px solid rgba(249,115,22,0.15)",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-3 text-sm font-medium text-gray-300 hover:text-white border-b border-white/5"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0969578787"
            className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold"
            style={{ background: "linear-gradient(135deg, #F97316, #EA6C0A)" }}
          >
            <Phone size={16} /> Gọi: 0969.578.787
          </a>
        </div>
      )}
    </header>
  );
}
