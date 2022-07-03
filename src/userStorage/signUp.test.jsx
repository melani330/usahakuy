import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SignUp from "./signUp";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import userEvent from "@testing-library/user-event";

test("render sign up button", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <SignUp />
    </Provider>
  );
  expect(getByTestId("signup-button")).toBeInTheDocument();
});

test("sign up button clicked", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <SignUp />
    </Provider>
  );
  const signupbutton = getByTestId("signup-button");
  userEvent.click(signupbutton);
  expect(signupbutton).toBeInTheDocument();
});
