import Link from "next/link";
import Image from "next/image";
import { dataBuku } from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="border-2 border-black p-8 text-center">
        <h1 className="mb-4 text-xl font-bold">
          Buku dengan ID &quot;{id}&quot; tidak ditemukan.
        </h1>
        <p className="mb-6 text-sm text-black/70">
          Periksa kembali alamat yang kamu buka, atau pilih buku dari katalog.
        </p>
        <Link
          href="/katalog"
          className="inline-block border-2 border-black bg-oranye px-5 py-2.5 text-sm font-bold hover:bg-kuning"
        >
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const baris = [
    { label: "Penulis", nilai: buku.penulis },
    { label: "Kategori", nilai: buku.kategori },
    { label: "Tahun terbit", nilai: buku.tahun },
    { label: "ID buku", nilai: `#${buku.id}` },
  ];

  return (
    <article className="grid gap-6 md:grid-cols-[220px_1fr]">
      <Image
        src={`/sampul/${buku.id}.svg`}
        alt={`Sampul buku ${buku.judul}`}
        width={300}
        height={400}
        unoptimized
        priority
        className="h-auto w-full max-w-[260px] border-2 border-black"
      />

      <div>
        <h1 className="text-2xl font-bold md:text-3xl">{buku.judul}</h1>
        <p className="mt-1 text-sm">Oleh {buku.penulis}</p>

        <span
          className={`mt-4 inline-block border-2 border-black px-3 py-1 text-xs font-bold ${
            buku.tersedia ? "bg-emerald-300" : "bg-red-300"
          }`}
        >
          {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>

        <dl className="mt-5 border-t-2 border-black text-sm">
          {baris.map((item) => (
            <div
              key={item.label}
              className="flex justify-between gap-4 border-b border-black/30 py-2"
            >
              <dt className="text-black/60">{item.label}</dt>
              <dd className="text-right font-bold">{item.nilai}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-5 mb-2 text-sm font-bold">Sinopsis</h2>
        <p className="border-2 border-black bg-white/40 p-4 text-sm leading-relaxed">
          {buku.sinopsis}
        </p>

        <Link
          href="/katalog"
          className="mt-6 inline-block border-2 border-black bg-oranye px-5 py-2.5 text-sm font-bold hover:bg-kuning"
        >
          &larr; Kembali ke Katalog
        </Link>
      </div>
    </article>
  );
}
