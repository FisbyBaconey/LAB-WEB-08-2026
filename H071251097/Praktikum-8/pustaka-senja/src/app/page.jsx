import Hero from "@/components/Hero";
import { dataBuku } from "@/data/dataBuku";

export default function HomePage() {
  const totalKoleksi = dataBuku.length;
  const bukuTersedia = dataBuku.filter((b) => b.tersedia === true).length;
  const bukuDipinjam = dataBuku.filter((b) => b.tersedia === false).length;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Atmosphere Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.35] contrast-[1.2] scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/40 to-amber-950/20 pointer-events-none" />

      {/* Hero Section */}
      <Hero
        ruangBaca="Pustaka Senja Komunitas"
        slogan="Tempat yang tenang untuk menemukan gagasan besar, menyelami kisah inspiratif, dan memperluas wawasan Anda."
        lokasiJam="Dekat Kampus Utama • Buka Setiap Hari (09.00 - 21.00 WIB)"
      />

      {/* Ringkasan Statistik Dinamis F2 */}
      <div className="relative z-10 grid grid-cols-3 gap-6 max-w-4xl w-full mx-auto pt-8 px-6">
        <div className="bg-stone-900/90 border-2 border-amber-500/60 rounded-2xl p-5 text-center backdrop-blur-md shadow-2xl">
          <p className="text-4xl sm:text-5xl font-serif font-black text-amber-400">{totalKoleksi}</p>
          <p className="text-xs sm:text-sm font-serif font-black text-amber-200/90 uppercase tracking-wider mt-1">Total Koleksi</p>
        </div>

        <div className="bg-stone-900/90 border-2 border-emerald-500/60 rounded-2xl p-5 text-center backdrop-blur-md shadow-2xl">
          <p className="text-4xl sm:text-5xl font-serif font-black text-emerald-400">{bukuTersedia}</p>
          <p className="text-xs sm:text-sm font-serif font-black text-emerald-200/90 uppercase tracking-wider mt-1">Buku Tersedia</p>
        </div>

        <div className="bg-stone-900/90 border-2 border-rose-500/60 rounded-2xl p-5 text-center backdrop-blur-md shadow-2xl">
          <p className="text-4xl sm:text-5xl font-serif font-black text-rose-400">{bukuDipinjam}</p>
          <p className="text-xs sm:text-sm font-serif font-black text-rose-200/90 uppercase tracking-wider mt-1">Sedang Dipinjam</p>
        </div>
      </div>
    </div>
  );
}