import React from 'react'
import { AuthForm } from './AuthForm'

export const LoginPage = () => {
  const fields = [
    { name: 'email', type: 'email', required: true, title: 'Correo electrónico' },
    { name: 'password', type: 'password', required: true, title: 'Contraseña' }
  ]

  return (
    <AuthForm fields={fields} title={'Iniciar sesión'} isLoginForm={true} otherFormPath={'/auth/register'} />
  )
}

