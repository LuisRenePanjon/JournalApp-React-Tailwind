import { useEffect, useState } from 'react'

import { auth } from '../firebase/firebaseConfig';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../components/auth/AuthLayout'
// import { LoginPage } from '../components/auth/LoginPage'
// import { RegisterPage } from '../components/auth/RegisterPage'
import { JournalPage } from '../components/journal/JournalPage'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { LoadingPage } from '../components/common/LoadingPage';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [cheking, setCheking] = useState(true);

    const [isLogged, setIsLogged] = useState(false);


    useEffect(() => {
        auth.onAuthStateChanged(auth.getAuth(), user => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
            setCheking(false);
        });
    }, [dispatch])


    if (cheking) {
        return <LoadingPage />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={isLogged ? (<JournalPage />) : (<Navigate to={'/auth'} replace />)} />
                <Route path='/auth/*' element={isLogged ? (<Navigate to={'/'} replace />) : (<AuthLayout />)} />
                <Route path='*' element={isLogged ? (<Navigate to={'/'} replace />) : (<Navigate to={'/auth'} replace />)} />
            </Routes>
        </BrowserRouter>
    )
}
