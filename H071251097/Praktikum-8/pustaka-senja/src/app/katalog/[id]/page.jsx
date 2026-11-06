import { dataBuku } from "@/data/dataBuku";
import Link from "next/link";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((b) => b.id === id);

  // Penanganan jika ID tidak ditemukan (F4.4)
  if (!buku) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center z-10">
        <div className="bg-stone-900/95 border-4 border-rose-500 rounded-3xl p-12 max-w-2xl shadow-2xl backdrop-blur-md space-y-6">
          <div className="text-8xl">⚠️</div>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-rose-400">
            Buku Tidak Ditemukan
          </h2>
          <p className="text-amber-200 font-sans text-lg sm:text-xl">
            Maaf, buku dengan ID #{id} tidak terdaftar di koleksi Pustaka Senja.
          </p>
          <Link
            href="/katalog"
            className="inline-block mt-6 bg-amber-400 hover:bg-amber-300 text-stone-950 font-sans font-black px-10 py-5 rounded-2xl text-base sm:text-lg uppercase tracking-wider shadow-2xl transition-all border-2 border-amber-200"
            
          >
            &larr; Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-6 sm:p-10 relative z-10 overflow-hidden">
      
      {/* Container Utama Raksasa 2-3x Lebih Besar */}
      <div className="max-w-7xl w-full bg-stone-950/95 border-4 border-amber-600/80 rounded-3xl p-8 sm:p-14 md:p-16 shadow-[0_0_120px_rgba(245,158,11,0.35)] backdrop-blur-md text-amber-50">
        
        {/* Tombol Kembali ke Katalog Jumbo */}
        <Link
          href="/katalog"
          className="inline-flex items-center gap-3 text-amber-400 hover:text-amber-300 text-lg sm:text-2xl font-sans font-black mb-10 transition-transform transform hover:-translate-x-2"
        >
          &larr; Kembali ke Katalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* SISI KIRI: Buklet Terbuka 3D Jumbo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-110 sm:w-95 sm:h-125 md:w-105 md:h-140 bg-amber-100 rounded-r-3xl shadow-[0_35px_90px_rgba(0,0,0,0.98)] border-l-[24px] border-stone-900 p-8 flex flex-col justify-between text-stone-900 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="border-2 border-stone-300 h-full p-6 sm:p-8 flex flex-col justify-between bg-amber-50/95 shadow-inner rounded-r-xl">
                
                <div className="text-center">
                  <p className="text-xs sm:text-sm tracking-widest uppercase font-black text-stone-500">
                    PUSTAKA SENJA
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl font-black text-stone-950 mt-3 leading-tight">
                    {buku.judul}
                  </h3>
                  <p className="text-base sm:text-lg text-stone-700 font-serif italic mt-2 font-bold">
                    {buku.penulis}
                  </p>
                </div>

                <div className="my-auto py-6 border-y-2 border-stone-300">
                  <p className="font-serif italic text-sm sm:text-base text-stone-800 text-center leading-relaxed">
                    "{buku.sinopsis}"
                  </p>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm text-stone-600 font-mono font-bold pt-2">
                  <span>HARDCOVER</span>
                  <span>{buku.tahun}</span>
                </div>

              </div>
            </div>
          </div>

          {/* SISI KANAN: Detail Informasi Teks Jumbo & Tajam */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badges Status & Kategori */}
            <div className="flex items-center gap-4">
              <span className="px-5 py-2 bg-amber-500/20 text-amber-300 border-2 border-amber-500/50 rounded-full text-sm sm:text-base font-sans font-black uppercase tracking-widest">
                {buku.kategori}
              </span>
              <span
                className={`px-5 py-2 rounded-full text-sm sm:text-base font-sans font-black uppercase border-2 shadow-lg ${
                  buku.tersedia
                    ? "bg-emerald-600 text-white border-emerald-300"
                    : "bg-rose-600 text-white border-rose-300"
                }`}
              >
                {buku.tersedia ? "✓ TERSEDIA" : "🔒 SEDANG DIPINJAM"}
              </span>
            </div>

            {/* Judul Utama Raksasa */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black text-amber-100 leading-tight drop-shadow-md">
              {buku.judul}
            </h1>
            
            {/* Penulis & Tahun */}
            <p className="text-2xl sm:text-3xl text-amber-300 font-sans font-extrabold italic">
              Penulis: {buku.penulis} ({buku.tahun})
            </p>

            {/* Sinopsis Lengkap */}
            <div className="pt-6 border-t-2 border-amber-900/80 space-y-3">
              <h3 className="text-sm sm:text-base font-sans font-black text-amber-400 uppercase tracking-widest">
                SINOPSIS BUKU LENGKAP:
              </h3>
              <p className="text-amber-100 text-lg sm:text-2xl leading-relaxed font-sans font-normal drop-shadow">
                {buku.sinopsis}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}