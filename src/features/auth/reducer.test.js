import authReducer from "./reducer";
import * as actions from "./actions";

describe("authReducer", () => {
  let initialState = {
    idToken: null,
    localId: null,
    error: null,
    loading: false,
    authRedirectPath: "/"
  };
  it("should return the initial state", () => {
    // you pass undefined to test initial state
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it("should set loading to true and error to null after request starts", () => {
    expect(
      authReducer(undefined, { type: actions.AUTH_REQUEST })
    ).toEqual({
      ...initialState,
      loading: true,
      error: null
    });
  });

  it("should store token once signed in", () => {
    expect(
      authReducer(undefined, {
        type: actions.AUTH_SUCCESS,
        idToken: "token123",
        localId: "id123"
      })
    ).toEqual({
      ...initialState,
      idToken: "token123",
      localId: "id123"
    });
  });

  it("should store error and set loading to false once authentication failed", () => {
    expect(
      authReducer(undefined, {
        type: actions.AUTH_FAIL,
        error: "error123"
      })
    ).toEqual({
      ...initialState,
      error: "error123",
      loading: false
    });
  });

  it("should remove token once signed out", () => {
    expect(
      authReducer(undefined, {
        type: actions.AUTH_SIGN_OUT
      })
    ).toEqual(initialState);
  });

  it("should set the redirect path as provided", () => {
    expect(
      authReducer(undefined, {
        type: actions.AUTH_REDIRECT_PATH_SET,
        authRedirectPath: "/provided-path"
      })
    ).toEqual({
      ...initialState,
      authRedirectPath: "/provided-path"
    });
  });
});
