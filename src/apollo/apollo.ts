import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers } from "../resolvers/index";
import { typeDefs } from "../types/graphql";
import { GET_TODOLIST } from "../types/graphql";

const cache = new InMemoryCache();
export const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs,
});

const data = {
  todolist: {
    __typename: "Todolist",
    tasks: [],
  },
};

client.writeQuery({ query: GET_TODOLIST, data });
