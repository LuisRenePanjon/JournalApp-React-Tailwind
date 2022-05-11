import { StarIcon } from '@heroicons/react/outline'

export const NothingSelected = () => {
    return (
        <div className="items-center bg-slate-800 text-white flex flex-col justify-center h-screen w-screen">
            <p>¡Seleccione una entrada para visualizarla</p>
            <br />
            o cree una nueva!
            <StarIcon height={40} className="mt-5" />
        </div>
    )
}
