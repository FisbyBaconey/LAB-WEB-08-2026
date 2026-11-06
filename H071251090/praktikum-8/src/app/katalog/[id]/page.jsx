import Link from "next/link";
import { dataBuku } from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
    const { id } = await params;
    const buku = dataBuku.find((item) => item.id === id);

    if (!buku) {
        return (
        <div className="max-w-xl mx-auto py-16 text-center space-y-4">
            <div className="text-5xl">🔍</div>
            <h1 className="text-2xl font-bold text-stone-900">
            Buku Tidak Ditemukan
            </h1>
            <p className="text-sm text-stone-600">
            Buku dengan ID &quot;{id}&quot; tidak terdaftar dalam koleksi Pustaka Senja.
            </p>
            <div className="pt-2">
            <Link
                href="/katalog"
                className="inline-block px-5 py-2.5 rounded-xl bg-amber-800 text-white text-sm font-semibold hover:bg-amber-900 transition"
            >
                &larr; Kembali ke Katalog
            </Link>
            </div>
        </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
        <Link
            href="/katalog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 hover:text-amber-950 transition"
        >
            <span>&larr;</span> Kembali ke Katalog
        </Link>

        <article className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-md bg-stone-100 text-stone-700">
                {buku.kategori}
            </span>
            <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                buku.tersedia
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-rose-100 text-rose-800"
                }`}
            >
                {buku.tersedia ? "Status: Tersedia" : "Status: Sedang Dipinjam"}
            </span>
            </div>

            <div>
            <h1 className="text-3xl font-extrabold text-stone-900 leading-tight">
                {buku.judul}
            </h1>
            <p className="text-base text-stone-600 mt-2">
                Penulis: <span className="font-medium text-stone-800">{buku.penulis}</span> &bull; Terbit: {buku.tahun}
            </p>
            </div>

            <div className="space-y-2 pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-stone-500">
                Sinopsis Buku
            </h2>
            <p className="text-stone-700 leading-relaxed text-base bg-stone-50 p-5 rounded-2xl border border-stone-100">
                {buku.sinopsis}
            </p>
            </div>
        </article>
        </div>
    );
}