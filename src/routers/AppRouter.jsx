import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../components/auth/AuthLayout'
// import { LoginPage } from '../components/auth/LoginPage'
// import { RegisterPage } from '../components/auth/RegisterPage'
import { JournalPage } from '../components/journal/JournalPage'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<JournalPage />} />
                <Route path='/auth/*' element={<AuthLayout />} />
                <Route path='*' element={<Navigate to={'/'} replace />} />
            </Routes>
        </BrowserRouter>
    )
}
