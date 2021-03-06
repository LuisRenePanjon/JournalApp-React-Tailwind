import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch, useSelector } from 'react-redux';
import { startEmailPasswordLogin, startGoogleLogin, startEmailPasswordNameRegister } from '../../actions/auth';
import { removeErrorAction, setErrorAction } from "../../actions/ui";
import { Spinner } from '../common';



export const AuthForm = ({ fields, otherFormPath, isLoginForm, title }) => {

	const { register, formState: { errors }, handleSubmit } = useForm();
	const { errorMsg, isLoading } = useSelector(state => state?.ui);

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		if (isLoginForm) {
			dispatch(startEmailPasswordLogin(data.email, data.password));
		} else {
			if (isFormValid(data)) {
				dispatch(startEmailPasswordNameRegister(data.email, data.password, data.name))
			}
		}
	}

	const isFormValid = (data) => {
		if (data.password.length <= 6) {
			dispatch(setErrorAction('La contraseña es muy débil'))
			return false;
		} else if (data.email.indexOf('@') === -1) {
			dispatch(setErrorAction('El email no es válido'))
			return false;
		} else if (data.password !== data.passwordConfirm) {
			dispatch(setErrorAction('Las contraseñas no coinciden'))
			return false;
		} else {
			dispatch(removeErrorAction());
			return true;
		}
	}

	const onSubmitWithGoogle = () => {
		dispatch(startGoogleLogin())
	}
	return (
		<div
			className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 ">
			<div className="max-w-md w-full space-y-8 rounded-3xl p-10 bg-gradient-to-r from-white to-white shadow-xl">
			{isLoading && <Spinner />}

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
								<ErrorMessage errors={errors} name={field.name} as="p"
									className='text-red-600 mt-1 ml-1' />
							</div>
						))}
					</div>
					{errorMsg.length > 0 && <p className="text-red-600 mt-1 ml-1">{errorMsg}</p>}
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
							disabled={isLoading}
							className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-600
							${isLoading && ('bg-indigo-300 hover:bg-indigo-300')}`}
						>

							{title}
						</button>
					</div>
					{isLoginForm && (

						<div>
							<button
								type="button"
								disabled={isLoading}
								onClick={onSubmitWithGoogle}
								className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${!isLoading ? 'bg-red-500 hover:bg-red-700': 'bg-red-300'}`}
							>

								<p>
									Iniciar con <span className="font-bold text-base">G</span>oogle
								</p>
							</button>
						</div>
					)}
				</form>
			</div>
		</div>
	)
}
