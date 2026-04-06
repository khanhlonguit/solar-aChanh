"use client";

import Link from "next/link";
import { ChevronRight, Phone, MapPin, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production: replace with actual form handler (email service, API)
    setSubmitted(true);
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-custom py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-solar-orange transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium">Liên hệ</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="bg-solar-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Liên Hệ <span className="text-solar-orange">Với Chúng Tôi</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Đội ngũ kỹ thuật và tư vấn của Tài Chánh Solar luôn sẵn sàng hỗ trợ bạn mọi lúc.
          </p>
        </div>
      </section>

      <div className="container-custom py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Thông Tin Liên Hệ</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-solar-orange" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Địa chỉ</p>
                  <p className="text-gray-600 leading-relaxed">
                    Tỉnh Tây Ninh, Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-solar-orange" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Điện thoại</p>
                  <a href="tel:0969578787" className="text-solar-orange font-bold text-lg hover:underline">
                    0969 578 787
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Hỗ trợ 24/7 kể cả ngày lễ</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-solar-orange" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Giờ làm việc</p>
                  <p className="text-gray-600">Thứ 2 – Thứ 7: 7:30 – 17:30</p>
                  <p className="text-gray-600">Chủ Nhật: 8:00 – 12:00</p>
                </div>
              </div>
            </div>

            {/* Company Legal Info */}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-4">Thông Tin Công Ty</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-medium text-gray-800">Tên:</span> CÔNG TY TNHH XÂY DỰNG CƠ ĐIỆN TÀI CHÁNH SOLAR</li>
                <li><span className="font-medium text-gray-800">Mã số thuế:</span> 3901370900</li>
                <li><span className="font-medium text-gray-800">Giám đốc:</span> Nguyễn Thị Thu Hiền</li>
                <li><span className="font-medium text-gray-800">Địa phương:</span> Tây Ninh</li>
              </ul>
            </div>

            {/* Map Embed */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-md h-64">
              <iframe
                title="Google Maps Tây Ninh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125371.04066040698!2d106.03244!3d11.31009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310afc5d3a9b9e95%3A0xef1bd94c04f2e13a!2sTay%20Ninh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Gửi Yêu Cầu Tư Vấn</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gửi Thành Công!</h3>
                <p className="text-gray-600 mb-6">
                  Chúng tôi đã nhận được yêu cầu của bạn và sẽ liên hệ lại trong vòng 30 phút.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", message: "" }); }}
                  className="text-solar-orange font-semibold hover:underline"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-solar-orange focus:ring-2 focus:ring-solar-orange/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    pattern="[0-9]{9,11}"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-solar-orange focus:ring-2 focus:ring-solar-orange/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nội dung yêu cầu
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Mô tả nhu cầu lắp đặt điện mặt trời, diện tích, khu vực..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-solar-orange focus:ring-2 focus:ring-solar-orange/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-solar-orange text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200 text-base"
                >
                  <Send className="w-5 h-5" />
                  Gửi Yêu Cầu Tư Vấn
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi sẽ liên hệ trong vòng 30 phút.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
