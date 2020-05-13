// Vendor
import React from "react";
import { render } from "@testing-library/react";

// Internal
import { WeekDate } from "../WeekDate";

describe("renders WeekDate component", () => {
  const { getByText } = render(<WeekDate />);
  it('"Week of" text', () => {
    const weekOfText = getByText(/Week of/i);
    expect(weekOfText).toBeInTheDocument();
  });
});
