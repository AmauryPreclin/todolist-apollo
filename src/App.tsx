import React from "react";
import "./App.css";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { GET_TODOLIST, ADD_TASK } from "./types/graphql";
import { Todolist } from "./types/todolist";

function App() {
  const { data } = useQuery(GET_TODOLIST);
  const todolist: Todolist = data.todolist;
  const [addTask] = useMutation(ADD_TASK);

  const [taskName, setTaskName]: any = React.useState("");

  const handleClick = () => {
    if (taskName) addTask({ variables: { text: taskName } });
    setTaskName("");
  };

  const handleChange = (event: any) => {
    setTaskName(event.target.value);
  };

  return (
    <div>
      {todolist.tasks.map((task) => (
        <div>{task.text}</div>
      ))}
      <div>
        <h2>Todolist</h2>
        <input value={taskName} onChange={handleChange}></input>
        <button onClick={handleClick}>Ajouter</button>
      </div>
    </div>
  );
}

export default App;
