import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './';

export const JournalEntries = () => {

    const { notes } = useSelector(state => state.notes);
    return (
        <div className= " overflow-y-auto overflow-x-hidden h-screen pb-44 scroll-auto">
            {
                notes.map( note => (
                    <JournalEntry key={note.id} {...note}/>
                ))
            }
        </div>
    )
}
