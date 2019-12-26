import axios from "../../../common/axios-orders";

/* Action types */
export const ORDER_SUCCESS = "contactData/orderSuccess";
export const ORDER_FAIL = "contactData/orderFail";

/* Async action creators */
const orderSuccess = (id, order) => {
  return {
    type: ORDER_SUCCESS,
    id,
    order
  };
};

const orderFail = error => {
  return {
    type: ORDER_FAIL,
    error
  };
};

export const orderBurger = order => {
  return dispatch => {
    return axios
      .post("/orders.json", order)
      .then(res => {
        dispatch(orderSuccess(res.data.name, order));
      })
      .catch(err => {
        dispatch(orderFail(err));
      });
  };
};
