// Vendor
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Internal
import { Header } from "../Header";

describe("renders Header component", () => {
  const { getAllByRole } = render(
    <Router>
      <Header />
    </Router>
  );
  it("renders links", () => {
    const linkElement = getAllByRole(/Link/i);
    expect(linkElement).toHaveLength(6);
  });
});
