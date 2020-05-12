// Vendor
import { merge } from "lodash";

// Internal
import { GET_TODOLIST } from "../../../types/graphql";

const addTask = (_: any, { text, id, title }: any, { cache }: any) => {
  const resultCache = cache.readQuery({ query: GET_TODOLIST });
  let indexTodolist = "";
  for (const index in resultCache.todolists) {
    if (resultCache.todolists[index].todolist["title"] === title)
      indexTodolist = index;
  }
  const newData = {
    todolist: {
      tasks: [
        ...resultCache.todolists[indexTodolist].todolist.tasks,
        {
          __typename: "Task",
          text: text,
          id: id,
        },
      ],
    },
  };
  const data = merge(resultCache.todolists[indexTodolist], newData);
  cache.writeQuery({ query: GET_TODOLIST, data });

  return data;
};

const removeTask = (_: any, { text, id }: any, { cache }: any) => {
  const resultCache = cache.readQuery({ query: GET_TODOLIST });

  return null;
};

export { addTask, removeTask };
