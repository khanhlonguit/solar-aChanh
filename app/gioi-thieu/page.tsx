import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, Shield, Award, Users, Zap } from "lucide-react";

export const metadata = {
  title: "Giới Thiệu | Tài Chánh Solar",
  description:
    "Công ty TNHH Xây Dựng Cơ Điện Tài Chánh Solar – Đơn vị cung cấp và lắp đặt hệ thống điện năng lượng mặt trời uy tín tại Tây Ninh và miền Nam.",
};

const values = [
  {
    icon: Shield,
    title: "Chất Lượng Hàng Đầu",
    desc: "Chỉ phân phối sản phẩm chính hãng từ các thương hiệu toàn cầu. Kiểm tra kỹ lưỡng trước khi giao hàng.",
  },
  {
    icon: Award,
    title: "Uy Tín Được Kiểm Chứng",
    desc: "Hơn 500 công trình đã hoàn thành, khách hàng trên khắp miền Nam Việt Nam tin tưởng.",
  },
  {
    icon: Users,
    title: "Đội Ngũ Chuyên Nghiệp",
    desc: "Kỹ sư và kỹ thuật viên giỏi, được đào tạo chuyên sâu, hỗ trợ khách hàng 24/7.",
  },
  {
    icon: Zap,
    title: "Giải Pháp Tối Ưu",
    desc: "Thiết kế hệ thống tùy theo nhu cầu, tối ưu chi phí đầu tư và hiệu suất khai thác năng lượng.",
  },
];

const milestones = [
  { year: "2018", event: "Thành lập Công ty TNHH XD CĐ Tài Chánh Solar" },
  { year: "2019", event: "Hoàn thành 50 công trình đầu tiên tại Tây Ninh" },
  { year: "2021", event: "Mở rộng dịch vụ ra các tỉnh miền Nam" },
  { year: "2023", event: "Đạt mốc 300+ công trình hoàn thành" },
  { year: "2024", event: "Trở thành đại lý chính thức Deye, Aiko, JA Solar" },
  { year: "2025", event: "Vượt mốc 500 công trình – phục vụ hàng nghìn hộ dân" },
];

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-custom py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-solar-orange transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium">Giới thiệu</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1400&q=80"
          alt="Solar farm"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solar-dark/80 to-solar-dark/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Giới Thiệu <span className="text-solar-orange">Tài Chánh Solar</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-xl">
              Đơn vị tiên phong cung cấp giải pháp điện mặt trời toàn diện tại Tây Ninh và miền Nam Việt Nam
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-solar-orange py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { value: "500+", label: "Công trình" },
              { value: "5+", label: "Năm kinh nghiệm" },
              { value: "10+", label: "Thương hiệu" },
              { value: "100%", label: "Hàng chính hãng" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-orange-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Về Tài Chánh Solar
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Công ty TNHH Xây Dựng Cơ Điện Tài Chánh Solar</strong> được
                  thành lập với sứ mệnh mang lại giải pháp năng lượng sạch, bền vững cho mọi gia đình và doanh
                  nghiệp tại Việt Nam.
                </p>
                <p>
                  Chúng tôi chuyên tư vấn, cung cấp thiết bị và thi công lắp đặt hệ thống điện năng lượng mặt trời
                  (Solar PV) cho nhà ở, công nghiệp, nông nghiệp và bơm nước tưới tiêu.
                </p>
                <p>
                  Với hơn 5 năm kinh nghiệm, đội ngũ kỹ sư và kỹ thuật viên dày dạn kinh nghiệm, chúng tôi đã hoàn
                  thành hơn 500 công trình lớn nhỏ, mang lại hiệu quả kinh tế thực sự cho khách hàng.
                </p>
              </div>

              <div className="mt-8 p-5 bg-gray-50 rounded-xl text-sm space-y-2">
                <p><span className="font-semibold text-gray-800">Tên công ty:</span> CÔNG TY TNHH XÂY DỰNG CƠ ĐIỆN TÀI CHÁNH SOLAR</p>
                <p><span className="font-semibold text-gray-800">Mã số thuế:</span> 3901370900</p>
                <p><span className="font-semibold text-gray-800">Giám đốc:</span> Nguyễn Thị Thu Hiền</p>
                <p><span className="font-semibold text-gray-800">Trụ sở:</span> Tây Ninh, Việt Nam</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-80 md:h-[450px] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="Solar installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Giá Trị Cốt Lõi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-solar-orange" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Hành Trình Phát Triển</h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative pl-8 before:absolute before:left-3.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200">
              {milestones.map((m, i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-8 w-7 h-7 rounded-full bg-solar-orange flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <span className="text-solar-orange font-black text-sm">{m.year}</span>
                    <p className="text-gray-700 text-sm mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-solar-dark py-12">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn Sàng Bắt Đầu Tiết Kiệm Điện?
          </h2>
          <p className="text-gray-400 mb-8">Liên hệ ngay để được khảo sát và tư vấn miễn phí</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0969578787"
              className="flex items-center gap-2 bg-solar-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors text-base"
            >
              <Phone className="w-5 h-5" />
              0969 578 787
            </a>
            <Link
              href="/lien-he"
              className="flex items-center gap-2 border border-gray-600 text-gray-200 font-bold px-8 py-4 rounded-full hover:border-solar-orange hover:text-solar-orange transition-colors text-base"
            >
              Gửi yêu cầu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
