"use client";

import { useMemo, useState } from "react";
import BukuCard from "@/components/BukuCard";
import { dataBuku } from "@/data/dataBuku";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function Katalog() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");

  const bukuTampil = useMemo(() => {
    const query = kataKunci.trim().toLowerCase();

    return dataBuku.filter((buku) => {
      const cocokKategori = kategoriAktif === "Semua" || buku.kategori === kategoriAktif;
      const cocokPencarian =
        !query ||
        [buku.judul, buku.penulis, buku.kategori].some((nilai) =>
          String(nilai).toLowerCase().includes(query)
        );

      return cocokKategori && cocokPencarian;
    });
  }, [kategoriAktif, kataKunci]);

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">Laci katalog</p>
      <h1 className="mt-2 font-display text-4xl font-light text-dusk sm:text-5xl">Katalog Buku</h1>
      <p className="mt-3 max-w-xl text-ink-soft">
        Jelajahi koleksi Pustaka Senja, dipilah seperti sekat laci kartu katalog.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="cari-buku" className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
            Cari buku
          </label>
          <input
            id="cari-buku"
            type="search"
            value={kataKunci}
            onChange={(event) => setKataKunci(event.target.value)}
            placeholder="Judul, penulis, atau kategori..."
            className="mt-2 w-full border-0 border-b-2 border-ink/40 bg-transparent px-1 py-2 text-lg text-ink placeholder:text-ink/40 focus:border-ember focus:outline-none"
          />
        </div>

        {kataKunci.trim() && (
          <button
            type="button"
            onClick={() => setKataKunci("")}
            className="border-2 border-dusk px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-dusk transition-colors hover:bg-paper-deep"
          >
            Reset
          </button>
        )}
      </div>

      {/* sekat laci */}
      <div className="mt-8 flex flex-wrap items-end gap-1.5 border-b-2 border-dusk px-1">
        {daftarKategori.map((kategori) => {
          const aktif = kategoriAktif === kategori;
          return (
            <button
              key={kategori}
              type="button"
              onClick={() => setKategoriAktif(kategori)}
              aria-pressed={aktif}
              className={
                "-mb-[2px] rounded-t-md border-2 border-b-0 border-dusk px-4 font-mono text-xs uppercase tracking-[0.14em] transition-colors " +
                (aktif
                  ? "bg-dusk py-3 text-gold"
                  : "bg-paper-deep py-2 text-ink-soft hover:bg-card hover:text-ink")
              }
            >
              {kategori}
            </button>
          );
        })}
      </div>

      <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
        Menampilkan {bukuTampil.length} dari {dataBuku.length} judul
      </p>

      {bukuTampil.length === 0 ? (
        <div className="mt-8 border border-dashed border-ink/30 bg-card px-6 py-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">Hasil tidak ditemukan</p>
          <p className="mt-2 text-ink-soft">
            Tidak ada buku yang cocok dengan pencarian "{kataKunci.trim()}" pada kategori {kategoriAktif}.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {bukuTampil.map((buku) => (
            <BukuCard
              key={buku.id}
              id={buku.id}
              judul={buku.judul}
              penulis={buku.penulis}
              kategori={buku.kategori}
              tahun={buku.tahun}
              tersedia={buku.tersedia}
            />
          ))}
        </div>
      )}
    </div>
  );
}
