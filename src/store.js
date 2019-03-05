// import { applyMiddleware, createStore } from 'redux';
// import promise from "redux-promise-middleware";
// import ReduxThunk from "redux-thunk"
// import { createLogger } from "redux-logger";
// import reducer from "./reducers";

// const middleware = applyMiddleware(promise(), ReduxThunk, createLogger());
// export default createStore(reducer, middleware);

// import { applyMiddleware, createStore } from "redux"

// import logger from "redux-logger"
// import { default as thunk } from 'redux-thunk';
// import promise from "redux-promise-middleware"

// import reducer from "./reducers"

// const middleware = [promise(), thunk, logger() ]

// export default createStore(reducer, applyMiddleware(...middleware));

import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise-middleware";
import reduxThunk from 'redux-thunk';
import reducer from "./reducers";

export default createStore(reducer, applyMiddleware(promise, reduxThunk));
