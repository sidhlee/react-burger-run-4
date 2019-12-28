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

export const fetchOrders = (token, localId) => {
  return dispatch => {
    // https://firebase.google.com/docs/database/rest/retrieve-data#section-rest-filtering
    // query only orders from currently signed-in user
    const queryParams = `?auth=${token}&orderBy="localId"&equalTo="${localId}"`;
    return axios
      .get(`/orders.json` + queryParams)
      .then(res => {
        dispatch(fetchOrdersSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
