import Link from "next/link";
import Image from "next/image";
import { news } from "@/data/news";
import { ChevronRight, Calendar, Tag } from "lucide-react";

export const metadata = {
  title: "Tin Tức | Tài Chánh Solar",
  description:
    "Cập nhật tin tức mới nhất về điện năng lượng mặt trời, inverter, tấm pin, pin lưu trữ và các giải pháp năng lượng sạch.",
};

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-custom py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-solar-orange transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium">Tin tức</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="bg-solar-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tin Tức & <span className="text-solar-orange">Kiến Thức</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Cập nhật thông tin mới nhất về công nghệ điện mặt trời, sản phẩm và dự án thi công.
          </p>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Featured Article */}
        {featured && (
          <div className="mb-12">
            <Link
              href={`/tin-tuc/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-solar-orange/10 text-solar-orange text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {featured.date}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-solar-orange transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed line-clamp-3">{featured.excerpt}</p>
                <div className="mt-6 text-solar-orange font-semibold flex items-center gap-1">
                  Đọc thêm <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Rest Articles */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link
                key={article.id}
                href={`/tin-tuc/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-solar-orange/20 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-solar-orange/10 text-solar-orange text-xs font-bold px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-solar-orange transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 text-solar-orange text-sm font-semibold flex items-center gap-1">
                    Đọc thêm <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
