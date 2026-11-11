import { useState } from 'react'
import RingkasanPesanan from './RingkasanPesanan';

export default function FormPesan({ 
    pesanan, totalHarga, subtotal, pajak, onHapus, onTambahQty, onKurangQty,
    nama, setNama, nomorMeja, setNomorMeja, metodePembayaran, setMetodePembayaran, onSubmit
}){
    const metodeBayar = ["GoPay", "OVO", "Dana", "Tunai", "ShoppeePay", "Rekening Bank"];
    return(
        <form onSubmit={onSubmit} className='text-xl font-bold pt-4 p-3 bg-white px-5 m-3 border-4 rounded-lg'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                {/* Left Column: Bill Calculation & Summary */}
                <RingkasanPesanan 
                    pesanan={pesanan}
                    totalHarga={totalHarga}
                    subtotal={subtotal}
                    pajak={pajak}
                    onHapus={onHapus}
                    onTambahQty={onTambahQty}
                    onKurangQty={onKurangQty}
                />

                {/* Right Column: Name, Table Number, Payment, & Submit Button */}
                <div className='flex flex-col gap-4'>
                    <div>
                        <span className='text-amber-800 border-b-4 border-black block mb-1'>Nama anda: </span>
                        <input 
                            className='border-3 rounded-lg p-1 w-full'
                            placeholder='John Doe' 
                            type="text" 
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>
                    <div>
                        <span className='text-amber-800 border-b-4 border-black block mb-1'>Nomor Meja: </span>
                        <input
                            className='border-3 rounded-lg p-1 w-full'
                            placeholder='1-9' 
                            type="number"
                            max='9'
                            min='1'
                            value={nomorMeja}
                            onChange={(e) => setNomorMeja(e.target.value)}
                        />
                    </div>    
                    <div>
                        <span className='text-2xl text-amber-800 border-b-4 border-black font-bold block mb-2'>
                            Metode Pembayaran
                        </span>
                        <div className='grid grid-cols-2 gap-2'>
                            {metodeBayar.map((bayar, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="payMethod"
                                        id={`option-${index}`}
                                        value={bayar}
                                        checked={metodePembayaran === bayar}
                                        onChange={(e) => setMetodePembayaran(e.target.value)}
                                    />
                                    <label 
                                        htmlFor={`option-${index}`}
                                        className='ml-2 cursor-pointer text-base'>
                                        {bayar}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button 
                        className='bg-amber-400 p-2 px-5 rounded-lg border-3 border-black shadow-[0_6px_0px_0px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:bg-amber-600 w-full font-bold transition-all -translate-y-1 hover:translate-y-0 hover:shadow-[0_0px_0px_0px_rgba(0,0,0,0),0_2px_4px_-1px_rgba(0,0,0,0.06)] active:bg-amber-950 active:text-white active:border-black cursor-pointer mt-2'
                        type="submit">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </form>
    );
}