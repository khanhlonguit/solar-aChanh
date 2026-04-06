"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Zap } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".proj-item")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0) scale(1)";
                }, i * 120);
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
      style={{ background: "#111827" }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#F97316" }}
            >
              Công trình thực tế
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-white"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Dự án đã{" "}
              <span style={{ color: "#F97316" }}>hoàn thành</span>
            </h2>
          </div>
          <Link
            href="/cong-trinh"
            className="text-sm font-semibold flex-shrink-0 transition-colors"
            style={{ color: "#F97316" }}
          >
            Xem tất cả →
          </Link>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`proj-item group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                height: i === 0 ? "340px" : "260px",
                opacity: 0,
                transform: "translateY(30px) scale(0.98)",
                transition: "all 0.6s ease",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 30%, rgba(13,17,23,0.9) 100%)",
                }}
              />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="px-2.5 py-1 text-xs font-bold rounded-lg text-white"
                    style={{ background: "#F97316" }}
                  >
                    {project.type}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base">{project.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-300">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap size={11} />
                    {project.power}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .proj-item { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
