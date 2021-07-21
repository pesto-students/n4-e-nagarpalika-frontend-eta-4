/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Account from "./account";

test("renders a message", () => {
  const { container } = render(<Account />);

  expect(container).toMatchSnapshot();
});
