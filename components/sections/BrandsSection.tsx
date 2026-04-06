const brands = [
  "Deye Inverter",
  "Aiko Solar",
  "JA Solar",
  "Canadian Solar",
  "Jinko Solar",
  "Longi",
  "Luxpower",
  "Huawei",
  "Sungrow",
  "Growatt",
  "Trina Solar",
  "CFE Battery",
  "Chanan",
  "Veichi",
];

export default function BrandsSection() {
  // Double the list for seamless loop
  const doubled = [...brands, ...brands];

  return (
    <section
      className="py-16"
      style={{ background: "#0D1117", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="container-custom mb-8 text-center">
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          Đối tác thương hiệu hàng đầu thế giới
        </p>
      </div>

      {/* Marquee strip */}
      <div className="overflow-hidden relative">
        <div
          className="flex gap-8 items-center"
          style={{
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-3 rounded-xl text-sm font-bold"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              {brand}
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div
          className="absolute top-0 left-0 w-24 h-full pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #0D1117, transparent)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-24 h-full pointer-events-none"
          style={{
            background: "linear-gradient(-90deg, #0D1117, transparent)",
          }}
        />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
