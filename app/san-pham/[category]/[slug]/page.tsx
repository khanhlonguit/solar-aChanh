import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getProductsByCategory, getProductBySlug, products } from "@/data/products";
import { ChevronRight, Phone, CheckCircle2, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Tài Chánh Solar`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const cat = getCategoryBySlug(category);
  const relatedProducts = getProductsByCategory(category)
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

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
            <Link href={`/san-pham/${category}`} className="hover:text-solar-orange transition-colors">
              {cat?.name ?? category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium line-clamp-1">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Back link */}
        <Link
          href={`/san-pham/${category}`}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-solar-orange transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Trở về danh mục
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-square shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-solar-orange text-white font-bold px-3 py-1.5 rounded-full">
                MỚI
              </span>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-sm font-semibold text-solar-orange uppercase tracking-wider">
                {product.brand}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 mb-4">Model: <span className="font-mono font-medium text-gray-700">{product.model}</span></p>
            {product.power && (
              <div className="inline-flex items-center gap-2 bg-solar-orange/10 text-solar-orange font-bold px-4 py-2 rounded-full text-sm mb-6">
                ⚡ Công suất: {product.power}
              </div>
            )}
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            {/* Specs table */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Thông Số Kỹ Thuật</h2>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 font-medium text-gray-600 w-1/2 border-b border-gray-100">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-gray-900 font-semibold border-b border-gray-100">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0969578787"
                className="flex items-center gap-2 bg-solar-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors text-base shadow-lg shadow-orange-200"
              >
                <Phone className="w-5 h-5" />
                Gọi Báo Giá: 0969 578 787
              </a>
              <a
                href="https://zalo.me/0969578787"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-600 transition-colors text-base"
              >
                Zalo Tư Vấn
              </a>
            </div>

            {/* Guarantees */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "Hàng chính hãng 100%",
                "Bảo hành theo nhà sản xuất",
                "Hỗ trợ kỹ thuật 24/7",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Sản Phẩm Liên Quan</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/san-pham/${p.categorySlug}/${p.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-solar-orange/30 transition-all overflow-hidden"
                >
                  <div className="relative h-36 bg-gray-50">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-solar-orange font-semibold mb-1">{p.brand}</p>
                    <h3 className="text-xs font-bold text-gray-900 line-clamp-2 leading-tight">{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
