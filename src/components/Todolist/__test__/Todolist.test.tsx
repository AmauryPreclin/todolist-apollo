// Vendor
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";

// Internal
import { Todolist } from "../Todolist";
import { client } from "../../../apollo/apollo";

describe("renders Todolist component", () => {
  const { getAllByRole } = render(
    <ApolloProvider client={client}>
      <MemoryRouter>
        <Todolist title="Monday" />
      </MemoryRouter>
    </ApolloProvider>
  );
  it("renders 1 button", () => {
    const taskButton = getAllByRole(/button/i);
    expect(taskButton).toHaveLength(1);
  });
});
