import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rReducers from '../reduxers';

const rootStore = createStore(
	rReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
);

export default rootStore;
