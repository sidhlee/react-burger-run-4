import axios from "axios";

export const AUTH_REQUEST = "auth/authRequested";
export const AUTH_SUCCESS = "auth/authSucceeded";
export const AUTH_FAIL = "auth/authFailed";

/* Async action creators */
const authRequest = () => ({
  type: AUTH_REQUEST
});
const authSuccess = token => ({
  type: AUTH_SUCCESS,
  token
});
const authFail = error => ({
  type: AUTH_FAIL,
  error
});

const uri =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAT3EDo3l5ZfUmYgM-9M0uQaseNX8TW0HI";

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authRequest());
    const payload = {
      email,
      password,
      returnSecureToken: true
    };
    return axios
      .post(uri, payload)
      .then(res => {
        console.log(res);
        dispatch(authSuccess(res.data));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};
