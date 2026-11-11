import { useState } from 'react'

export default function MenuList({ DataMenu, Harga, Deskripsi, Tersedia, onTambah }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="pt-4 w-full">            
            <div className="grid grid-cols-2 gap-3 items-center">
                <span className='font-bold text-left'>Harga: </span>
                <span className='text-right'>Rp. {Harga.toLocaleString('id-ID')}</span>
                
                <div 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className='text-lg col-span-2 mb-2 cursor-pointer bg-amber-50 p-2 rounded border border-amber-200 text-left'
                    title="Klik untuk melihat detail"
                >
                    <span className="text-sm text-amber-700 block font-semibold">
                        {isExpanded ? '▲ Sembunyikan Detail' : '▼ Lihat Detail Deskripsi'}
                    </span>
                    {isExpanded && <p className="mt-1 text-base text-gray-700">{Deskripsi}</p>}
                </div>

                <button 
                    onClick={onTambah}
                    disabled={!Tersedia}
                    className={`shadow-[0px_6px_0px_0px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-lg border-3 p-1 px-5 w-full font-bold col-span-2 transition-all ${
                        Tersedia 
                            ? 'bg-amber-400 hover:bg-amber-600 -translate-y-1 hover:translate-y-0 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0),0_2px_4px_-1px_rgba(0,0,0,0.06)] active:bg-amber-950 active:text-white active:border-black cursor-pointer' 
                            : 'bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed shadow-none'
                    }`} 
                    type="button"
                >
                    {Tersedia ? 'Tambah' : 'Habis'}
                </button>
            </div>
        </div>
    );
}