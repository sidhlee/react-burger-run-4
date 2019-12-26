import { combineReducers } from "redux";

import burgerBuilderReducer from "../features/burgerBuilder/reducer";
import ordersReducer from "../features/orders/reducer";

export default combineReducers({
  burgerBuilder: burgerBuilderReducer,
  orders: ordersReducer
});
