export const notesSnapToJson = (notesSnap) => {
    const notes = notesSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return notes;
}