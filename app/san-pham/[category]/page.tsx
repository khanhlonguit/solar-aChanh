import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ChevronRight, Phone } from "lucide-react";

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ brand?: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.name} | Tài Chánh Solar`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { brand: activeBrand } = await searchParams;

  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const allProducts = getProductsByCategory(category);
  const filteredProducts = activeBrand
    ? allProducts.filter((p) => p.brand.toLowerCase().replace(/\s+/g, "-") === activeBrand)
    : allProducts;

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-custom py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link href="/" className="hover:text-solar-orange transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/san-pham" className="hover:text-solar-orange transition-colors">Sản phẩm</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium">{cat.name}</span>
          </div>
        </div>
      </div>

      {/* Category Hero */}
      <section className="relative h-56 md:h-72">
        <Image src={cat.image} alt={cat.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-solar-dark/90 to-solar-dark/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="text-4xl mb-2">{cat.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{cat.name}</h1>
            <p className="text-gray-300 max-w-xl">{cat.description}</p>
          </div>
        </div>
      </section>

      <div className="container-custom py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar: Brand Filter */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="bg-gray-50 rounded-2xl p-5 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Thương Hiệu</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/san-pham/${category}`}
                    className={`block text-sm px-3 py-2 rounded-lg transition-colors ${
                      !activeBrand
                        ? "bg-solar-orange text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Tất cả ({allProducts.length})
                  </Link>
                </li>
                {cat.brands.map((brand) => {
                  const brandSlug = brand.name.toLowerCase().replace(/\s+/g, "-");
                  const count = allProducts.filter(
                    (p) => p.brand.toLowerCase().replace(/\s+/g, "-") === brandSlug
                  ).length;
                  return (
                    <li key={brand.slug}>
                      <Link
                        href={`/san-pham/${category}?brand=${brandSlug}`}
                        className={`block text-sm px-3 py-2 rounded-lg transition-colors ${
                          activeBrand === brandSlug
                            ? "bg-solar-orange text-white font-semibold"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {brand.name} {count > 0 && `(${count})`}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Cần tư vấn?</p>
                <a
                  href="tel:0969578787"
                  className="flex items-center gap-2 bg-solar-orange text-white text-sm font-bold px-4 py-3 rounded-xl hover:bg-orange-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0969 578 787
                </a>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 text-sm">
                Tìm thấy <span className="font-bold text-gray-900">{filteredProducts.length}</span> sản phẩm
                {activeBrand && ` thương hiệu "${activeBrand.replace(/-/g, " ")}"`}
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-5xl mb-4">📦</p>
                <p className="text-lg font-medium">Không có sản phẩm nào</p>
                <Link href={`/san-pham/${category}`} className="mt-4 inline-block text-solar-orange hover:underline">
                  Xem tất cả sản phẩm
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/san-pham/${category}/${product.slug}`}
                    className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-solar-orange/30 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48 bg-gray-50">
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
                        {product.brand} · {product.model}
                      </p>
                      <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-bold text-solar-orange">Liên hệ báo giá</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-solar-orange group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
