import { applyMiddleware, createStore} from 'redux';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from "redux-promise-middleware";

import reducer from './js/reducers';

const middleware = applyMiddleware(promise(), thunk , createLogger());

export default createStore(reducer, middleware);