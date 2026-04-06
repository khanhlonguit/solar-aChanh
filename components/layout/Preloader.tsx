"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setVisible(false), 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "#0D1117",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: loading ? 1 : 0,
        transform: loading ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
      }}
    >
      {/* Sun animation */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div
            className="w-20 h-20 rounded-full"
            style={{
              background:
                "radial-gradient(circle, #FACC15 0%, #F97316 60%, transparent 100%)",
              animation: "pulse-sun 1.5s ease-in-out infinite",
              boxShadow: "0 0 60px #F97316aa",
            }}
          />
          {/* Rays */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 origin-left"
              style={{
                width: "40px",
                height: "3px",
                background: "#F97316",
                borderRadius: "2px",
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(44px)`,
                opacity: 0.7,
                animation: `ray-spin 2s linear infinite`,
              }}
            />
          ))}
        </div>
        <div className="text-center">
          <p
            className="text-white text-sm tracking-[0.3em] uppercase"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Tài Chánh Solar
          </p>
          <div className="mt-3 h-0.5 bg-gray-700 rounded-full overflow-hidden w-48">
            <div
              className="h-full bg-gradient-to-r from-solar-orange to-solar-yellow rounded-full"
              style={{
                animation: "progress-bar 2s ease-out forwards",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-sun {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        @keyframes ray-spin {
          from { transform: translate(-50%, -50%) rotate(var(--r, 0deg)) translateX(44px); }
          to { transform: translate(-50%, -50%) rotate(calc(var(--r, 0deg) + 360deg)) translateX(44px); }
        }
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
