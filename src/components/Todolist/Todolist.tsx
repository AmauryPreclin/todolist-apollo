// Vendor
import React from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";

// Internal
import { AddTask } from "../AddTask/AddTask";
import { ADD_TASK, GET_TODOLIST, REMOVE_TASK } from "../../types/graphql";
import { Task } from "../Task/Task";
import { Todolist } from "../../types/todolist";

// CSS
import "./styles.css";

export interface TodolistProps {
  title: string;
  className?: string;
}

/**
 * @name TodolistComponent
 * @description Todolist Component, contains some tasks (Task) and a form to add tasks
 */
const TodolistComponent: React.FC<TodolistProps> = (props) => {
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
  const todolist: Todolist = data.todolist;
  const [addTask] = useMutation(ADD_TASK);
  const [removeTask] = useMutation(REMOVE_TASK);

  const upTask = (index: number) => {};

  const downTask = (index: number) => {};

  const renderTasks = () => {
    return todolist.tasks.map((task, index) => (
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

export { TodolistComponent };
