"use client";

import { useState } from "react";

export default function UsulanPage() {
  const [formData, setFormData] = useState({
    namaPengusul: "",
    judulBuku: "",
    kategori: "Teknologi",
    alasan: "",
  });

  const [daftarUsulan, setDaftarUsulan] = useState([]);
  const [errorPesan, setErrorPesan] = useState("");
  const [suksesPesan, setSuksesPesan] = useState(false);

  const categories = ["Teknologi", "Fiksi", "Pengembangan Diri"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorPesan("");
    setSuksesPesan(false);

    // Validasi Form (F5.2)
    if (
      !formData.namaPengusul.trim() ||
      !formData.judulBuku.trim() ||
      !formData.alasan.trim()
    ) {
      setErrorPesan("Mohon lengkapi semua kolom formulir usulan sebelum mengirim!");
      return;
    }

    // Tambahkan ke daftar usulan sesi (F5.3)
    const usulanBaru = { id: Date.now(), ...formData };
    setDaftarUsulan([usulanBaru, ...daftarUsulan]);

    // Reset Form Input
    setFormData({
      namaPengusul: "",
      judulBuku: "",
      kategori: "Teknologi",
      alasan: "",
    });

    setSuksesPesan(true);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-10 relative z-10 overflow-hidden select-none">
      
      {/* Background Perpustakaan Senja */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.35] contrast-[1.25] scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-amber-950/30 pointer-events-none" />

      {/* KARTU SURAT USULAN VINTAGE JUMBO (PERBESAR 2X LIPAT & RAPI) */}
      <div className="relative z-10 max-w-5xl w-full bg-[#1c1714] border-4 border-amber-600/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-[0_0_120px_rgba(245,158,11,0.35)] backdrop-blur-md text-amber-100">
        
        {/* Lembaran Kertas Antik Krem Dalam Kartu */}
        <div className="relative bg-[#f7f2e7] rounded-2xl p-8 sm:p-12 text-stone-900 border-l-[24px] border-amber-950 shadow-2xl">
          
          {/* Header Formulir Jumbo */}
          <div className="text-center space-y-3 mb-8 border-b-2 border-stone-300 pb-6">
            <span className="px-6 py-2 rounded-full bg-amber-900/10 text-stone-900 text-sm sm:text-base font-mono uppercase tracking-widest font-black border-2 border-stone-400 shadow-sm inline-block">
              📜 FORM USULAN PEMUSTAKA
            </span>
            <h1 className="text-4xl sm:text-6xl font-sans font-black text-stone-950 tracking-tight mt-2 drop-shadow-sm">
              Usulkan Buku Baru
            </h1>
            <p className="text-stone-700 text-base sm:text-xl font-sans font-medium max-w-2xl mx-auto">
              Sampaikan usulan karya yang ingin Anda temukan di rak Pustaka Senja.
            </p>
          </div>

          {/* Pesan Error Peringatan */}
          {errorPesan && (
            <div className="mb-6 p-4 bg-rose-100 border-2 border-rose-500 text-rose-900 rounded-2xl text-sm sm:text-base font-sans font-bold text-center shadow-md">
              ⚠️ {errorPesan}
            </div>
          )}

          {/* Pesan Sukses Berhasil */}
          {suksesPesan && (
            <div className="mb-6 p-4 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 rounded-2xl text-sm sm:text-base font-sans font-bold text-center shadow-md">
              ✨ Usulan Anda berhasil dikirim dan dicatat di daftar sesi ini!
            </div>
          )}

          {/* Controlled Form Interaktif */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Grid Input Nama & Judul */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-sans font-black text-stone-900 mb-2 uppercase tracking-wider">
                  Nama Pengusul
                </label>
                <input
                  type="text"
                  name="namaPengusul"
                  value={formData.namaPengusul}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda..."
                  className="w-full px-5 py-4 rounded-xl bg-amber-100/80 border-2 border-stone-400 text-stone-950 font-sans text-base sm:text-lg placeholder-stone-400 focus:outline-none focus:border-amber-700 focus:bg-amber-50 shadow-inner transition-all font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-sans font-black text-stone-900 mb-2 uppercase tracking-wider">
                  Judul Buku yang Diusulkan
                </label>
                <input
                  type="text"
                  name="judulBuku"
                  value={formData.judulBuku}
                  onChange={handleChange}
                  placeholder="Masukkan judul buku..."
                  className="w-full px-5 py-4 rounded-xl bg-amber-100/80 border-2 border-stone-400 text-stone-950 font-sans text-base sm:text-lg placeholder-stone-400 focus:outline-none focus:border-amber-700 focus:bg-amber-50 shadow-inner transition-all font-semibold"
                />
              </div>
            </div>

            {/* Dropdown Select Kategori */}
            <div>
              <label className="block text-xs sm:text-sm font-sans font-black text-stone-900 mb-2 uppercase tracking-wider">
                Kategori Buku
              </label>
              <select
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-amber-100/80 border-2 border-stone-400 text-stone-950 font-sans text-base sm:text-lg focus:outline-none focus:border-amber-700 focus:bg-amber-50 shadow-inner transition-all font-semibold cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Textarea Alasan */}
            <div>
              <label className="block text-xs sm:text-sm font-sans font-black text-stone-900 mb-2 uppercase tracking-wider">
                Alasan Usulan
              </label>
              <textarea
                rows={3}
                name="alasan"
                value={formData.alasan}
                onChange={handleChange}
                placeholder="Tuliskan alasan mengapa buku ini berharga untuk Pustaka Senja..."
                className="w-full px-5 py-4 rounded-xl bg-amber-100/80 border-2 border-stone-400 text-stone-950 font-sans text-base sm:text-lg placeholder-stone-400 focus:outline-none focus:border-amber-700 focus:bg-amber-50 shadow-inner transition-all resize-none font-semibold"
              />
            </div>

            {/* Tombol Kirim Usulan Emas Jumbo */}
            <button
              type="submit"
              className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-sans font-black rounded-2xl shadow-xl transition-all text-base sm:text-xl tracking-widest uppercase border-2 border-amber-300 mt-4 flex items-center justify-center gap-3 cursor-pointer transform hover:scale-[1.01]"
            >
              <span>🖋️ KIRIM USULAN BUKU</span>
            </button>
          </form>

          {/* Riwayat Usulan Sesi Ini (F5.3) */}
          {daftarUsulan.length > 0 && (
            <div className="mt-8 pt-6 border-t-2 border-stone-300 space-y-3">
              <h3 className="text-sm font-sans font-black text-stone-900 uppercase tracking-wider">
                📋 Daftar Usulan Sesi Ini ({daftarUsulan.length}):
              </h3>
              <div className="max-h-36 overflow-y-auto space-y-3 pr-2">
                {daftarUsulan.map((u) => (
                  <div
                    key={u.id}
                    className="p-4 bg-amber-100/90 rounded-xl border-2 border-stone-300 text-sm font-sans shadow-sm"
                  >
                    <p className="font-black text-stone-950 text-base">
                      "{u.judulBuku}" - <span className="font-bold text-amber-800">[{u.kategori}]</span>
                    </p>
                    <p className="text-xs sm:text-sm text-stone-700 mt-1 font-medium">
                      Pengusul: <span className="font-bold">{u.namaPengusul}</span> | Alasan: {u.alasan}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Card */}
          <div className="mt-6 pt-4 border-t border-stone-300 flex justify-between items-center text-xs text-stone-600 font-mono font-bold">
            <span>PUSTAKA SENJA DIGITAL</span>
            <span>SENJA READING ROOM</span>
          </div>

        </div>
      </div>

    </div>
  );
}