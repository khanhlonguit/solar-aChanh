export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  brands: Brand[];
}

export interface Brand {
  name: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "inverter",
    name: "Inverter Năng Lượng Mặt Trời",
    slug: "inverter-nang-luong-mat-troi",
    description: "Biến tần hòa lưới, hybrid, off-grid từ các thương hiệu hàng đầu thế giới",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    brands: [
      { name: "Deye Off-Grid", slug: "deye-off-grid" },
      { name: "Deye Hybrid", slug: "deye-hybrid" },
      { name: "Deye Hòa Lưới", slug: "deye-hoa-luoi" },
      { name: "Luxpower", slug: "luxpower" },
      { name: "Huawei", slug: "huawei" },
      { name: "Growatt", slug: "growatt" },
      { name: "Sungrow", slug: "sungrow" },
    ],
  },
  {
    id: "tam-pin",
    name: "Tấm Pin Năng Lượng Mặt Trời",
    slug: "tam-pin-nang-luong-mat-troi",
    description: "Tấm pin công suất cao, công nghệ N-Type TOPCon & ABC mới nhất",
    icon: "☀️",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
    brands: [
      { name: "JA Solar", slug: "ja-solar" },
      { name: "Canadian", slug: "canadian" },
      { name: "AE Solar", slug: "ae-solar" },
      { name: "Aiko", slug: "aiko" },
      { name: "Longi", slug: "longi" },
      { name: "Jinko", slug: "jinko" },
      { name: "Trina Solar", slug: "trina-solar" },
      { name: "Sharp Solar", slug: "sharp-solar" },
    ],
  },
  {
    id: "pin-luu-tru",
    name: "Pin Lưu Trữ Năng Lượng",
    slug: "pin-luu-tru-nang-luong",
    description: "Pin Lithium LiFePO4 áp cao & áp thấp, bảo hành lên đến 10 năm",
    icon: "🔋",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    brands: [
      { name: "Pin Lithium Deye", slug: "pin-lithium-deye" },
      { name: "CFE Battery", slug: "cfe-battery" },
      { name: "HinaESS", slug: "hinaess" },
      { name: "PTESS", slug: "ptess" },
      { name: "Luxpower", slug: "luxpower-battery" },
      { name: "SVE", slug: "sve" },
    ],
  },
  {
    id: "bien-tan-bom",
    name: "Biến Tần Bơm NLMT",
    slug: "bien-tan-bom-nang-luong-mat-troi",
    description: "Biến tần điều khiển bơm nước từ năng lượng mặt trời",
    icon: "💧",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    brands: [
      { name: "Veichi Pump", slug: "veichi-pump" },
    ],
  },
  {
    id: "phu-kien",
    name: "Phụ Kiện Năng Lượng Mặt Trời",
    slug: "phu-kien-nang-luong-mat-troi",
    description: "Cáp solar, MCB DC/AC, SPD chống sét, ATS, tủ điện đấu sẵn",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    brands: [
      { name: "Chanan", slug: "chanan" },
      { name: "Leader", slug: "leader" },
      { name: "ATS Cemig", slug: "ats-cemig" },
      { name: "Meter Eastron", slug: "meter-eastron" },
      { name: "Frcable", slug: "frcable" },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
