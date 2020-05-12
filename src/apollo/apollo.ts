// Vendor
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

// Internal
import { resolvers } from "./resolvers/index";
import { typeDefs } from "../types/graphql";
import { GET_TODOLIST } from "../types/graphql";

const cache = new InMemoryCache();
export const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs,
});

const data = {
  todolists: [
    {
      __typename: "Todolists",
      todolist: {
        __typename: "Todolist",
        title: "monday",
        tasks: [],
      },
    },
    {
      __typename: "Todolists",
      todolist: {
        __typename: "Todolist",
        title: "tuesday",
        tasks: [],
      },
    },
    {
      __typename: "Todolists",
      todolist: {
        __typename: "Todolist",
        title: "wednesday",
        tasks: [],
      },
    },
    {
      __typename: "Todolists",
      todolist: {
        __typename: "Todolist",
        title: "thursday",
        tasks: [],
      },
    },
    {
      __typename: "Todolists",
      todolist: {
        __typename: "Todolist",
        title: "friday",
        tasks: [],
      },
    },
  ],
};

client.writeQuery({ query: GET_TODOLIST, data });
