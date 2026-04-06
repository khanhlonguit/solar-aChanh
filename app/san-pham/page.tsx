import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ChevronRight, Phone } from "lucide-react";

export const metadata = {
  title: "Sản Phẩm | Tài Chánh Solar",
  description:
    "Hệ thống sản phẩm điện năng lượng mặt trời: Inverter, Tấm Pin, Pin Lưu Trữ, Biến Tần Bơm, Phụ Kiện từ các thương hiệu hàng đầu thế giới.",
};

export default function ProductsPage() {
  const featuredProducts = products.filter((p) => p.isFeatured);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-custom py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-solar-orange transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium">Sản phẩm</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-solar-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Danh Mục <span className="text-solar-orange">Sản Phẩm</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Cung cấp đầy đủ thiết bị điện năng lượng mặt trời chính hãng, bảo hành toàn quốc, hỗ trợ kỹ thuật 24/7.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Danh Mục Sản Phẩm</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/san-pham/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <h3 className="text-lg font-bold leading-tight">{cat.name}</h3>
                  <p className="text-sm text-gray-300 mt-1 line-clamp-2">{cat.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-solar-orange text-sm font-medium">
                    Xem sản phẩm <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Sản Phẩm Nổi Bật</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <Link
                key={product.id}
                href={`/san-pham/${product.categorySlug}/${product.slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-44 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-solar-orange text-white text-xs font-bold px-2 py-1 rounded-full">
                      MỚI
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-solar-orange font-semibold uppercase tracking-wide mb-1">
                    {product.brand}
                  </p>
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  {product.power && (
                    <p className="text-xs text-gray-500 mt-1">{product.power}</p>
                  )}
                  <div className="mt-3 text-xs text-solar-orange font-semibold">
                    Liên hệ báo giá →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-solar-orange py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Cần Tư Vấn Chọn Sản Phẩm Phù Hợp?
          </h2>
          <p className="text-orange-100 mb-6">Đội ngũ kỹ thuật của chúng tôi sẵn sàng hỗ trợ bạn 24/7</p>
          <a
            href="tel:0969578787"
            className="inline-flex items-center gap-2 bg-white text-solar-orange font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            <Phone className="w-5 h-5" />
            0969 578 787
          </a>
        </div>
      </section>
    </div>
  );
}
