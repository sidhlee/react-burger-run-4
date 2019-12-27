import { combineReducers } from "redux";

import burgerBuilderReducer from "../features/burgerBuilder/reducer";
import ordersReducer from "../features/orders/reducer";
import authReducer from "../features/auth/reducer";

export default combineReducers({
  burgerBuilder: burgerBuilderReducer,
  orders: ordersReducer,
  auth: authReducer
});
