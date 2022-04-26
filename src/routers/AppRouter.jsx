import { useEffect } from 'react'

import { auth } from '../firebase/firebaseConfig';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../components/auth/AuthLayout'
// import { LoginPage } from '../components/auth/LoginPage'
// import { RegisterPage } from '../components/auth/RegisterPage'
import { JournalPage } from '../components/journal/JournalPage'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(auth.getAuth(),user => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
            } else {
                
            }
        });
    }, [dispatch])



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
