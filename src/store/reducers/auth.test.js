import reducer from "./auth";
import { initialState } from "./auth";
import * as actionTypes from "../actions/index";

describe("auth reducer", () => {
  it("should return the initialState", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should store the token upon login", () => {
    const action = {
      type: actionTypes.AUTH_SUCCESS,
      idToken: "sometoken",
      userId: "someid"
    };

    const expectedValues = {
      token: "sometoken",
      userId: "someid",
      error: null,
      loading: false,
      authRedirect: "/"
    };

    const result = reducer(initialState, action);

    expect(result.token).toEqual(expectedValues.token);
  });
});
