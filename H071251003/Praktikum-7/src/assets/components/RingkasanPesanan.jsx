import { useState } from 'react'

export default function RingkasanPesanan({ pesanan, totalHarga, subtotal, pajak, onHapus, onTambahQty, onKurangQty }){
    return(
        <div>
            <span className='text-3xl border-b-4 border-black font-bold text-amber-800'>
                Checkout Pesanan
            </span>
            <ul className='gap-10 mt-5 flex flex-col'>
                {pesanan.length === 0 ? (
                    <li className='text-xl py-2 pb-1 font-medium border-b-2 border-gray-300 text-gray-500 italic'>
                        Belum ada pesanan. Silakan pilih menu di atas!
                    </li>
                ) : (
                    pesanan.map((item) => (
                        <li key={item.id} className='text-xl py-2 pb-1 font-medium border-b-2 border-gray-300 flex justify-between items-center'>
                            <span>{item.nama} (Rp. {item.harga.toLocaleString('id-ID')})</span>
                            <div className="flex items-center gap-3">
                                <button 
                                    type="button" 
                                    onClick={() => onKurangQty(item.id)}
                                    className="px-2 bg-red-200 border-2 border-black rounded text-sm font-bold cursor-pointer"
                                >
                                    -
                                </button>
                                <span>{item.qty}</span>
                                <button 
                                    type="button" 
                                    onClick={() => onTambahQty(item)}
                                    className="px-2 bg-green-200 border-2 border-black rounded text-sm font-bold cursor-pointer"
                                >
                                    +
                                </button>
                                <span className="w-28 text-right">Rp. {(item.harga * item.qty).toLocaleString('id-ID')}</span>
                                <button 
                                    type="button" 
                                    onClick={() => onHapus(item.id)}
                                    className="text-red-600 text-sm border border-red-500 px-2 py-1 rounded hover:bg-red-50 cursor-pointer"
                                >
                                    Hapus
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
            <div className='flex flex-col items-end mt-4 gap-1 text-lg font-bold'>
                <span>Subtotal: Rp. {subtotal.toLocaleString('id-ID')}</span>
                <span>Pajak (10%): Rp. {pajak.toLocaleString('id-ID')}</span>
                <span className='text-2xl text-amber-900 border-t-2 border-black pt-2'>
                    Total harga: Rp. {totalHarga.toLocaleString('id-ID')} (termasuk pajak 10%)
                </span>
            </div>
        </div>
    );
}