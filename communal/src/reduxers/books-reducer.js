import { FETCH_BOOKS } from '../types';

const INIT_BOOKS = {
	books: []
};

export default (state = INIT_BOOKS, action) => {
	switch (action.type) {
		case FETCH_BOOKS:
			return { ...state, books: action.books };
		default:
			return state;
	}
};
