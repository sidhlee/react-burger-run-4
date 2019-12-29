import authReducer from "./reducer";
import * as actions from "./actions";

describe("authReducer", () => {
  it("should return the initial state", () => {
    // you pass undefined to test initial state
    expect(authReducer(undefined, {})).toEqual({
      idToken: null,
      localId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
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
      idToken: "token123",
      localId: "id123",
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });
});
