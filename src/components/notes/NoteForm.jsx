import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { activeNote, startSaveNote } from '../../actions/notes';

export const NoteForm = () => {

    const dispatch = useDispatch()
    const note = useSelector(state => state.notes.active);
    const { register, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues: useMemo(() => note, [note]) });

    useEffect(() => {
        reset(note);
    }, [note, reset]);


    const onSubmit = (data) => {
        dispatch(activeNote(note.id, {...data}));
        dispatch(startSaveNote({ ...data, id: note.id}))
        console.log(note);
    }
    return (
        <form className="flex flex-col h-full items-center m-20 min-w-max"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="min-w-fit w-2/5 ">
                <input
                    autoFocus
                    {...register('title', { required: "Este campo es requerido", maxLength: 30, minLength: 3 })}

                    placeholder="Algún título asombroso"
                    type="text"
                    autoComplete="off"
                    className="focus:outline-none text-gray-600 text-xl font-bold my-2 p-2 border-2 rounded-lg shadow-lg border-current w-full"
                />
                <ErrorMessage errors={errors} name="title" as="p" className='text-red-600' />
                {errors.title && <p className="text-red-600">Máximo 30 caracteres</p>}
            </div>
            <div className="min-w-fit w-2/5 ">
                <textarea
                    {...register('body', { required: "Este campo es requerido" })}
                    placeholder="¿Qué paso hoy?"
                    className="focus:outline-none text-gray-600 text-xl font-bold my-2 p-2 border-2 rounded-lg shadow-lg border-current h-24 w-full resize-none"
                />
                <ErrorMessage errors={errors} name="body" as="p" className='text-red-600' />
            </div>
            {note.url ?
                <div className="my-2 p-4 w-2/5 flex items-center justify-center rounded-lg border-2 border-dashed border-current text-gray-600  cursor-pointer min-w-fit">
                    <img src={note.url} alt="placeholder de imagen" className="h-28 rounded-lg shadow-lg min-w-fit"
                    />
                </div>
                :

                <div className="my-2 p-4 w-2/5 flex items-center justify-center rounded-lg border-2 border-dashed border-current text-gray-600  cursor-pointer min-w-fit">
                    <img src="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg" alt="placeholder de imagen" className="h-28 rounded-lg shadow-lg min-w-fit"
                    />
                </div>
            }
            <input type="submit" value="Guardar" className="my-2 py-4 px-8 bg-gray-900 text-white font-semibold rounded-lg cursor-pointer" />

        </form>
    )
}
