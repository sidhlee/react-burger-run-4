import axios from "axios";

/* Action types */
export const AUTH_REQUEST = "auth/requested";
export const AUTH_SUCCESS = "auth/succeeded";
export const AUTH_FAIL = "auth/failed";
export const AUTH_SIGN_OUT = "auth/signOut";
export const AUTH_REDIRECT_PATH_SET = "auth/redirectPathSet";

/* Sync action creators */
export const signOut = () => ({
  type: AUTH_SIGN_OUT
});

export const setAuthRedirectPath = authRedirectPath => ({
  type: AUTH_REDIRECT_PATH_SET,
  authRedirectPath
});

/* Async action creators */
const authRequest = () => ({
  type: AUTH_REQUEST
});
const authSuccess = data => ({
  type: AUTH_SUCCESS,
  idToken: data.idToken,
  localId: data.localId
});
const authFail = error => ({
  type: AUTH_FAIL,
  error
});

const checkAuthTimeout = seconds => {
  return dispatch => {
    setTimeout(() => {
      signOut();
    }, seconds * 1000);
  };
};

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
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch(err => {
        // axios wraps original error obj from firebase
        if (err.response) {
          // server response > 2xx
          dispatch(
            // show firebase's error message
            authFail("Error: " + err.response.data.error.message)
          );
        } else if (err.request) {
          // request made, but no response from the server
          dispatch(authFail("Error: No response from the server"));
          console.log(err.request);
        } else {
          // error thrown before sending req
          dispatch(authFail("Error: request couldn't be made"));
          console.log(err.config);
        }
      });
  };
};
