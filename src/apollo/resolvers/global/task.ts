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

const modifyTask = (_: any, { text, id, title }: any, { cache }: any) => {
  const resultCache = cache.readQuery({ query: GET_TODOLIST });
  let indexTodolist = "";
  let indexTask = "";
  for (const index in resultCache.todolists) {
    if (resultCache.todolists[index].todolist["title"] === title)
      indexTodolist = index;
  }
  for (const index in resultCache.todolists[indexTodolist].todolist.tasks) {
    if (resultCache.todolists[indexTodolist].todolist.tasks[index]["id"] === id)
      indexTask = index;
  }
  const data = { ...resultCache };
  data.todolists[indexTodolist].todolist.tasks[indexTask]["text"] = text;
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
  remove(data.todolists[indexTodolist].todolist.tasks, function (task: Task) {
    return task.id === id;
  });
  cache.writeQuery({ query: GET_TODOLIST, data });

  return data;
};

const upOrDownTask = (_: any, { id, title, upOrDown }: any, { cache }: any) => {
  const resultCache = cache.readQuery({ query: GET_TODOLIST });
  let indexTodolist = 0;
  let indexTask = 0;
  for (const index in resultCache.todolists) {
    if (resultCache.todolists[index].todolist["title"] === title)
      indexTodolist = parseInt(index);
  }
  for (const index in resultCache.todolists[indexTodolist].todolist.tasks) {
    if (resultCache.todolists[indexTodolist].todolist.tasks[index]["id"] === id)
      indexTask = parseInt(index);
  }
  let data = { ...resultCache };
  let dataSwap = data.todolists[indexTodolist].todolist.tasks;
  if (upOrDown === "up") {
    if (indexTask === 0) return;
    [dataSwap[indexTask], dataSwap[indexTask - 1]] = [
      dataSwap[indexTask - 1],
      dataSwap[indexTask],
    ];
    cache.writeQuery({ query: GET_TODOLIST, data });
  } else {
    if (indexTask === dataSwap.length - 1) return;
    [dataSwap[indexTask], dataSwap[indexTask + 1]] = [
      dataSwap[indexTask + 1],
      dataSwap[indexTask],
    ];
    cache.writeQuery({ query: GET_TODOLIST, data });
  }

  return data;
};

export { addTask, modifyTask, removeTask, upOrDownTask };
