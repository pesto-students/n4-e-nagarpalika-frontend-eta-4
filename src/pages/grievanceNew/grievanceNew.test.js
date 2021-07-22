/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Grievance from "./grievance";

test("renders a message", () => {
  const { container } = render(<Grievance />);

  expect(container).toMatchSnapshot();
});
