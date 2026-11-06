import Link from "next/link";
import Hero from "@/components/Hero";
import { dataBuku } from "@/data/dataBuku";

export default function BerandaPage() {
    const totalBuku = dataBuku.length;
    const bukuTersedia = dataBuku.filter((b) => b.tersedia).length;
    const bukuDipinjam = dataBuku.filter((b) => !b.tersedia).length;

    return (
        <div className="space-y-10">
        <Hero
            nama="Ruang Baca Pustaka Senja"
            slogan="Tempat singgah bertukar pikiran, menyelami halaman demi halaman, dan menemukan wawasan baru di sudut tenang sekitar kampus."
            lokasiJam="Jl. Teratai No. 12 (Dekat Gerbang Utama Kampus) • Buka: Senin - Sabtu, 09.00 - 21.00 WITA"
        />

        <section className="space-y-4">
            <div>
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                Ringkasan Koleksi Pustaka
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
                Informasi ketersediaan buku yang diperbarui secara langsung.
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Total Koleksi Buku
                </span>
                <p className="text-3xl font-extrabold text-stone-900 mt-2">
                {totalBuku} <span className="text-sm font-normal text-stone-500">Judul</span>
                </p>
            </div>

            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Buku Tersedia
                </span>
                <p className="text-3xl font-extrabold text-emerald-700 mt-2">
                {bukuTersedia} <span className="text-sm font-normal text-stone-500">Buku</span>
                </p>
            </div>

            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                Sedang Dipinjam
                </span>
                <p className="text-3xl font-extrabold text-rose-700 mt-2">
                {bukuDipinjam} <span className="text-sm font-normal text-stone-500">Buku</span>
                </p>
            </div>
            </div>
        </section>

        <section className="bg-amber-100/60 border border-amber-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-amber-950">
                Jelajahi Koleksi atau Ajukan Buku Baru
            </h3>
            <p className="text-sm text-amber-900/80 max-w-xl">
                Cari buku yang ingin Anda baca di katalog atau bantu pengelola menambahkan referensi baru melalui formulir usulan.
            </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
            <Link
                href="/katalog"
                className="px-5 py-2.5 rounded-xl bg-amber-800 text-white font-semibold text-sm hover:bg-amber-900 transition shadow-sm"
            >
                Buka Katalog
            </Link>
            <Link
                href="/usulan"
                className="px-5 py-2.5 rounded-xl bg-white border border-amber-300 text-amber-950 font-semibold text-sm hover:bg-amber-50 transition"
            >
                Usulkan Buku
            </Link>
            </div>
        </section>
        </div>
    );
}