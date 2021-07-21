/** @format */

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Login/Sign up with Phone Number", () => {
  render(<App />);
  const linkElement = screen.getByText("Login/Sign up with Phone Number");
  expect(linkElement).toBeInTheDocument();
});
