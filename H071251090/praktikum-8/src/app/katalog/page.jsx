"use client";

import { useState } from "react";
import { dataBuku } from "@/data/dataBuku";
import BukuCard from "@/components/BukuCard";

export default function KatalogPage() {
    const [kategoriTerpilih, setKategoriTerpilih] = useState("Semua");
    const [pencarian, setPencarian] = useState("");

    const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

    const bukuTerfilter = dataBuku.filter((buku) => {
        const cocokKategori =
        kategoriTerpilih === "Semua" || buku.kategori === kategoriTerpilih;

        const cocokKata =
        buku.judul.toLowerCase().includes(pencarian.toLowerCase().trim()) ||
        buku.penulis.toLowerCase().includes(pencarian.toLowerCase().trim());

        return cocokKategori && cocokKata;
    });

    return (
        <div className="space-y-8">
        <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Katalog Koleksi Buku
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-1.5">
            Jelajahi seluruh koleksi buku yang tersedia di Pustaka Senja.
            </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-stone-200/80 p-4 sm:p-5 rounded-2xl shadow-sm space-y-4">
            <div className="relative max-w-md">
            <input
                type="text"
                placeholder="Cari judul buku atau nama penulis..."
                value={pencarian}
                onChange={(e) => setPencarian(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 focus:bg-white transition"
            />
            <span className="absolute left-3.5 top-2.5 text-stone-400 text-sm">
                🔍
            </span>
            {pencarian && (
                <button
                type="button"
                onClick={() => setPencarian("")}
                className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-700 text-sm font-semibold"
                >
                ✕
                </button>
            )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
            {daftarKategori.map((kategori) => (
                <button
                key={kategori}
                type="button"
                onClick={() => setKategoriTerpilih(kategori)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    kategoriTerpilih === kategori
                    ? "bg-amber-800 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
                >
                {kategori}
                </button>
            ))}
            </div>
        </div>

        <div className="text-xs text-stone-500 font-medium">
            Menampilkan <strong>{bukuTerfilter.length}</strong> dari {dataBuku.length} total buku
        </div>

        {bukuTerfilter.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bukuTerfilter.map((buku) => (
                <BukuCard key={buku.id} buku={buku} />
            ))}
            </div>
        ) : (
            <div className="text-center py-16 bg-white border border-stone-200 rounded-3xl p-8 space-y-3 shadow-sm">
            <p className="text-4xl">📖</p>
            <h3 className="text-base font-bold text-stone-900">Buku Tidak Ditemukan</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Tidak ada koleksi yang sesuai dengan kata kunci &quot;{pencarian}&quot; pada kategori {kategoriTerpilih}.
            </p>
            </div>
        )}
        </div>
    );
}