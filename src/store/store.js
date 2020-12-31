import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import gamesReducer from "../reducers/gamesReducer";
import thunk from "redux-thunk";
import detailReducer from "../reducers/detailReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default rootReducer;
