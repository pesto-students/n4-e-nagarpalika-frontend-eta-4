/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LandingPage from "./landingPage";

test("renders a message", () => {
  const { container } = render(<LandingPage />);

  expect(container).toMatchSnapshot();
});
