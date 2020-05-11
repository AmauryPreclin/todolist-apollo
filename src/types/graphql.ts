import gql from "graphql-tag";

export const GET_TODOLIST = gql`
  query TodolistQuery {
    todolist @client {
      tasks
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($text: String, $id: number) {
    addTask(text: $text, id: $id) @client {
      todolist {
        tasks
      }
    }
  }
`;

export const REMOVE_TASK = gql`
  mutation removeTask($id: number) {
    removeTask(id: $id) @client {
      todolist {
        tasks
      }
    }
  }
`;

export const typeDefs = gql`
  type Week {
    monday: Todolist
    tuesday: Todolist
    wednesday: Todolist
    thursday: Todolist
    friday: Todolist
  }

  type Todolist {
    tasks: [Task]
  }

  type Task {
    text: String!
    id: number!
  }
`;
