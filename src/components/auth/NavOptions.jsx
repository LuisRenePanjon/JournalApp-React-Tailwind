import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavOptions = ({ isMobile = false }) => {
    const navigation = [
        { name: 'Register', to: 'register' },
        { name: 'Login', to: 'login' },
    ]
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }
    return isMobile ? (
        <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
                <NavLink key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                        isActive ? classNames('bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium') : classNames('text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium')
                    }
                >
                    {item.name}
                </NavLink>
            ))}
        </div>
    ) : (
        <nav className="flex space-x-4">
            {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                        isActive ? classNames('bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium') : classNames('text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')
                    }
                >
                    {item.name}
                </NavLink>
            ))}
        </nav>
    )
}
