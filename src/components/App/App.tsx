// Vendor
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Internal
import { Header } from "../Header";
import { Todolist } from "../Todolist/Todolist";
import { WeekDate } from "../WeekDate/WeekDate";

// CSS
import "./styles.css";

export interface AppProps {}

/**
 * @name App
 * @description Main component
 */
const App: React.FC<AppProps> = () => {
  // Hooks

  // Handlers

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/:day">
            <Todolist className="todolistAlone" />
          </Route>
          <Route path="/">
            <WeekDate />
            <div id="app-container">
              <Todolist title="Monday"></Todolist>
              <Todolist title="Tuesday"></Todolist>
              <Todolist title="Wednesday"></Todolist>
              <Todolist title="Thursday"></Todolist>
              <Todolist title="Friday"></Todolist>
            </div>
            {/*<div>
              <h2>Todolist</h2>
              {todolist.tasks.map((task) => (
                <div>{task.text}</div>
              ))}
              <input value={taskName} onChange={handleChange}></input>
              <button onClick={handleClick}>Ajouter</button>
              </div>*/}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export { App };
