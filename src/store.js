import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise-middleware";
import reduxThunk from 'redux-thunk';
import reducer from "./reducers";

export default createStore(reducer, applyMiddleware(promise, reduxThunk));
