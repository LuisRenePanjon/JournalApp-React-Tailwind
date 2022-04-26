import {types} from "../types/types";


const initialState = {
	isLoading: false,
	isError: false,
	errorMsg: '',
	isSuccess: false,
	successMsg: ''
};

export const uiReducer = ( state = initialState, action) => {

	switch (action.type) {
		case types.uiSetError:
			return {
				...state,
				isError: true,
				errorMsg: action.payload
			};
		case types.uiRemoveError:
			return {
				...state,
				isError: false,
				errorMsg: '',
			};
		case types.uiLoading:
			return {
				...state,
				isLoading: true,
			}
		case types.uiEndLoading:
			return {
				...state,
				isLoading: false,
			}
		
		default:
			return state;
	}
};