"use client";

import { useState } from "react";
import { dataBuku } from "@/data/dataBuku";
import BukuCard from "@/components/BukuCard";

export default function KatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeBuku, setActiveBuku] = useState(dataBuku[0] || null);

  const categories = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

  const filteredBuku =
    selectedCategory === "Semua"
      ? dataBuku
      : dataBuku.filter((b) => b.kategori === selectedCategory);

  const jumlahDipinjam = filteredBuku.filter((b) => !b.tersedia).length;

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden relative select-none">
      
      {/* ATMOSFER BACKGROUND */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.35] contrast-[1.25] scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-amber-950/20 pointer-events-none" />

      {/* HEADER KATALOG */}
      <div className="relative z-20 text-center flex-shrink-0 pt-6 md:pt-10 px-6">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-sans font-black text-amber-100 tracking-tight drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
          Katalog Pustaka Senja
        </h1>
        <p className="text-amber-200 text-lg sm:text-2xl md:text-3xl mt-3 font-sans font-semibold max-w-4xl mx-auto drop-shadow-lg">
          Pilih kategori dan sentuh buku pada rak untuk melihat ketersediaan serta sinopsis lengkap.
        </p>

        {/* FILTER KATEGORI */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                const first = cat === "Semua" ? dataBuku[0] : dataBuku.find((b) => b.kategori === cat);
                if (first) setActiveBuku(first);
              }}
              className={`px-8 py-3.5 rounded-full text-lg sm:text-xl font-sans font-black tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-amber-400 text-stone-950 font-black shadow-2xl scale-110 border-2 border-amber-200 ring-4 ring-amber-400/40"
                  : "bg-stone-900/90 text-amber-200 hover:bg-stone-800 border-2 border-amber-800/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* RAK BUKU & MEJA KAYU (BERSIH TANPA SCROLLBAR DAN TANPA BAR GANDA) */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-end items-center px-4 sm:px-8 pb-0 overflow-hidden">
        
        {/* CONTAINER BARISAN BUKU (no-scrollbar aktif) */}
        <div className="w-full max-w-[96vw] flex items-end justify-center gap-3 sm:gap-5 md:gap-6 overflow-x-auto pb-2 no-scrollbar">
          {filteredBuku.map((buku) => (
            <BukuCard
              key={buku.id}
              buku={buku}
              isSelected={activeBuku?.id === buku.id}
              onSelect={(selected) => setActiveBuku(selected)}
            />
          ))}
        </div>

        {/* MEJA KAYU 3D SINGLE BAR (RAPI & PRESISI) */}
        <div className="w-full max-w-[96vw] h-14 sm:h-16 bg-gradient-to-b from-amber-900 via-amber-950 to-stone-950 rounded-t-2xl border-t-4 border-amber-500 shadow-2xl flex items-center justify-between px-8 sm:px-14 flex-shrink-0">
          <span className="text-base sm:text-xl text-amber-200 font-sans font-black">
            Menampilkan {filteredBuku.length} karya ({jumlahDipinjam > 0 ? `${jumlahDipinjam} sedang dipinjam` : "semua tersedia"})
          </span>
          <span className="text-xs sm:text-base text-amber-400 font-mono font-bold uppercase tracking-widest">
            PUSTAKA SENJA 3D SHELF
          </span>
        </div>
      </div>

    </div>
  );
}