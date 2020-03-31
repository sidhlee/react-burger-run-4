import axios from "axios";

/* Action types */
export const AUTH_REQUEST = "auth/requested";
export const AUTH_SUCCESS = "auth/succeeded";
export const AUTH_FAIL = "auth/failed";
export const AUTH_SIGN_OUT = "auth/signOut";
export const AUTH_REDIRECT_PATH_SET = "auth/redirectPathSet";

/* Sync action creators */
export const signOut = () => {
  localStorage.removeItem("idToken");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("localId");
  return { type: AUTH_SIGN_OUT };
};

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
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=~W0HI"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=~W0HI";
    return axios
      .post(uri, payload)
      .then(res => {
        console.log(res);
        // persist auth data into localStorage
        localStorage.setItem("idToken", res.data.idToken);
        localStorage.setItem("localId", res.data.localId);
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("expirationDate", expirationDate);

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

export const checkAuthStatus = () => {
  return dispatch => {
    const idToken = localStorage.getItem("idToken");
    const localId = localStorage.getItem("localId");
    if (!idToken) {
      dispatch(signOut());
    } else {
      const expirationDate = new Date(
        localStorage.getItem("expirationDate")
      );
      // Auto-sign-in only when there's idToken in localStorage
      // && expirationDate is later than now
      if (new Date() < expirationDate) {
        const data = {
          idToken,
          localId
        };
        dispatch(authSuccess(data));
        const remainingSeconds =
          (expirationDate.getTime() - new Date().getTime()) / 1000;
        dispatch(checkAuthTimeout(remainingSeconds));
      } else {
        dispatch(signOut());
      }
    }
  };
};
