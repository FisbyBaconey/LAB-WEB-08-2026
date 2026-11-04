"use client";

import { useState } from "react";
import Link from "next/link";

export default function BukuCard({ buku }) {
    const [suka, setSuka] = useState(false);

    return (
        <article className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
        <div>
            <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/60">
                {buku.kategori}
            </span>
            <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                buku.tersedia
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-rose-50 text-rose-700 border border-rose-200"
                }`}
            >
                {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
            </span>
            </div>

            <h3 className="text-lg font-bold text-stone-900 leading-snug group-hover:text-amber-900 transition-colors line-clamp-2">
            {buku.judul}
            </h3>
            <p className="text-sm text-stone-500 mt-1.5">
            {buku.penulis} &bull; <span className="text-stone-400">{buku.tahun}</span>
            </p>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
            <button
            type="button"
            onClick={() => setSuka(!suka)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 border ${
                suka
                ? "bg-rose-50 text-rose-600 border-rose-200"
                : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
            }`}
            >
            <span>{suka ? "❤️" : "🤍"}</span>
            <span>{suka ? "Disukai" : "Favorit"}</span>
            </button>

            <Link
            href={`/katalog/${buku.id}`}
            className="text-xs font-semibold text-amber-900 bg-amber-100/70 hover:bg-amber-200/80 px-3.5 py-1.5 rounded-lg transition"
            >
            Lihat Detail &rarr;
            </Link>
        </div>
        </article>
    );
}