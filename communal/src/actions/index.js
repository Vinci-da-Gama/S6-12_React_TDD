import axios from 'axios';

import { FETCH_INEBRIANT, FETCH_HEALTH, FETCH_COSMETIC,
    FETCH_MISS_CHILDREN, FETCH_PROPVAL_OBJ, FETCH_BOOKS } from '../types';
import { handleError, handleNoData } from '../helpers/error-handler';

const rootUrl = 'http://localhost:3004';

const loadInebriants = (inebriants) => {
	return {
		type: FETCH_INEBRIANT,
		inebriants
	};
};

export const grabInebriants = () => {
	return (dispatch) => {
		return axios.get(`${rootUrl}/inebriants`)
			.then((resp) => {
				if (resp) {
					dispatch(loadInebriants(resp.data));
				} else {
					// dispatch(handleNoData(dispatch, catchError));
				}
			})
			.catch((err) => {
				handleError(err);
			});
	};
};

export const grabMissChildren = () => {
	const missChildren = [
		{
			value: 'Miss1',
			children: [
				{ value: 'Miss2' },
				{ value: 'Hit1', children: [{ value: 'Miss3' }] }
			]
		},
		{
			value: 'Miss4',
			children: [
				{ value: 'Miss5' },
				{ value: 'Miss6', children: [{ value: 'Hit2' }] }
			]
		},
		{
			value: 'Miss7',
			children: [
				{ value: 'Miss8' },
				{ value: 'Miss9', children: [{ value: 'Miss10' }] }
			]
		},
		{
			value: 'Hit3',
			children: [
				{ value: 'Miss11' },
				{ value: 'Miss12', children: [{ value: 'Miss13' }] }
			]
		},
		{
			value: 'Miss14',
			children: [
				{ value: 'Hit4' },
				{ value: 'Miss15', children: [{ value: 'Miss16' }] }
			]
		}
	];
	return {
		type: FETCH_MISS_CHILDREN,
		missChildren
	};
};

export const getObjForPropValue = (propValObj) => {
	const data = {
		item: {
			photo: {
				file: {},
				progress: 20
			}
		}
	};
	return {
		type: FETCH_PROPVAL_OBJ,
		propvalObj: propValObj ? propValObj : data
	};
};

export const setBooks = (books) => {
    return {
        type: FETCH_BOOKS,
        books
    };
};


export const getBooks = () => {
    return (dispatch) => {
        return axios.get(`${rootUrl}/books`)
        .then((resp) => {
            dispatch(setBooks(resp.data));
        })
        .catch((err) => {
            console.log('101 -- books error:', err);
        });
    };
};
