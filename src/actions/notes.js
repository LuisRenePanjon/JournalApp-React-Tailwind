import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { types } from '../types/types';
import { loadNotes } from '../utils/loadNotes';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };
        const collRef = collection(db, uid);
        const noteRef = await addDoc(collection(collRef, 'journal', 'notes'), newNote);
		dispatch(activeNote(noteRef.id, newNote));
	};
};

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    },
});

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
});

