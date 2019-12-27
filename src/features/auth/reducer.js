import * as types from "./actions";

const initialState = {
  idToken: null,
  localId: null,
  error: null,
  loading: false,
  expiresIn: null
};

const authRequest = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    idToken: action.idToken,
    localId: action.localId,
    expiresIn: action.expiresIn,
    error: null
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_REQUEST:
      return authRequest(state, action);
    case types.AUTH_SUCCESS:
      return authSuccess(state, action);
    case types.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default authReducer;
