/** @format */

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import accountReducer from "../modules/account/reducer";
import issuesReducer from "../modules/grievances/reducer";

const { NODE_ENV } = process.env;

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  name: "ENP-Web Dev Tool",
});

const rootReducer = combineReducers({
  account: accountReducer,
  issues: issuesReducer,
});

const middlewares = [thunk];

if (NODE_ENV === "development") middlewares.push(logger);

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  )
);
// const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
