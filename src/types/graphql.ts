import gql from "graphql-tag";

export const GET_TODOLIST = gql`
  query TodolistQuery {
    todolist @client {
      tasks
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($text: String) {
    addTask(text: $text) @client {
      todolist {
        tasks
      }
    }
  }
`;

export const typeDefs = gql`
  type Todolist {
    tasks: [Task]
  }

  type Task {
    text: String!
  }
`;
