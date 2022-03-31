import { auth, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
    return () => {};
};

export const startGoogleLogin = () => {
    return async (dispatch) => {
        try {
            const { user } = await auth.signInWithPopup(
                auth.getAuth(),
                googleAuthProvider
            );
            console.log(user);
            dispatch(login(user.uid, user.displayName));
        } catch (error) {
            console.log({ error });
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
