// import { render, screen } from "@testing-library/react";
// import React from "react";
import { loginUser, userIdSelector } from "../features/auth/authSlice";
import reducer, { initialState } from "../features/auth/authSlice";

const USER_ID = "mrauthoto";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        userId: USER_ID,
        bankAccountNo: "25622-235-215",
        status: "login succeeded",
      }),
  })
);

describe("Auth slice", () => {
  it("should select User Id", () => {
    const userId = userIdSelector({
      auth: { ...initialState, userId: USER_ID },
    });
    expect(userId).toEqual(USER_ID);
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("login user", async () => {
    const dispatch = jest.fn();
    const action = await loginUser({ userId: USER_ID, password: "thepass" })(
      dispatch
    );

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      userId: USER_ID,
      bankAccountNo: "25622-235-215",
      status: "login succeeded",
    });
  });
});
