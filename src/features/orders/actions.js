import axios from "../../common/axios-orders";

export const FETCH_ORDERS_SUCCESS = "orders/fetchOrderSuccess";
export const FETCH_ORDERS_FAIL = "orders/fetchOrderFail";

/* Async action creators */
const fetchOrdersSuccess = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  orders
});

const fetchOrdersFail = error => ({
  type: FETCH_ORDERS_FAIL,
  error
});

export const fetchOrders = () => {
  return dispatch => {
    return axios
      .get("/orders.json")
      .then(res => {
        dispatch(fetchOrdersSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
