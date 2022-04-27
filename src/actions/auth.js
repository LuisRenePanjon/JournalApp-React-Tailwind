import { auth, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import {
    removeErrorAction,
    setErrorAction,
    setLoadingAction,
    removeLoadingAction,
} from './ui';

export const startEmailPasswordLogin = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(removeErrorAction());
            dispatch(setLoadingAction());
            const { user } = await auth.signInWithEmailAndPassword(
                auth.getAuth(),
                email,
                password
            );
            dispatch(removeLoadingAction());
            dispatch(login(user.uid, user.displayName));
        } catch (e) {
            dispatch(removeLoadingAction());
            if (e.code === 'auth/user-not-found') {
                dispatch(
                    setErrorAction('Email y/o contraseña son incorrectos')
                );
            } else if (e.code === 'auth/wrong-password') {
                dispatch(
                    setErrorAction('Email y/o contraseña son incorrectos')
                );
            } else {
                dispatch(setErrorAction(e.message));
            }
        }
    };
};

export const startEmailPasswordNameRegister = (email, password, name) => {
    return (dispatch) => {
        dispatch(setLoadingAction());
        auth.createUserWithEmailAndPassword(auth.getAuth(), email, password)
            .then(async ({ user }) => {
                await auth.updateProfile(user, { displayName: name });
                await auth.sendEmailVerification(user, {
                    url: 'http://localhost:3000/',
                });
                dispatch(login(user.uid, user.displayName));
                dispatch(removeLoadingAction());
            })
            .catch((e) => {
                dispatch(removeLoadingAction());
                console.log(e);
            });
    };
};

export const startGoogleLogin = () => {
    return async (dispatch) => {
        dispatch(setLoadingAction());
        try {
            const { user } = await auth.signInWithPopup(
                auth.getAuth(),
                googleAuthProvider
            );
            console.log(user);
            dispatch(login(user.uid, user.displayName));
            dispatch(removeLoadingAction());
        } catch (error) {
            console.log({ error });
            dispatch(removeLoadingAction());
        }
    };
};

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        },
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        await auth.signOut(auth.getAuth());
		dispatch(logout());
    };
};

export const logout = () => {
    return {
        type: types.logout,
    };
};
