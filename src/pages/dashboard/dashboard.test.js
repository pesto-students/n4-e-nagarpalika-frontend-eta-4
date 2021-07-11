/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./dashboard";

test("renders a message", () => {
  const { container } = render(<Dashboard />);

  expect(container).toMatchSnapshot();
});
