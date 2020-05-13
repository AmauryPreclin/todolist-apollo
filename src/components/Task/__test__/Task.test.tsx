// Vendor
import React from "react";
import { render } from "@testing-library/react";

// Internal
import { Task } from "../Task";

describe("renders Task component", () => {
  const texte = "test task";
  const id = 1;
  const title = "Monday";
  const key = `${id}-${title}-${texte}`;
  const modifyTask = () => {};
  const removeTask = () => {};
  const upOrDownTask = () => {};
  const { getAllByRole } = render(
    <Task
      texte={texte}
      id={id}
      title={title}
      key={key}
      modifyTask={modifyTask}
      removeTask={removeTask}
      upOrDownTask={upOrDownTask}
    />
  );
  it("renders 3 buttons", () => {
    const buttonElements = getAllByRole(/button/i);
    expect(buttonElements).toHaveLength(3);
  });
});
