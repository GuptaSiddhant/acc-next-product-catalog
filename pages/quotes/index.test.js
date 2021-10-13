import { render, screen } from "@testing-library/react";
import React from "react";
import Quotes from ".";

const quotes = [
  {
    value: "Group 2 is awesome",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    charlieUtterance: 0,
    id: "id",
  },
];

describe("Quote page", () => {
  it("should render the quotes page", () => {
    render(<Quotes quotes={quotes} />);

    const heading = screen.getByText(/Chuck Norris Quotes/i);
    expect(heading).toBeInTheDocument();
  });

  it("should render a quote", () => {
    render(<Quotes quotes={quotes} />);

    const quote = screen.getByText(/Group 2 is awesome/i);
    expect(quote).toBeInTheDocument();
  });
});
