// Vendor
import React from "react";
import { render } from "@testing-library/react";
import { ApolloProvider } from "@apollo/react-hooks";

// Internal
import { App } from "../App";
import { client } from "../../../apollo/apollo";

describe("renders App component", () => {
  const { getAllByText } = render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  it("renders Add Task buttons", () => {
    const taskButtonElement = getAllByText(/Add Task/i);
    expect(taskButtonElement).toHaveLength(5);
  });
});
