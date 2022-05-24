import { SideBar } from '../journal'

export const NoteAppBar = () => {

    const handleDeleteClick = () => {
        console.log('Delete Clicked')
    }

    return (
        <div className="items-center bg-gray-900 text-white flex justify-between px-5 py-4 ">
            <SideBar/>
            <span>28 de marzo 2022</span>
            <div>
                <button  onClick={handleDeleteClick} className='mx-2 hover:bg-red-300 transition-all p-3 bg-red-600  rounded-lg'>
                    Borrar
                </button>
            </div>
        </div>
    )
}
