// Vendor
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";

// Internal
import { Header } from "../Header";
import { Todolist } from "../../types/todolist";
import { WeekDate } from "../WeekDate/WeekDate";
import { ADD_TASK, GET_TODOLIST } from "../../types/graphql";

// CSS
import "./styles.css";

export interface AppProps {}

/**
 * @name App
 * @description Main component
 */
const App: React.FC<AppProps> = () => {
  const { data } = useQuery(GET_TODOLIST);
  const todolist: Todolist = data.todolist;
  const [addTask] = useMutation(ADD_TASK);

  // Hooks
  const [taskName, setTaskName]: any = React.useState("");

  // Handlers
  const handleClick = () => {
    if (taskName) addTask({ variables: { text: taskName } });
    setTaskName("");
  };

  const handleChange = (event: any) => {
    setTaskName(event.target.value);
  };

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <WeekDate />
            <div>
              <h2>Todolist</h2>
              {todolist.tasks.map((task) => (
                <div>{task.text}</div>
              ))}
              <input value={taskName} onChange={handleChange}></input>
              <button onClick={handleClick}>Ajouter</button>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export { App };
