import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "@redux-devtools/extension";
import {authReducer, notesReducer, uiReducer} from "../reducers";


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
});

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
);
