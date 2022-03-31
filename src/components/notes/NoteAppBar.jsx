import React from 'react'
import { SideBar } from '../journal/SideBar'

export const NoteAppBar = () => {
    return (
        <div className="items-center bg-gray-900 text-white flex justify-between px-5 py-4 ">
            <SideBar/>
            <span>28 de marzo 2022</span>
            <div>
                <button className='mx-2 hover:text-slate-400 transition-all'>
                    Picture
                </button>
                <button className='mx-2 hover:text-slate-400 transition-all'>
                    Guardar
                </button>
            </div>
        </div>
    )
}
