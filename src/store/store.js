/** @format */

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import accountReducer from "./reducers/account";
import grievancesReducer from "./reducers/grievances";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  name: "ENP-Web Dev Tool",
});

const rootReducer = combineReducers({
  accountReducer,
  grievancesReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, logger)
    // other store enhancers if any
  )
);
// const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
