import gql from "graphql-tag";

export const GET_TODOLIST = gql`
  query TodolistQuery {
    todolists @client {
      todolist {
        title
        tasks
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($text: String, $id: number, $title: string) {
    addTask(text: $text, id: $id, title: $title) @client {
      todolists {
        todolist {
          title
          tasks
        }
      }
    }
  }
`;

export const REMOVE_TASK = gql`
  mutation removeTask($id: number, $title: string) {
    removeTask(id: $id, title: $title) @client {
      todolists {
        todolist {
          title
          tasks
        }
      }
    }
  }
`;

export const typeDefs = gql`
  type Todolists {
    todolists: [Todolist]
  }

  type Todolist {
    title: string
    tasks: [Task]
  }

  type Task {
    text: String!
    id: number!
  }
`;
