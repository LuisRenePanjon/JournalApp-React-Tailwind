import { useState } from 'react'
import { MenuIcon, PencilAltIcon, XIcon } from '@heroicons/react/solid';
import {useDispatch, useSelector} from 'react-redux';
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './';
import {startNewNote} from "../../actions/notes";

export const SideBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const {name} = useSelector(state => state?.auth);

    const dispatch = useDispatch()

    const handleAddEntry = () => {
        dispatch( startNewNote() );
    }

    const logout = () => {
        dispatch(startLogout());
    }

    return (
        <>
            {showSidebar ? (
                <XIcon
                    className="flex text-4xl text-white cursor-pointer z-50"
                    width={40}
                    height={40}
                    onClick={() => setShowSidebar(!showSidebar)}
                />
            ) : (
                <MenuIcon
                    className=" z-30 flex cursor-pointer text-white"
                    width="40"
                    height="40"
                    onClick={() => setShowSidebar(!showSidebar)}
                />
            )}

            <div className={`top-0 left-0 w-[30vw] min-w-min rounded-r-3xl bg-sky-900 text-white fixed h-full z-40 ease-in-out duration-300  ${showSidebar ? "translate-x-0 " : "-translate-x-full"
                }`}>

                <h3 className="mt-20 text-center text-3xl font-semibold text-white">Hola {name}</h3>
                {/* Options */}
                <div className=" text-white mt-10 justify-start flex flex-row items-center w-full mx-10 cursor-pointer hover:text-gray-400 transition-all"
                    onClick={handleAddEntry}>
                    <h2 className="text-xl font-medium 
                        ">Nueva entrada
                    </h2>
                    <PencilAltIcon className="cursor-pointer justify-center ml-2 "
                        width="25"
                        height="25"
                    />
                </div>
                <JournalEntries />

                <div className="absolute top-5 right-5 w-auto">
                    <button
                        onClick={logout}
                        className="bg-red-600  p-3 rounded-md hover:bg-red-300 transition-all ease-out">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </>
    )
}
