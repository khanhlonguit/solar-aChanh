import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tài Chánh Solar | Điện Năng Lượng Mặt Trời Tây Ninh",
    template: "%s | Tài Chánh Solar",
  },
  description:
    "Công ty TNHH Xây Dựng Cơ Điện Tài Chánh Solar – chuyên cung cấp và lắp đặt hệ thống điện năng lượng mặt trời tại Tây Ninh. Inverter Deye, tấm pin Aiko, Jinko, pin lưu trữ Lithium.",
  keywords: [
    "điện mặt trời Tây Ninh",
    "năng lượng mặt trời",
    "lắp đặt điện mặt trời",
    "inverter Deye",
    "tấm pin mặt trời",
    "pin lưu trữ",
    "Tài Chánh Solar",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Tài Chánh Solar",
    title: "Tài Chánh Solar | Điện Năng Lượng Mặt Trời Tây Ninh",
    description:
      "Cung cấp và lắp đặt hệ thống điện năng lượng mặt trời tại Tây Ninh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
