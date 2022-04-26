import {types} from "../types/types";

export const setErrorAction = (error) => {
	return {
		type: types.uiSetError,
		payload: error,
	};
}

export const removeErrorAction = () => {
	return {
		type: types.uiRemoveError,
	};
}


export const setLoadingAction = () => {
	return {
		type: types.uiLoading
	};
}

export const removeLoadingAction = () => {
	return {
		type: types.uiEndLoading
	};
}