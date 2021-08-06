/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Grievances from "./grievances";

test("renders a message", () => {
  const { container } = render(<Grievances />);

  expect(container).toMatchSnapshot();
});
