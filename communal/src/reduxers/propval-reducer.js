import { FETCH_PROPVAL_OBJ } from '../types';

const INIT_PROPVAL = {
	propvalObj: {}
};

export default (state = INIT_PROPVAL, action) => {
	switch (action.type) {
		case FETCH_PROPVAL_OBJ:
			return { ...state, propvalObj: action.propvalObj };
		default:
			return state;
	}
};
