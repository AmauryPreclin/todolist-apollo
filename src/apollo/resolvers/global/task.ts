// Vendor
import { merge } from "lodash";

// Internal
import { GET_TODOLIST } from "../../../types/graphql";

const addTask = (_: any, { text }: any, { cache }: any) => {
  const resultCache = cache.readQuery({ query: GET_TODOLIST });
  const newData = {
    todolist: {
      tasks: [
        ...resultCache.todolist.tasks,
        { __typename: "Task", text: text },
      ],
    },
  };
  const data = merge({}, resultCache, newData);
  console.log("data resolvers", data);
  cache.writeQuery({ query: GET_TODOLIST, data });

  return data;
};

export { addTask };
