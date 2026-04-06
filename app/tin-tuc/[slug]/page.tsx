import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { news, getNewsBySlug } from "@/data/news";
import { ChevronRight, Calendar, Tag, ArrowLeft, Phone } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Tài Chánh Solar`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const relatedArticles = news.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-custom py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link href="/" className="hover:text-solar-orange transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tin-tuc" className="hover:text-solar-orange transition-colors">Tin tức</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium line-clamp-1">{article.title}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-10">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-solar-orange transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Trở về danh sách
          </Link>

          {/* Article header */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-solar-orange/10 text-solar-orange text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                {article.category}
              </span>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {article.title}
            </h1>
            <p className="text-gray-500 mt-4 text-lg leading-relaxed">{article.excerpt}</p>
          </div>

          {/* Featured image */}
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-96 mb-10 shadow-md">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>

          {/* Article content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-solar-orange prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA box */}
          <div className="mt-12 bg-solar-orange/5 border border-solar-orange/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Cần Tư Vấn Thêm?
            </h3>
            <p className="text-gray-600 mb-6">
              Liên hệ ngay để được tư vấn miễn phí từ đội ngũ kỹ thuật của Tài Chánh Solar
            </p>
            <a
              href="tel:0969578787"
              className="inline-flex items-center gap-2 bg-solar-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0969 578 787
            </a>
          </div>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Bài Viết Liên Quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <Link
                  key={a.id}
                  href={`/tin-tuc/${a.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-solar-orange/20 transition-all"
                >
                  <div className="relative h-40">
                    <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-solar-orange font-bold">{a.category}</span>
                    <h3 className="text-sm font-bold text-gray-900 mt-1 line-clamp-2 group-hover:text-solar-orange transition-colors">
                      {a.title}
                    </h3>
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
