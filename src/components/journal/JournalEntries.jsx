import React from 'react'
import { JournalEntry } from './';

export const JournalEntries = () => {

    const data = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className= " overflow-y-auto overflow-x-hidden h-screen pb-44 scroll-auto">
            {
                data.map( entry => (
                    <JournalEntry key={entry}/>
                ))
            }
        </div>
    )
}
