import Link from "next/link";
import { Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl font-black text-solar-orange mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Trang Không Tìm Thấy</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Trang bạn đang tìm có thể đã bị xóa, thay đổi địa chỉ hoặc tạm thời không khả dụng.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="bg-solar-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors"
          >
            Về Trang Chủ
          </Link>
          <a
            href="tel:0969578787"
            className="flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-full hover:border-solar-orange hover:text-solar-orange transition-colors"
          >
            <Phone className="w-5 h-5" />
            Liên Hệ Hỗ Trợ
          </a>
        </div>
      </div>
    </div>
  );
}
