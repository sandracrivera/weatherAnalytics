import {createStore, applyMiddleware, compose} from 'redux';
import { routerMiddleware } from 'react-router-redux';

import thunkMiddleware from 'redux-thunk';
import history from '../utilities/history';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';

const middleware = routerMiddleware(history);

const store = createStore(rootReducer, compose(
    applyMiddleware(thunkMiddleware, middleware, logger)
));

export default store;