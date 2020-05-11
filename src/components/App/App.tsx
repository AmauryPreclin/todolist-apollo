// Vendor
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Internal
import { Header } from "../Header";
import { TodolistComponent } from "../Todolist/Todolist";
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
          <Route path="/">
            <WeekDate />
            <div id="app-container">
              <TodolistComponent title="Monday"></TodolistComponent>
              <TodolistComponent title="Tuesday"></TodolistComponent>
              <TodolistComponent title="Wednesday"></TodolistComponent>
              <TodolistComponent title="Thursday"></TodolistComponent>
              <TodolistComponent title="Friday"></TodolistComponent>
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
