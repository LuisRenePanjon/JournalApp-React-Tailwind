import { collection, getDocs } from 'firebase/firestore';
import { notesSnapToJson } from '../adapters/notesSnapToJson';
import {db} from '../firebase/firebaseConfig'

export const loadNotes = async (uid)=>{
    const notesRef = collection(db, `${uid}/journal/notes`);
    const notesSnap = await getDocs(notesRef);
    return notesSnapToJson(notesSnap);
}