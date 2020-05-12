// Vendor
import React from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";

// Internal
import { AddTask } from "../AddTask/AddTask";
import { ADD_TASK, GET_TODOLIST, REMOVE_TASK } from "../../types/graphql";
import { Task } from "../Task/Task";
import { Task as TaskType } from "../../types/todolist";

// CSS
import "./styles.css";

export interface TodolistProps {
  title: string;
  className?: string;
}

/**
 * @name Todolist
 * @description Todolist Component, contains some tasks (Task) and a form to add tasks
 */
const Todolist: React.FC<TodolistProps> = (props) => {
  const { title, className } = props;
  let { day } = useParams();
  if (title) {
    day = title.toLowerCase();
  }
  const dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1);

  // Hooks

  // Handlers

  // Markup
  const { data } = useQuery(GET_TODOLIST);
  const [addTask] = useMutation(ADD_TASK);
  const [removeTask] = useMutation(REMOVE_TASK);

  const upTask = (index: number) => {};

  const downTask = (index: number) => {};

  const renderTasks = () => {
    let indexTodolist = "";
    for (const index in data.todolists) {
      if (data.todolists[index]["todolist"]["title"] === day)
        indexTodolist = index;
    }
    return data.todolists[
      indexTodolist
    ].todolist.tasks.map((task: TaskType, index: number) => (
      <Task
        texte={task.text}
        index={index}
        key={index}
        removeTask={removeTask}
        upTask={upTask}
        downTask={downTask}
      />
    ));
  };

  return (
    <div className={`todolist ${className}`}>
      <h2>{dayCapitalized}</h2>
      <AddTask addTask={addTask} title={day} />
      {renderTasks()}
    </div>
  );
};

export { Todolist };
