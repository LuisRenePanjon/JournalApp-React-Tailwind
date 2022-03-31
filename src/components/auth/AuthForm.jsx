import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch } from 'react-redux';
import { login, startGoogleLogin } from '../../actions/auth';
export const AuthForm = ({ fields, otherFormPath, isLoginForm, title }) => {

    const { register, formState: { errors }, handleSubmit } = useForm();


    const dispatch = useDispatch();

    const onSubmit = (data) => {
        // data.preventDefault();
        console.log(data, isLoginForm);
        dispatch(login(12345, "René Panjón"))

    }

    const onSubmitWithGoogle = () => {
        dispatch(startGoogleLogin())
    }
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 ">
            <div className="max-w-md w-full space-y-8 rounded-3xl p-10 bg-gradient-to-r from-white to-white shadow-xl">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        O{' '}
                        {isLoginForm ?
                            <Link to={otherFormPath} className="font-medium text-indigo-600 hover:text-indigo-500">
                                registrate si aún no tienes una cuenta.
                            </Link> :
                            <Link to={otherFormPath} className="font-medium text-indigo-600 hover:text-indigo-500">
                                iniciar sesión con cuenta existente.
                            </Link>
                        }
                    </p>
                </div>
                <form className="mt-8 space-y-8" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        {fields.map((field) => (
                            <div className="py-2" key={field.title}>
                                <label htmlFor={field.name} className="sr-only">
                                    {field.title}
                                </label>
                                <input
                                    {...register(field.name, { required: "Este campo es requerido", maxLength: 30, })}
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    autoComplete={field.name}
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder={field.title}
                                />
                                <ErrorMessage errors={errors} name={field.name} as="p" className='text-red-600 mt-1 ml-1' />
                            </div>
                        ))}
                    </div>
                    {isLoginForm &&
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Recuerdame
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                        </div>
                    }

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >

                            {title}
                        </button>
                    </div>
                    {isLoginForm && (

                        <div>
                            <div
                                onClick={onSubmitWithGoogle}
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >

                                <p>
                                    Iniciar con <span className="font-bold text-base">G</span>oogle
                                </p>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}
