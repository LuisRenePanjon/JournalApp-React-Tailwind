
import {db} from "../firebase/firebaseConfig";
import {collection, addDoc} from 'firebase/firestore'


export const startNewNote = () => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;
		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		}
		const collRef = collection(db, uid);
		await addDoc(collection(collRef, 'journal', 'notes'), newNote);
	}
};
