import Link from "next/link";
import Hero from "@/components/Hero";
import dataBuku from "@/data/dataBuku";

export default function Beranda() {
  const total = dataBuku.length;
  const tersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const dipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  const statistik = [
    { label: "Total Koleksi Buku", nilai: total, warna: "bg-yellow-300" },
    { label: "Buku Tersedia", nilai: tersedia, warna: "bg-lime-300" },
    { label: "Buku Dipinjam", nilai: dipinjam, warna: "bg-pink-300" },
  ];

  return (
    <div className="space-y-12">
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang baca komunitas di dekat kampus. Pinjam buku, simpan favoritmu, dan usulkan judul baru untuk koleksi kami."
        lokasi="Dekat kampus, Makassar"
        jamBuka="Senin - Sabtu, 09.00 - 20.00"
      >
        <Link
          href="/katalog"
          className="border-2 border-black bg-yellow-300 px-6 py-3 font-bold shadow-[5px_5px_0_#000] transition active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Lihat Katalog
        </Link>
        <Link
          href="/usulan"
          className="border-2 border-black bg-white px-6 py-3 font-bold shadow-[5px_5px_0_#000] transition active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Usulkan Buku
        </Link>
      </Hero>

      <section aria-label="Ringkasan koleksi">
        <h2 className="mb-6 font-display text-3xl font-extrabold">
          Koleksi kami saat ini
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {statistik.map((item) => (
            <div key={item.label} className="perspective-[900px]">
              <div
                className={`border-2 border-black p-6 shadow-[8px_8px_0_#000] transition-transform duration-300 hover:transform-[rotateX(6deg)_rotateY(-8deg)] ${item.warna}`}
              >
                <p className="font-display text-7xl font-extrabold leading-none">
                  {item.nilai}
                </p>
                <p className="mt-3 font-bold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}