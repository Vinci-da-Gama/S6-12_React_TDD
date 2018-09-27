import { FETCH_MISS_CHILDREN } from '../types';

const INIT_MISSCHILDREN = {
	missChildren: []
};

export default (state = INIT_MISSCHILDREN, action) => {
	switch (action.type) {
		case FETCH_MISS_CHILDREN:
			return { ...state, missChildren: action.missChildren };
		default:
			return state;
	}
};
