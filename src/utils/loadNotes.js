import { collection } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export const loadNotes =(uid)=>{
    const docRef = collection(db,`${uid}/journal/notes`);
    
}