import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebaseConfig';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { login } from '../actions/auth';
import { LoadingPage } from '../components/common';
import { JournalPage } from '../pages/journal';
import { AuthLayout } from '../components/auth';

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
