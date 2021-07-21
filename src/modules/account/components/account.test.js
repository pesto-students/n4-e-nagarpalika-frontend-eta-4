/** @format */

import { render, screen } from "@testing-library/react";
import Account from "./account";

test("renders e-NagarPalika", () => {
  render(<Account />);
  // const linkElement = screen.queryAllByText(/e-NagarPalika/i);
  // expect(linkElement).toBeInTheDocuments();
});
