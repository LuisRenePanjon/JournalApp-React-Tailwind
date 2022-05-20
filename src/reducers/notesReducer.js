import { types } from '../types/types';

const initialState = {
    notes: [],
    active: null,
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload,
                },
            };
        case types.notesLoad:
            return {
                ...state,
                notes : [...action.payload],
            };
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map((note) => {
                    if (note.id === action.payload.id) {
                        return {
                            ...note,
                            ...action.payload.note,
                        };
                    }
                    return note;
                }),
            }
        case types.notesAddNew:
            return {
                ...state,
                notes: [action.payload, ...state.notes],
            };
        default:
            return state;
    }
};
