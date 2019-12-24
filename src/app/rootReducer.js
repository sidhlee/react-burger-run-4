import { combineReducers } from "redux";

import burgerBuilderReducer from "../features/burgerBuilder/reducers";

export default combineReducers({
  burgerBuilder: burgerBuilderReducer
});
