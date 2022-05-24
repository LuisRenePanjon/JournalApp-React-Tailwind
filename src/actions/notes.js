import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { types } from '../types/types';
import { loadNotes } from '../utils/loadNotes';
import Swal from 'sweetalert2';
import { fileUpload } from '../utils/fileUpload';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };
        const collRef = collection(db, uid);
        const noteRef = await addDoc(
            collection(collRef, 'journal', 'notes'),
            newNote
        );
        dispatch(activeNote(noteRef.id, newNote));
        dispatch(addNewNote({...newNote, id: noteRef.id}));
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

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const collRef = collection(db, uid);
        const noteRef = doc(collRef, 'journal', 'notes', note.id);
        const noteId = note.id;
        delete note.id;

        if (!note.url) {
            delete note.url;
        }
        await updateDoc(noteRef, note);
        dispatch(refreshNote(noteId, note));
        Swal.fire('Good job!', 'Nota guardada', 'success');
    };
};

export const addNewNote = (note) => ({
    type: types.notesAddNew,
    payload: note,
});

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: { id, note },
});

export const startUploadingImage = (file) => {
    return async (dispatch, getState) => {
        try {
            Swal.fire({
                title: 'Uploading...',
                text: 'Please wait',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            })
            const uid = getState().auth.uid;
            const collRef = collection(db, uid);
            const note = getState().notes.active;
            const noteRef = doc(collRef, 'journal', 'notes', note.id);
            const fileUrl = await fileUpload(file);
            await updateDoc(noteRef, { url: fileUrl });
            const noteUpdate = {
                ...note,
                url: fileUrl,
            };
            dispatch(refreshNote(note.id, noteUpdate));
            dispatch(activeNote(note.id, noteUpdate));
            Swal.close();
        } catch (error) {
            console.log(error);
            throw error;
        }
        
    }
}

export const startDeletingNote = (noteId) => {
    return async (dispatch, getState) => {
        Swal.fire({
            title: 'Deleting...',
            text: 'Please wait',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        })
        const uid = getState().auth.uid;
        const collRef = collection(db, uid);
        const noteRef = doc(collRef, 'journal', 'notes', noteId);
        await deleteDoc(noteRef);
        dispatch(deleteNote(noteId));
        Swal.close();
    };
}

export const deleteNote = (id) => ({
    type: types.notesDeleted,
    payload: id,
});

export const cleanNotes = () => ({
    type: types.notesLogoutCleaning,
});



