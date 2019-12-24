import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        tracklimit: 25
      })
    : null) || compose;

const middlewares = [thunk];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default createStore(rootReducer, enhancer);
