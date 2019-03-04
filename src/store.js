import { applyMiddleware, createStore } from "redux"

import { createLogger } from 'redux-logger';
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import * as promise from 'redux-promise'

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, createLogger())
// const middleware = [ reduxPromise ];
// const store = createStore(reducer, applyMiddleware(...middleware));

export default createStore(reducer, middleware)
