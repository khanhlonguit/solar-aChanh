import Link from "next/link";
import { Phone, Mail, MapPin, Share2, Play } from "lucide-react";
import { categories } from "@/data/categories";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-auto"
      style={{ background: "#0D1117", borderTop: "1px solid rgba(249,115,22,0.15)" }}
    >
      {/* CTA Strip */}
      <div
        className="py-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(250,204,21,0.08) 100%)",
          borderBottom: "1px solid rgba(249,115,22,0.15)",
        }}
      >
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold">
              Sẵn sàng lắp điện mặt trời?
            </h3>
            <p className="text-gray-400 mt-1">
              Liên hệ ngay để được tư vấn miễn phí và báo giá tốt nhất
            </p>
          </div>
          <a
            href="tel:0969578787"
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #F97316, #FACC15)",
              boxShadow: "0 8px 30px rgba(249,115,22,0.5)",
            }}
          >
            <Phone size={22} />
            0969.578.787
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #F97316, #FACC15)" }}
            >
              <span className="text-white font-black text-xl">TC</span>
            </div>
            <div>
              <p className="text-white font-bold">Tài Chánh Solar</p>
              <p className="text-xs text-gray-400">Năng Lượng Mặt Trời</p>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Công ty TNHH Xây Dựng Cơ Điện Tài Chánh Solar – chuyên cung cấp thiết bị
            điện năng lượng mặt trời chất lượng cao tại Tây Ninh và các tỉnh lân cận.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
              aria-label="Facebook"
            >
              <Share2 size={17} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
              aria-label="Youtube"
            >
              <Play size={17} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold mb-5">Sản Phẩm</h4>
          <ul className="space-y-2.5">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/san-pham/${cat.slug}`}
                  className="text-gray-400 hover:text-solar-orange text-sm transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-5">Hỗ Trợ Khách Hàng</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Tư vấn sản phẩm", href: "/lien-he" },
              { label: "Hướng dẫn lắp đặt", href: "/tin-tuc" },
              { label: "Hỗ trợ bảo hành", href: "/lien-he" },
              { label: "Hỗ trợ đại lý", href: "/lien-he" },
              { label: "Tin tức NLMT", href: "/tin-tuc" },
              { label: "Giới thiệu công ty", href: "/gioi-thieu" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-solar-orange text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-5">Thông Tin Liên Hệ</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin size={16} className="flex-shrink-0 mt-0.5 text-solar-orange" />
              544 ấp Phước Tân 2, xã Dương Minh Châu, tỉnh Tây Ninh
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Phone size={16} className="flex-shrink-0 text-solar-orange" />
              <a
                href="tel:0969578787"
                className="text-gray-400 hover:text-white transition-colors"
              >
                0969.578.787
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Mail size={16} className="flex-shrink-0 text-solar-orange" />
              <a
                href="mailto:taichanh.solar@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                taichanh.solar@gmail.com
              </a>
            </li>
          </ul>
          <div
            className="mt-5 p-3 rounded-xl text-xs text-gray-500"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <p>MST: 3901370900</p>
            <p className="mt-1">Đại diện: Nguyễn Thị Thu Hiền</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            © {year} Công Ty TNHH Xây Dựng Cơ Điện Tài Chánh Solar. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Thiết kế bởi Tài Chánh Solar team
          </p>
        </div>
      </div>
    </footer>
  );
}
