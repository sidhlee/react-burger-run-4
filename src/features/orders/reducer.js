import { FETCH_ORDERS_SUCCESS } from "./actions";

const initialState = {
  orders: []
};

const fetchOrdersSuccess = (state, action) => {
  const ordersWithId = Object.entries(action.orders).map(
    ([id, order]) => ({
      id,
      ...order
    })
  );
  return {
    ...state,
    orders: ordersWithId
  };
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    default:
      return state;
  }
};

export default ordersReducer;
