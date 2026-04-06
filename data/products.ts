export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  brand: string;
  model: string;
  power?: string;
  price?: string;
  description: string;
  image: string;
  specs: ProductSpec[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  // INVERTER
  {
    id: "1",
    name: "Inverter Hybrid Deye 6kW 1 Pha",
    slug: "inverter-hybrid-deye-6kw-1-pha",
    categorySlug: "inverter-nang-luong-mat-troi",
    brand: "Deye",
    model: "SUN-6K-SG05LP1-EU-SM2",
    power: "6kW",
    description: "Inverter Hybrid Deye 6kW 1 pha, hỗ trợ off-grid, tích hợp pin lưu trữ Lithium, màn hình LCD, kết nối Wi-Fi theo dõi từ xa.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80",
    isFeatured: true,
    isNew: true,
    specs: [
      { label: "Công suất", value: "6kW" },
      { label: "Pha", value: "1 pha" },
      { label: "Loại", value: "Hybrid" },
      { label: "Điện áp pin", value: "48V" },
      { label: "Hiệu suất", value: "97.6%" },
      { label: "Bảo hành", value: "5 năm" },
    ],
  },
  {
    id: "2",
    name: "Inverter Hybrid Deye 10kW 3 Pha",
    slug: "inverter-hybrid-deye-10kw-3-pha",
    categorySlug: "inverter-nang-luong-mat-troi",
    brand: "Deye",
    model: "SUN-10K-SG05LP3-EU-SM2",
    power: "10kW",
    description: "Inverter Hybrid Deye 10kW 3 pha, phù hợp hệ thống dân dụng và thương mại nhỏ.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80",
    isFeatured: true,
    specs: [
      { label: "Công suất", value: "10kW" },
      { label: "Pha", value: "3 pha" },
      { label: "Loại", value: "Hybrid" },
      { label: "Hiệu suất", value: "97.8%" },
      { label: "Bảo hành", value: "5 năm" },
    ],
  },
  {
    id: "3",
    name: "Inverter Hòa Lưới Deye 50kW 3 Pha",
    slug: "inverter-hoa-luoi-deye-50kw-3-pha",
    categorySlug: "inverter-nang-luong-mat-troi",
    brand: "Deye",
    model: "SUN-50K-G04",
    power: "50kW",
    description: "Biến tần hòa lưới Deye 50kW 3 pha, phù hợp hệ thống công nghiệp.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80",
    isFeatured: true,
    specs: [
      { label: "Công suất", value: "50kW" },
      { label: "Pha", value: "3 pha" },
      { label: "Loại", value: "On-Grid" },
      { label: "Bảo hành", value: "5 năm" },
    ],
  },
  {
    id: "4",
    name: "Inverter Hybrid Luxpower 6kW",
    slug: "inverter-hybrid-luxpower-6kw",
    categorySlug: "inverter-nang-luong-mat-troi",
    brand: "Luxpower",
    model: "GEN-LB-EU 6K",
    power: "6kW",
    description: "Inverter Hybrid Luxpower 6kW, thiết kế đẹp, tích hợp BMS pin Lithium.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80",
    specs: [
      { label: "Công suất", value: "6kW" },
      { label: "Pha", value: "1 pha" },
      { label: "Loại", value: "Hybrid" },
      { label: "Bảo hành", value: "5 năm" },
    ],
  },
  // TẤM PIN
  {
    id: "5",
    name: "Tấm Pin Aiko 650W 2 Mặt Kính N-Type",
    slug: "tam-pin-aiko-650w-2-mat-kinh",
    categorySlug: "tam-pin-nang-luong-mat-troi",
    brand: "Aiko",
    model: "AIKO-650W-2G",
    power: "650W",
    description: "Tấm pin Aiko 650W công nghệ N-Type ABC, hiệu suất 24.4%, 2 mặt kính bifacial.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&q=80",
    isNew: true,
    isFeatured: true,
    specs: [
      { label: "Công suất", value: "650W" },
      { label: "Hiệu suất", value: "24.4%" },
      { label: "Công nghệ", value: "N-Type ABC" },
      { label: "Loại", value: "2 mặt kính" },
      { label: "Bảo hành", value: "25 năm" },
    ],
  },
  {
    id: "6",
    name: "Tấm Pin JA Solar 630W N-Type",
    slug: "tam-pin-ja-solar-630w",
    categorySlug: "tam-pin-nang-luong-mat-troi",
    brand: "JA Solar",
    model: "JAM66D45-630/LB",
    power: "630W",
    description: "Tấm pin JA Solar 630W N-Type 2 mặt kính, công suất cao, độ bền vượt trội.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&q=80",
    isFeatured: true,
    specs: [
      { label: "Công suất", value: "630W" },
      { label: "Công nghệ", value: "N-Type" },
      { label: "Loại", value: "2 mặt kính" },
      { label: "Bảo hành", value: "25 năm" },
    ],
  },
  {
    id: "7",
    name: "Tấm Pin Jinko 720W 2 Mặt Kính",
    slug: "tam-pin-jinko-720w",
    categorySlug: "tam-pin-nang-luong-mat-troi",
    brand: "Jinko",
    model: "66HL5-BDV",
    power: "720W",
    description: "Tấm pin Jinko 720W Tiger Neo, công suất lớn nhất dòng dân dụng hiện nay.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&q=80",
    isNew: true,
    specs: [
      { label: "Công suất", value: "720W" },
      { label: "Công nghệ", value: "N-Type" },
      { label: "Loại", value: "2 mặt kính" },
      { label: "Bảo hành", value: "25 năm" },
    ],
  },
  {
    id: "8",
    name: "Tấm Pin Canadian 650W N-Type",
    slug: "tam-pin-canadian-650w",
    categorySlug: "tam-pin-nang-luong-mat-troi",
    brand: "Canadian",
    model: "CS7L-650TB-AG",
    power: "650W",
    description: "Tấm pin Canadian 650W TOPBiHiKu7 N-Type 2 mặt kính, hiệu suất cao.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&q=80",
    specs: [
      { label: "Công suất", value: "650W" },
      { label: "Công nghệ", value: "N-Type TOPCon" },
      { label: "Loại", value: "2 mặt kính" },
      { label: "Bảo hành", value: "25 năm" },
    ],
  },
  // PIN LƯU TRỮ
  {
    id: "9",
    name: "Pin Lưu Trữ Deye 16kWh SE-F16",
    slug: "pin-luu-tru-deye-16kwh",
    categorySlug: "pin-luu-tru-nang-luong",
    brand: "Deye",
    model: "SE-F16 | 51.2V-314Ah",
    description: "Pin Lithium Deye 16kWh áp thấp 51.2V, stackable, bảo hành 10 năm, phù hợp hệ thống gia đình.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    isFeatured: true,
    isNew: true,
    specs: [
      { label: "Dung lượng", value: "16kWh" },
      { label: "Điện áp", value: "51.2V" },
      { label: "Dung lượng Ah", value: "314Ah" },
      { label: "Loại pin", value: "LiFePO4" },
      { label: "Bảo hành", value: "10 năm" },
    ],
  },
  {
    id: "10",
    name: "Pin Lithium Deye BOS-B Áp Cao",
    slug: "pin-deye-bos-b-ap-cao",
    categorySlug: "pin-luu-tru-nang-luong",
    brand: "Deye",
    model: "BOS-B | 51.2V-280Ah",
    description: "Pin Deye BOS-B áp cao 51.2V 280Ah, thiết kế rack tiện lợi.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    specs: [
      { label: "Dung lượng", value: "14.3kWh" },
      { label: "Điện áp", value: "51.2V" },
      { label: "Loại pin", value: "LiFePO4" },
      { label: "Bảo hành", value: "10 năm" },
    ],
  },
  {
    id: "11",
    name: "Pin Lưu Trữ CFE 15.36kWh",
    slug: "pin-luu-tru-cfe-15kwh",
    categorySlug: "pin-luu-tru-nang-luong",
    brand: "CFE",
    model: "CFE-WL-15",
    description: "Pin CFE 15.36kWh Lithium LiFePO4, bảo hành 10 năm, mounting linh hoạt.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    isFeatured: true,
    specs: [
      { label: "Dung lượng", value: "15.36kWh" },
      { label: "Dung lượng Ah", value: "300Ah" },
      { label: "Loại pin", value: "LiFePO4" },
      { label: "Bảo hành", value: "10 năm" },
    ],
  },
  // BIẾN TẦN BƠM
  {
    id: "12",
    name: "Biến Tần Bơm Veichi 4kW 3 Pha",
    slug: "bien-tan-bom-veichi-4kw",
    categorySlug: "bien-tan-bom-nang-luong-mat-troi",
    brand: "Veichi",
    model: "SI23-D5-004G",
    power: "4kW",
    description: "Biến tần bơm nước Veichi 4kW 3 pha từ năng lượng mặt trời, phù hợp tưới tiêu nông nghiệp.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&q=80",
    isFeatured: true,
    specs: [
      { label: "Công suất", value: "4kW" },
      { label: "Pha đầu ra", value: "3 pha 220V" },
      { label: "Nguồn vào", value: "NLMT DC" },
      { label: "Bảo hành", value: "2 năm" },
    ],
  },
  // PHỤ KIỆN
  {
    id: "13",
    name: "Chống Sét SPD Chanan 20kA DC",
    slug: "chong-set-spd-chanan-20ka-dc",
    categorySlug: "phu-kien-nang-luong-mat-troi",
    brand: "Chanan",
    model: "EKU5-T2-20PV-2M600",
    description: "Chống sét lan truyền SPD Chanan 20kA 600V 2P DC, bảo vệ hệ thống NLMT.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80",
    specs: [
      { label: "Dòng xung", value: "20kA" },
      { label: "Điện áp", value: "600V DC" },
      { label: "Cực", value: "2P" },
      { label: "Bảo hành", value: "2 năm" },
    ],
  },
  {
    id: "14",
    name: "MCB DC 2P 32A Chanan",
    slug: "mcb-dc-2p-32a-chanan",
    categorySlug: "phu-kien-nang-luong-mat-troi",
    brand: "Chanan",
    model: "EKM1-63DC",
    description: "Thiết bị đóng cắt điện DC 2P 32A, dùng cho chuỗi tấm pin mặt trời.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80",
    specs: [
      { label: "Dòng điện", value: "32A" },
      { label: "Cực", value: "2P" },
      { label: "Loại", value: "DC" },
    ],
  },
  {
    id: "15",
    name: "ATS Cemig 160A 4P Tự Động",
    slug: "ats-cemig-160a-4p",
    categorySlug: "phu-kien-nang-luong-mat-troi",
    brand: "Cemig",
    model: "SMGQ2-160/4P",
    description: "Bộ chuyển đổi nguồn tự động ATS Cemig 160A 4P, hoạt động tự động khi mất điện lưới.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80",
    isFeatured: true,
    specs: [
      { label: "Dòng điện", value: "160A" },
      { label: "Cực", value: "4P" },
      { label: "Thời gian chuyển", value: "< 0.3s" },
    ],
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.isFeatured);
export const getNewProducts = () => products.filter((p) => p.isNew);
export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.categorySlug === categorySlug);
export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
