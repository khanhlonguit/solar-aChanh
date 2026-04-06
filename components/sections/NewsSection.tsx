"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { getLatestNews } from "@/data/news";

export default function NewsSection() {
  const articles = getLatestNews(3);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#F97316" }}
            >
              Tin tức mới nhất
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-solar-dark"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Cập nhật{" "}
              <span style={{ color: "#F97316" }}>công nghệ</span>
            </h2>
          </div>
          <Link
            href="/tin-tuc"
            className="text-sm font-semibold flex-shrink-0 transition-colors"
            style={{ color: "#F97316" }}
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((article, i) => (
            <Link
              key={article.id}
              href={`/tin-tuc/${article.slug}`}
              className="group rounded-2xl overflow-hidden block"
              style={{
                border: "1px solid #E5E7EB",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <span
                  className="inline-block px-2.5 py-1 text-xs font-bold rounded-lg mb-3 text-white"
                  style={{ background: "#F97316" }}
                >
                  {article.category}
                </span>
                <h3 className="text-solar-dark font-bold text-base leading-snug mb-3 line-clamp-2 group-hover:text-solar-orange transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar size={13} />
                  {article.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
