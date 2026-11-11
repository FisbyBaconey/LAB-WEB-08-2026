import { useState } from 'react';
import { SiCoffeescript } from 'react-icons/si';

export default function Navbar({ navIndex, categories, kategoriAktif, setKategoriAktif, showMenuDropdown, setShowMenuDropdown, totalItemCount, totalHarga }){
    return(
        <section className='bg-amber-400 font-sans border-b-4 pb-1 font-extrabold relative'>
            <div className='flex flex-rows p-3 justify-between'>
                <div className='flex justify-start gap-5 ml-5'>
                    <SiCoffeescript className='text-7xl self-end'/>
                    <div className='font-extrabold flex flex-col gap-2'>
                        <span className=' text-6xl'>Kopi Senja</span>
                        <span>lorem ipsum dolor sit amet</span>
                    </div>
                </div>
                <div className="flex flex-col items-end self-center">
                    <span className="text-lg bg-amber-200 px-3 py-1 rounded-md border-2 border-black mb-1">
                        Pesanan: {totalItemCount} item | Total: Rp. {totalHarga.toLocaleString('id-ID')}
                    </span>
                    <ul className='gap-6 flex self-center text-2xl'>
                        {navIndex.map((item, index) => (
                            <li 
                                className='hover:bg-amber-500 p-1 px-3 rounded-sm active:bg-amber-700 transition-colors cursor-pointer' 
                                key={index}
                                onClick={() => {
                                    if (item === "Menu") {
                                        setShowMenuDropdown(!showMenuDropdown);
                                    } else if (item === "Pesanan") {
                                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                    }
                                }}
                            >
                                {item} {item === "Menu" && "▼"}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {showMenuDropdown && (
                <div className="absolute right-10 bg-white border-4 border-black rounded-lg shadow-xl p-3 z-50 flex flex-col gap-2 mt-1">
                    <span className='text-sm text-gray-500 border-b-2 pb-1'>Pilih Kategori Menu:</span>
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setKategoriAktif(cat);
                                setShowMenuDropdown(false);
                            }}
                            className={`text-left px-3 py-1 rounded hover:bg-amber-200 ${kategoriAktif === cat ? 'bg-amber-400 font-bold' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}
        </section>
    );
}