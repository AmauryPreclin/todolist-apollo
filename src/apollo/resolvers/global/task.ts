// Vendor
import { merge, remove } from "lodash";

// Internal
import { Task } from "../../../types/todolist";
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

const removeTask = (_: any, { id, title }: any, { cache }: any) => {
  const resultCache = cache.readQuery({ query: GET_TODOLIST });
  let indexTodolist = "";
  for (const index in resultCache.todolists) {
    if (resultCache.todolists[index].todolist["title"] === title)
      indexTodolist = index;
  }
  let data = { ...resultCache };
  let memes = remove(data.todolists[indexTodolist].todolist.tasks, function (
    task: Task
  ) {
    return task.id === id;
  });
  console.log("removeTask -> data", data);
  cache.writeQuery({ query: GET_TODOLIST, data });

  return data;
};

export { addTask, removeTask };
