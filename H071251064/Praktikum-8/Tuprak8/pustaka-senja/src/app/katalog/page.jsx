"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import dataBuku from "@/data/dataBuku";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function Katalog() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <div>
      <h1 className="inline-block border-2 border-black bg-pink-300 px-4 py-1 font-display text-4xl font-extrabold shadow-[6px_6px_0_#000]">
        Katalog Buku
      </h1>
      <p className="mt-5 font-medium">
        Pilih kategori untuk menyaring koleksi. Klik Lihat Detail untuk membaca sinopsis.
      </p>

      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label="Filter kategori">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => setKategoriAktif(kategori)}
            aria-pressed={kategoriAktif === kategori}
            className={`border-2 border-black px-4 py-2 text-sm font-bold transition active:translate-x-1 active:translate-y-1 active:shadow-none ${
              kategoriAktif === kategori
                ? "bg-black text-yellow-300 shadow-[4px_4px_0_#ec4899]"
                : "bg-white shadow-[4px_4px_0_#000] hover:bg-yellow-200"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm font-medium text-black/60">
        Menampilkan {bukuTampil.length} buku dari {dataBuku.length} koleksi.
      </p>

      <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {bukuTampil.map((buku) => (
          <BukuCard key={buku.id} buku={buku} />
        ))}
      </div>
    </div>
  );
}