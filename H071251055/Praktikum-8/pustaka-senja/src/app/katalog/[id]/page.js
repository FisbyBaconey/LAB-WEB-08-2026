import Link from "next/link";
import Stempel from "@/components/Stempel";
import { dataBuku, nomorPanggil } from "@/data/dataBuku";

export default async function DetailBuku({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="mx-auto max-w-xl border border-ink/20 bg-card p-8 text-center shadow-[0_14px_22px_-14px_rgba(60,30,20,0.5)]">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-stamp">Kartu tidak ada di laci</p>
        <h1 className="mt-3 font-display text-3xl font-light text-dusk">Buku tidak ditemukan</h1>
        <p className="mt-3 text-ink-soft">
          Buku dengan id &quot;{id}&quot; tidak ada di koleksi Pustaka Senja.
        </p>
        <Link
          href="/katalog"
          className="mt-6 inline-block border-b-4 border-gold bg-dusk px-5 py-2 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-dusk-soft"
        >
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const baris = [
    ["Pengarang", buku.penulis],
    ["Kategori", buku.kategori],
    ["Terbit", buku.tahun],
  ];

  return (
    <article className="relative mx-auto max-w-3xl border border-ink/20 bg-card px-6 pb-16 pt-7 shadow-[0_1px_0_rgba(0,0,0,0.06),0_18px_28px_-16px_rgba(60,30,20,0.55)] sm:px-12">
      <p className="border-b-2 border-stamp/70 pb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
        No. panggil · {nomorPanggil(buku.kategori, buku.id)}
      </p>

      <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-dusk sm:text-5xl">
        {buku.judul}
      </h1>

      <dl className="mt-5 font-mono text-sm sm:text-base">
        {baris.map(([label, nilai]) => (
          <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-2 border-b border-rule/60 py-2">
            <dt className="uppercase tracking-wider text-ink-soft">{label}</dt>
            <dd>{nilai}</dd>
          </div>
        ))}
        <div className="grid grid-cols-[6.5rem_1fr] items-center gap-2 border-b border-rule/60 py-3">
          <dt className="uppercase tracking-wider text-ink-soft">Status</dt>
          <dd>
            <Stempel tersedia={buku.tersedia} />
          </dd>
        </div>
      </dl>

      <h2 className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">Sinopsis</h2>
      <p className="mt-3 text-lg leading-8 first-letter:float-left first-letter:pr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-ember sm:text-xl sm:leading-9">
        {buku.sinopsis}
      </p>

      <Link
        href="/katalog"
        className="mt-10 inline-block border-2 border-dusk px-5 py-2 font-mono text-xs uppercase tracking-[0.16em] text-dusk transition-colors hover:bg-paper-deep"
      >
        ← Kembali ke Katalog
      </Link>

      <span
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 size-4 -translate-x-1/2 rounded-full border border-ink/25 bg-paper shadow-[inset_0_2px_3px_rgba(0,0,0,0.25)]"
      />
    </article>
  );
}
