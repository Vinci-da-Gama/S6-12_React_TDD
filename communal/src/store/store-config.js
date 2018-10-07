import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rReducers from '../reduxers';

const rootStore = createStore(
    rReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default rootStore;
