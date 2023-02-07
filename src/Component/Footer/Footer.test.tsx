import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Footer";

describe("testing footer", () => {
  test("should present all links", () => {
    render(<Footer />);

    const linkElement = screen.getAllByRole("link");
    expect(linkElement.length).toEqual(3);
  });
});
