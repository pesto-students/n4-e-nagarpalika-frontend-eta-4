/** @format */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { FacebookLogo, TwitterLogo, YoutubeLogo } from "./logos";

test("renders a FacebookLogo", () => {
  const { container } = render(<FacebookLogo />);

  expect(container).toMatchSnapshot();
});

test("renders a TwitterLogo", () => {
  const { container } = render(<TwitterLogo />);

  expect(container).toMatchSnapshot();
});

test("renders a YoutubeLogo", () => {
  const { container } = render(<YoutubeLogo />);

  expect(container).toMatchSnapshot();
});
