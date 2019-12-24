import { combineReducers } from "redux";

import burgerBuilderReducer from "../features/burgerBuilder/reducer";

export default combineReducers({
  burgerBuilder: burgerBuilderReducer
});
