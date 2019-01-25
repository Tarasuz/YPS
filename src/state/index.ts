import { combineReducers, compose, applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import routines from "./routines/reducers";
import appoints from "./appoints/reducers";
import ui from "./UI/reducers";

const rootReducer = combineReducers({ routines, ui, appoints });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer /* preloadedState */,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
