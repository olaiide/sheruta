import {
    createStore,
    applyMiddleware
} from 'redux';
//import dotenv from 'dotenv';

import {
    composeWithDevTools
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import indexReducer from '../reducers/root.reducer';

//dotenv.config();
const middleware = [thunk];

const configureStore = (settings = {}) => createStore(
    indexReducer, settings,
    composeWithDevTools(applyMiddleware(...middleware)),
    // composeEnhancers(applyMiddleware(thunk, logger)),
);

export default configureStore;
