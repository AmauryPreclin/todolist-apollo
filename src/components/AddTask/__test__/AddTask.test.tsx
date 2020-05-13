// Vendor
import React from "react";
import { render } from "@testing-library/react";

// Internal
import { AddTask } from "../AddTask";

describe("render AddTask component", () => {
  const addTask = () => {};
  const { getAllByRole } = render(<AddTask title="Monday" addTask={addTask} />);
  it("renders 1 button", () => {
    const buttonElement = getAllByRole(/button/i);
    expect(buttonElement).toHaveLength(1);
  });
});
