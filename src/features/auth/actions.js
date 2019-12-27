import axios from "axios";

export const AUTH_REQUEST = "auth/authRequested";
export const AUTH_SUCCESS = "auth/authSucceeded";
export const AUTH_FAIL = "auth/authFailed";

/* Async action creators */
const authRequest = () => ({
  type: AUTH_REQUEST
});
const authSuccess = data => ({
  type: AUTH_SUCCESS,
  idToken: data.idToken,
  localId: data.localId,
  expiresIn: data.expiresIn
});
const authFail = error => ({
  type: AUTH_FAIL,
  error
});

export const auth = (email, password, isSignIn) => {
  return dispatch => {
    dispatch(authRequest());
    const payload = {
      email,
      password,
      returnSecureToken: true
    };
    const uri = isSignIn
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAT3EDo3l5ZfUmYgM-9M0uQaseNX8TW0HI"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAT3EDo3l5ZfUmYgM-9M0uQaseNX8TW0HI";
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
