import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ChevronRight, MapPin, Zap, Phone } from "lucide-react";

export const metadata = {
  title: "Công Trình | Tài Chánh Solar",
  description:
    "Các công trình điện năng lượng mặt trời đã hoàn thành bởi Tài Chánh Solar tại Tây Ninh và miền Nam Việt Nam.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-custom py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-solar-orange transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium">Công trình</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="bg-solar-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Các Công Trình <span className="text-solar-orange">Tiêu Biểu</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Hơn 500 hệ thống điện mặt trời đã được Tài Chánh Solar thiết kế và lắp đặt thành công trên toàn miền Nam.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-solar-orange/5 border-b border-solar-orange/10 py-8">
        <div className="container-custom">
          <div className="flex flex-wrap gap-8 text-center justify-center">
            {[
              { value: "500+", label: "Công trình hoàn thành" },
              { value: "8 – 100kW", label: "Công suất lắp đặt" },
              { value: "8 tỉnh", label: "Khu vực phủ sóng" },
              { value: "5 năm", label: "Bảo hành thi công" },
            ].map((s) => (
              <div key={s.label} className="min-w-32">
                <div className="text-2xl font-black text-solar-orange">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-solar-orange/20"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Badges overlaid */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-solar-orange text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {project.power}
                    </span>
                    <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 text-sm text-gray-400 mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-solar-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-14">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Muốn Trở Thành Công Trình Tiếp Theo?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Liên hệ ngay để được khảo sát thực tế, thiết kế và báo giá miễn phí tận nơi.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0969578787"
              className="flex items-center gap-2 bg-solar-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
            >
              <Phone className="w-5 h-5" />
              0969 578 787
            </a>
            <Link
              href="/lien-he"
              className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 font-bold px-8 py-4 rounded-full hover:border-solar-orange hover:text-solar-orange transition-colors"
            >
              Gửi yêu cầu tư vấn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
