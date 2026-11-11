import { useState } from 'react';
import Navbar from './assets/components/Navbar';
import MenuCard from './assets/components/MenuCard';
import FormPesan from './assets/components/FormPesan';
import Footer from './assets/components/Footer';

import KopiSusu from "./assets/gambarMenu/kopiSusu.png";
import Americano from "./assets/gambarMenu/americano.png";
import Cappucino from "./assets/gambarMenu/Cappucino.png";
import MatchaLatte from "./assets/gambarMenu/matchaLatte.png";
import TehTarik from "./assets/gambarMenu/tehTarik.png";
import CoklatPanas from "./assets/gambarMenu/coklatPanas.png";
import RotiBakar from "./assets/gambarMenu/rotiBakar.png";
import PisangGoreng from "./assets/gambarMenu/pisangGoreng.png";
import NasiGoreng from "./assets/gambarMenu/nasiGoreng.png";

const dataMenu = [
  {
      id: 1,
      nama: "Kopi Susu",
      kategori: "Kopi",
      harga: 18000,
      tersedia: true,
      deskripsi: "Espresso dengan susu segar dan gula aren",
      gambar: KopiSusu
  },
  {
      id: 2,
      nama: "Americano",
      kategori: "Kopi",
      harga: 15000,
      tersedia: true,
      deskripsi: "Espresso dengan air panas, rasa kuat dan bersih",
      gambar: Americano
  },
  {
      id: 3,
      nama: "Cappucino",
      kategori: "Kopi",
      harga: 22000,
      tersedia: true,
      deskripsi: "Espresso, susu panas dan busa susu tebal",
      gambar: Cappucino
  },
  {
      id: 4,
      nama: "Matcha Latte",
      kategori: "Non-Kopi",
      harga: 24000,
      tersedia: true,
      deskripsi: "The hijau matcha dengan susu",
      gambar: MatchaLatte
  },
  {
      id: 5,
      nama: "Teh Tarik",
      kategori: "Non-Kopi",
      harga: 14000,
      tersedia: false,
      deskripsi: "Teh susu yang ditarik hingga berbusa",
      gambar: TehTarik
  },
  {
      id: 6,
      nama: "Coklat Panas",
      kategori: "Non-Kopi",
      harga: 20000,
      tersedia: true,
      deskripsi: "Coklat pekat dengan susu hangat",
      gambar: CoklatPanas
  },
  {
      id: 7,
      nama: "Roti Bakar",
      kategori: "Makanan",
      harga: 16000,
      tersedia: true,
      deskripsi: "Roti tebal denagn selai coklat dan keju",
      gambar: RotiBakar
  },
  {
      id: 8,
      nama: "Pisang Goreng",
      kategori: "Makanan",
      harga: 12000,
      tersedia: false,
      deskripsi: "Pisang goreng renyah dengan taburan keju",
      gambar: PisangGoreng
 },
 {
      id: 9,
      nama: "Nasi Goreng",
      kategori: "Makanan",
      harga: 25000,
      tersedia: true,
      deskripsi: "Nasi goreng kampung dengan telur mata sapi",
      gambar: NasiGoreng
  },
];

export default function App() {
    const [pesanan, setPesanan] = useState([]);
    const [kategoriAktif, setKategoriAktif] = useState("All");
    const [showMenuDropdown, setShowMenuDropdown] = useState(false);
    const [nama, setNama] = useState("");
    const [nomorMeja, setNomorMeja] = useState("");
    const [metodePembayaran, setMetodePembayaran] = useState("");
    
    const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

    const categories = ["All", ...new Set(dataMenu.map(m => m.kategori))];

    const filteredMenu = kategoriAktif === "All" 
        ? dataMenu 
        : dataMenu.filter(m => m.kategori === kategoriAktif);

    const handleTambahPesanan = (menu) => {
        if (!menu.tersedia) return;
        setPesanan(prev => {
            const existing = prev.find(item => item.id === menu.id);
            if (existing) {
                return prev.map(item => item.id === menu.id ? { ...item, qty: item.qty + 1 } : item);
            } else {
                return [...prev, { ...menu, qty: 1 }];
            }
        });
        setStatusMessage({ type: "", text: "" });
    };

    const handleHapusPesanan = (id) => {
        setPesanan(prev => prev.filter(item => item.id !== id));
    };

    const handleKurangPesanan = (id) => {
        setPesanan(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, qty: item.qty - 1 };
            }
            return item;
        }).filter(item => item.qty > 0));
    };

    const subtotal = pesanan.reduce((acc, item) => acc + (item.harga * item.qty), 0);
    const pajak = subtotal * 0.1;
    const totalHarga = subtotal + pajak;
    const totalItemCount = pesanan.reduce((acc, item) => acc + item.qty, 0);

    const handleSubmitPesan = (e) => {
        e.preventDefault();
        
        if (pesanan.length === 0) {
            setStatusMessage({ type: "error", text: "Pesanan masih kosong! Silakan tambah menu terlebih dahulu." });
            return;
        }
        if (!nama.trim()) {
            setStatusMessage({ type: "error", text: "Silakan masukkan nama Anda!" });
            return;
        }
        if (!nomorMeja || nomorMeja < 1 || nomorMeja > 9) {
            setStatusMessage({ type: "error", text: "Nomor meja harus diisi antara 1 sampai 9!" });
            return;
        }
        if (!metodePembayaran) {
            setStatusMessage({ type: "error", text: "Silakan pilih metode pembayaran!" });
            return;
        }

        setStatusMessage({ 
            type: "success", 
            text: `Terima kasih, ${nama}! Pesanan untuk Meja ${nomorMeja} berhasil dikirim.` 
        });
        setPesanan([]);
        setNama("");
        setNomorMeja("");
        setMetodePembayaran("");
    };

    return (
        <div className="min-h-screen flex flex-col bg-amber-50">
            <Navbar 
                navIndex={["Pesanan", "Menu"]}
                categories={categories}
                kategoriAktif={kategoriAktif}
                setKategoriAktif={setKategoriAktif}
                showMenuDropdown={showMenuDropdown}
                setShowMenuDropdown={setShowMenuDropdown}
                totalItemCount={totalItemCount}
                totalHarga={totalHarga}
            />
            
            <main className="grow p-4">
                {statusMessage.text && (
                    <div className={`border-4 p-4 rounded-lg m-5 text-center font-bold text-xl ${
                        statusMessage.type === "error" 
                            ? "bg-red-100 border-red-500 text-red-700" 
                            : "bg-green-100 border-green-500 text-green-700"
                    }`}>
                        {statusMessage.text}
                    </div>
                )}
                
                <MenuCard 
                    dataMenu={filteredMenu} 
                    onTambah={handleTambahPesanan} 
                />

                <FormPesan 
                    pesanan={pesanan}
                    totalHarga={totalHarga}
                    subtotal={subtotal}
                    pajak={pajak}
                    onHapus={handleHapusPesanan}
                    onTambahQty={handleTambahPesanan}
                    onKurangQty={handleKurangPesanan}
                    nama={nama}
                    setNama={setNama}
                    nomorMeja={nomorMeja}
                    setNomorMeja={setNomorMeja}
                    metodePembayaran={metodePembayaran}
                    setMetodePembayaran={setMetodePembayaran}
                    onSubmit={handleSubmitPesan}
                />
            </main>

            <Footer />
        </div>
    );
}