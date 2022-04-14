import React from 'react'
import { AuthForm } from './AuthForm'

export const RegisterPage = () => {
  const fields = [
    { name: 'name', type: 'text', required: true, title: 'Nombres' },
    { name: 'email', type: 'email', required: true, title: 'Correo electrónico' },
    { name: 'password', type: 'password', required: true, title: 'Contraseña' },
    { name: 'passwordConfirm', type: 'password', required: true, title: 'Confirmar Contraseña' }

  ]

  return (
    <AuthForm fields={fields} title={'Registrarse'} isLoginForm={false} otherFormPath={'/auth/login'} />
  )
}

