import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export const NoteForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log(errors);
    }
    return (
        <form className="flex flex-col h-full items-center m-20 min-w-max"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="min-w-fit w-2/5 ">
                <input
                    {...register('title', { required: "Este campo es requerido", maxLength: 30, })}
                    placeholder="Algún título asombroso"
                    type="text"
                    autoComplete="off"
                    className="focus:outline-none text-gray-600 text-xl font-bold my-2 p-2 border-2 rounded-lg shadow-lg border-current w-full"
                />
                <ErrorMessage errors={errors} name="title" as="p" className='text-red-600'/>
                {errors.title && <p className="text-red-600">Máximo 30 caracteres</p>}
            </div>
            <div className="min-w-fit w-2/5 ">
                <textarea
                    {...register('description',{required: "Este campo es requerido"})}
                    placeholder="¿Qué paso hoy?"
                    className="focus:outline-none text-gray-600 text-xl font-bold my-2 p-2 border-2 rounded-lg shadow-lg border-current h-24 w-full resize-none"
                />
                <ErrorMessage errors={errors} name="description" as="p" className='text-red-600'/>
            </div>
            <div className="my-2 p-4 w-2/5 flex items-center justify-center rounded-lg border-2 border-dashed border-current text-gray-600  cursor-pointer min-w-fit">
                <img src="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg" alt="placeholder de imagen" className="h-28 rounded-lg shadow-lg min-w-fit"
                />
            </div>
            <input type="submit" value="Guardar" />

        </form>
    )
}
