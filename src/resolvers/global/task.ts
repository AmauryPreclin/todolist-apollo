import { GET_TODOLIST } from "../../types/graphql";
import { merge } from "lodash";

const addTask = (_: any, { text }: any, { cache }: any) => {
  const resultCache = cache.readQuery({ query: GET_TODOLIST });
  const newData = {
    todolist: {
      tasks: [
        ...resultCache.todolist.tasks,
        {
          __typename: "Task",
          text: text,
          id: resultCache.todolist.tasks.length,
        },
      ],
    },
  };
  const data = merge({}, resultCache, newData);
  cache.writeQuery({ query: GET_TODOLIST, data });

  return data;
};

const removeTask = (_: any, { text, id }: any, { cache }: any) => {
  const resultCache = cache.readQuery({ query: GET_TODOLIST });
  const newData = {
    todolist: {
      tasks: [
        ...resultCache.todolist.tasks,
        { __typename: "Task", text: text, id: id },
      ],
    },
  };
  const data = merge({}, resultCache, newData);
  cache.writeQuery({ query: GET_TODOLIST, data });

  return data;
};

export { addTask, removeTask };
