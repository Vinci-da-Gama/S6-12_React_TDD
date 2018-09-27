import { FETCH_INEBRIANT } from '../types';

const INIT_INEBRIANTS = {
	inebriants: []
};

export default (state = INIT_INEBRIANTS, action) => {
	switch (action.type) {
		case FETCH_INEBRIANT:
			console.log('10 -- ', action.inebriants);
			return { ...state, inebriants: action.inebriants };
		default:
			return state;
	}
};
