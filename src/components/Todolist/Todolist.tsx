// Vendor
import React from "react";
import { useParams } from "react-router-dom";

// Internal

// CSS
import "./styles.css";

export interface TodolistProps {
  title: string;
  className: string;
}

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
  const renderTasks = () => {
    return null;
  };

  return (
    <div className={`todolist ${className}`}>
      <h2>{dayCapitalized}</h2>
      {renderTasks()}
    </div>
  );
};

export { Todolist };
