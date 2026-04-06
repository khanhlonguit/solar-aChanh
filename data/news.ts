export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export const news: NewsArticle[] = [
  {
    id: "1",
    title: "Tấm Pin NLMT Aiko Solar – Hiệu Suất Dẫn Đầu Thị Trường 2026",
    slug: "tam-pin-aiko-solar-hieu-suat-dan-dau-2026",
    excerpt:
      "Aiko Solar là một trong những nhà sản xuất pin mặt trời hàng đầu thế giới với công nghệ cell N-Type ABC hiện đại nhất hiện nay, hiệu suất module vượt trội từ 23.5~25%.",
    content: `
      <p>Aiko Solar là một trong những nhà sản xuất pin mặt trời hàng đầu thế giới. Họ tập trung mạnh vào nghiên cứu và phát triển (R&D), công nghệ cell N-Type ABC hiện đại nhất hiện nay.</p>
      <p>Công nghệ này mang đến hiệu suất Module vượt trội từ 23.5~25% (tùy dòng), giúp tấm pin mặt trời Aiko dẫn đầu thị trường năm 2026.</p>
      <h2>Ưu điểm nổi bật</h2>
      <ul>
        <li>Hiệu suất chuyển đổi cao nhất thị trường: 24.4% – 24.8%</li>
        <li>Công nghệ N-Type ABC không có dây kết nối mặt trước, giảm bóng che</li>
        <li>Thiết kế 2 mặt kính tăng cường độ bền và hiệu suất bifacial</li>
        <li>Bảo hành sản phẩm 25 năm, bảo hành công suất 30 năm</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    date: "13/01/2026",
    category: "Tấm Pin NLMT",
  },
  {
    id: "2",
    title: "Inverter Deye – Thương Hiệu Biến Tần Hàng Đầu Châu Á",
    slug: "inverter-deye-thuong-hieu-bien-tan-hang-dau",
    excerpt:
      "Deye là thương hiệu biến tần nổi tiếng toàn cầu với chất lượng sản phẩm ổn định, thời gian bảo hành dài và nhiều dòng sản phẩm phù hợp mọi nhu cầu.",
    content: `
      <p>Deye Inverter là hãng biến tần năng lượng nổi tiếng về chất lượng sản phẩm, thời gian bảo hành dài, có nhiều mẫu mã và chức năng phù hợp cho khách hàng lựa chọn.</p>
      <p>Từ Inverter Off-Grid cho khu vực không có điện lưới, Hybrid cho hệ thống kết hợp pin lưu trữ, đến On-Grid hòa lưới cho các công trình công nghiệp – Deye đều có giải pháp tối ưu.</p>
    `,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    date: "20/11/2025",
    category: "Inverter",
  },
  {
    id: "3",
    title: "Hệ Thống Pin Lưu Trữ Deye BOS-B Pro – Giải Pháp Lưu Điện Tối Ưu",
    slug: "pin-luu-tru-deye-bos-b-pro-giai-phap",
    excerpt:
      "Pin lưu trữ Deye BOS-B Pro Ra3 sử dụng tế bào LiFePO4 thế hệ mới, dung lượng 16.08kWh, bảo hành 10 năm, hoạt động bền bỉ trong điều kiện nhiệt đới.",
    content: `
      <p>Pin lưu trữ Deye BOS-B Pro-A3 là dòng pin áp cao mới nhất của Deye, sử dụng tế bào LiFePO4 thế hệ 3, dung lượng 16.08kWh (51.2V-314Ah).</p>
      <p>Với thiết kế stackable, khách hàng có thể dễ dàng mở rộng dung lượng lưu trữ lên đến 128kWh trong một hệ thống duy nhất.</p>
    `,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    date: "15/10/2025",
    category: "Pin Lưu Trữ",
  },
  {
    id: "4",
    title: "Điện Mặt Trời Tây Ninh – Tiềm Năng Và Cơ Hội Đầu Tư 2026",
    slug: "dien-mat-troi-tay-ninh-tiem-nang-2026",
    excerpt:
      "Tây Ninh là tỉnh có số giờ nắng cao nhất miền Nam Việt Nam, trung bình 5.5–6.5 giờ/ngày, tạo điều kiện lý tưởng cho đầu tư điện mặt trời.",
    content: `
      <p>Tây Ninh với vị trí địa lý đặc biệt – tiếp giáp biên giới Campuchia, nằm trong vùng khí hậu nhiệt đới gió mùa – có cường độ bức xạ mặt trời thuộc nhóm cao nhất cả nước.</p>
      <p>Trung bình 5.5–6.5 giờ nắng/ngày (kWh/m²) tạo ra tiềm năng khai thác điện mặt trời cực kỳ lớn, cả hệ thống mái nhà lẫn điện mặt trời trang trại.</p>
      <h2>Các loại hệ thống phù hợp</h2>
      <ul>
        <li>Hệ thống hòa lưới (On-Grid): Bán điện dư lên lưới EVN</li>
        <li>Hệ thống hybrid: Lưu trữ và tự dùng ban đêm</li>
        <li>Hệ thống off-grid: Cho khu vực xa lưới điện, trang trại</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    date: "05/09/2025",
    category: "Tin Tức",
  },
];

export const getNewsBySlug = (slug: string) =>
  news.find((n) => n.slug === slug);
export const getLatestNews = (count = 3) => news.slice(0, count);
