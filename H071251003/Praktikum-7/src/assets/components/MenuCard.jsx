import { useState } from 'react';
import MenuList from './MenuList';

export default function MenuCard({ dataMenu, onTambah }){
    return(
        <div className='px-20 font-bold'>
            <span className='opacity-0 flex justify-center self-center align-middle text-3xl font-medium text-red-600'>warn</span>
            <ul className='gap-5 mx-7 mt-5 grid grid-cols-3 items-center'>
                {dataMenu.map((Menu) => (
                    <div key={Menu.id} className='bg-white m-1 p-4 border-4 rounded-lg h-fit text-center text-xl flex flex-col items-center'>
                        <div className={`w-full flex flex-col items-center ${!Menu.tersedia ? 'opacity-50' : ''}`}>
                            <span>{Menu.nama}</span>
                            <img className=' p-3 h-65 w-fit object-contain'
                                src={Menu.gambar}
                                alt={"Menu_" + Menu.nama}
                            ></img>
                            <MenuList
                                DataMenu={Menu}
                                Harga={Menu.harga}
                                Deskripsi={Menu.deskripsi}
                                Tersedia={Menu.tersedia}
                                onTambah={() => onTambah(Menu)}
                            />
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}