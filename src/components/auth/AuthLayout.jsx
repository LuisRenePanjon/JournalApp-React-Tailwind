import { Disclosure } from '@headlessui/react'

import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from './LoginPage'
import { RegisterPage } from './RegisterPage'
import { MobileMenuButton } from './MobileMenuButton'
import { NavLogo } from './NavLogo'
import { NavOptions } from './NavOptions'
// import styles from './styles.module.css'
// import './index.css'

export const AuthLayout = () => {


  return (
    <div>
      <Disclosure className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 " as={'nav'} >
        {({ open }) => (
          <>
            <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <MobileMenuButton open={open} />
                </div>
                {/* Nav Logo */}
                <NavLogo />

                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                  <div className="hidden sm:block sm:ml-6">
                    <NavOptions />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile nav options */}
            <Disclosure.Panel className="sm:hidden">
              <NavOptions isMobile={true} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Children routes */}
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='*' element={<Navigate to='login' replace />} />
      </Routes>
    </div>
  )
}
