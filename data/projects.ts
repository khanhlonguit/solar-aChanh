export interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  power: string;
  type: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Hệ Thống 20kW Hybrid",
    slug: "he-thong-20kw-hybrid-tay-ninh",
    location: "Tây Ninh",
    power: "20kW",
    type: "Hybrid",
    description: "Hệ thống điện mặt trời 20kW Hybrid kết hợp lưu trữ pin Deye, tiết kiệm 7 – 9 triệu đồng/tháng.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80",
  },
  {
    id: "2",
    title: "Hệ Thống 50kW Hòa Lưới",
    slug: "he-thong-50kw-hoa-luoi-binh-duong",
    location: "Bình Dương",
    power: "50kW",
    type: "On-Grid",
    description: "Hệ thống điện mặt trời 50kW hòa lưới cho nhà xưởng sản xuất tại Bình Dương.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&q=80",
  },
  {
    id: "3",
    title: "Hệ Thống 8kW Gia Đình",
    slug: "he-thong-8kw-gia-dinh",
    location: "Tây Ninh",
    power: "8kW",
    type: "Hybrid",
    description: "Hệ thống 8kW hybrid cho hộ gia đình, đủ dùng toàn bộ nhu cầu điện sinh hoạt.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80",
  },
  {
    id: "4",
    title: "Hệ Lưu Trữ Inverter Deye + Pin SAVI-ESS",
    slug: "he-luu-tru-deye-savi-ess",
    location: "TP. Hồ Chí Minh",
    power: "15kW",
    type: "Hybrid",
    description: "Hệ thống lưu trữ kết hợp Inverter Deye với pin SAVI-ESS, tự chủ 100% ban đêm.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  },
  {
    id: "5",
    title: "Hệ Thống Bơm Nước NLMT",
    slug: "he-thong-bom-nuoc-nlmt",
    location: "Tây Ninh",
    power: "4kW",
    type: "Bơm NLMT",
    description: "Hệ thống bơm nước tưới tiêu từ năng lượng mặt trời cho trang trại nông nghiệp.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=80",
  },
];
