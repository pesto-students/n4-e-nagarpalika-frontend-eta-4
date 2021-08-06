/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Login from "./login";

test("renders a message", () => {
  const { container } = render(<Login />);

  expect(container).toMatchSnapshot();
});
