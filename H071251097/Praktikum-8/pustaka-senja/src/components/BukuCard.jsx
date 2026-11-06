"use client";

import { useState } from "react";
import Link from "next/link";

export default function BukuCard({ buku, isSelected, onSelect }) {
  const [isFavorit, setIsFavorit] = useState(false);

  return (
    <div
      onClick={() => onSelect(buku)}
      className={`cursor-pointer transition-all duration-500 ease-out shrink-0 relative select-none flex flex-col items-center justify-end ${
        isSelected
          ? "w-105 sm:w-125 md:w-145 z-30 scale-105"
          : "w-27.5 sm:w-33.75 md:w-40 hover:w-43.75 z-10 hover:opacity-100"
      } ${!buku.tersedia && !isSelected ? "opacity-60 grayscale hover:grayscale-0" : "opacity-95"}`}
    >
      {/* Container Buku 3D Berukuran Jumbo (2x Lebih Besar) */}
      <div className="relative w-full h-130 sm:h-150 md:h-170 flex items-end justify-center">
        {isSelected ? (
          /* BUKU AKTIF: TAMPIL SAMPUL DEPAN GAMBAR ASLI SUPER TAJAM */
          <div
            className={`relative w-full h-full rounded-r-3xl shadow-[0_50px_100px_rgba(0,0,0,0.98)] border-l-28 border-stone-900 overflow-hidden bg-stone-900 border-4 animate-fadeIn flex flex-col justify-between p-7 ${
              buku.tersedia ? "border-amber-400" : "border-rose-500"
            }`}
          >
            {/* GAMBAR SAMPUL DEPAN BUKU */}
            <div className="absolute inset-0 z-0">
              <img
                src={buku.gambar}
                alt={buku.judul}
                className="w-full h-full object-cover rounded-r-2xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-black/30" />
            </div>

            {/* STATUS BADGE & FAVORIT */}
            <div className="flex items-center justify-between z-20">
              <span
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-black uppercase tracking-wider border shadow-2xl ${
                  buku.tersedia
                    ? "bg-emerald-600 text-white border-emerald-300"
                    : "bg-rose-600 text-white border-rose-300"
                }`}
              >
                {buku.tersedia ? "✓ TERSEDIA" : "🔒 SEDANG DIPINJAM"}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFavorit(!isFavorit);
                }}
                className={`p-3.5 rounded-full border-2 transition-all shadow-2xl ${
                  isFavorit
                    ? "bg-rose-600 border-rose-300 text-white scale-110"
                    : "bg-stone-950/80 border-amber-400 text-amber-200 hover:bg-amber-400 hover:text-stone-950"
                }`}
                title={isFavorit ? "Disimpan di Favorit" : "Simpan ke Favorit"}
              >
                <span className="text-2xl">{isFavorit ? "❤️" : "🤍"}</span>
              </button>
            </div>

            {/* INFORMASI BUKU TENGAH (TAJAM & JELAS DIBACA) */}
            <div className="my-auto text-center space-y-2 z-20 bg-stone-950/90 backdrop-blur-md p-6 rounded-2xl border-2 border-amber-500/50 shadow-2xl">
              <h3 className="font-sans font-black text-2xl sm:text-4xl text-amber-100 leading-tight">
                {buku.judul}
              </h3>
              <p className="text-amber-300 font-sans font-bold text-base sm:text-xl">
                Penulis: {buku.penulis} ({buku.tahun})
              </p>
              <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-300 rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-widest mt-1">
                Kategori: {buku.kategori}
              </span>
            </div>

            {/* TOMBOL DETAIL SINOPSIS JUMBO */}
            <div className="z-20 pt-2">
              <Link
                href={`/katalog/${buku.id}`}
                onClick={(e) => e.stopPropagation()}
                className={`w-full py-5 font-sans font-black rounded-2xl shadow-2xl transition-all text-base sm:text-lg tracking-wider uppercase text-center block border-2 ${
                  buku.tersedia
                    ? "bg-amber-400 hover:bg-amber-300 text-stone-950 border-amber-200"
                    : "bg-stone-800 hover:bg-stone-700 text-amber-200 border-rose-400"
                }`}
              >
                LIHAT DETAIL SINOPSIS &rarr;
              </Link>
            </div>

            {/* Bayangan 3D Spine */}
            <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-black/95 via-black/50 to-transparent pointer-events-none z-10" />
          </div>
        ) : (
          /* BUKU TIDAK AKTIF: PUNGGUNG BUKU (SPINE) TEBAL & BESAR */
          <div
            className={`relative w-full h-[98%] rounded-md shadow-2xl border-r-3 border-l-3 flex flex-col justify-between items-center py-10 px-2 hover:brightness-125 transition-all ${
              buku.tersedia
                ? "bg-stone-900 border-stone-600"
                : "bg-stone-950 border-rose-900/80"
            }`}
          >
            <span
              className={`text-xs font-sans font-black uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 px-2 py-1.5 rounded ${
                buku.tersedia
                  ? "text-amber-400 bg-stone-950 border border-amber-500/40"
                  : "text-rose-400 bg-rose-950 border border-rose-800"
              }`}
            >
              {buku.tersedia ? buku.kategori : "DIPINJAM"}
            </span>

            <p
              className={`text-lg sm:text-xl font-sans font-black [writing-mode:vertical-rl] rotate-180 tracking-wider truncate max-h-95 ${
                buku.tersedia ? "text-amber-100" : "text-stone-400"
              }`}
            >
              {buku.judul}
            </p>

            <span
              className={`text-xs sm:text-sm font-sans font-bold [writing-mode:vertical-rl] rotate-180 truncate ${
                buku.tersedia ? "text-amber-300" : "text-rose-400/80"
              }`}
            >
              {buku.penulis}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}