import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rReducers from '../reduxers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const rootStore = createStoreWithMiddleware(
	rReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootStore;
