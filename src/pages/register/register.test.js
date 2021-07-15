/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders a message", () => {
  const { container } = render(<Register />);

  expect(container).toMatchSnapshot();
});
