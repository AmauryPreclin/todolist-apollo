// Vendor
import React from "react";

// Internal

// CSS

export interface AddTaskProps {
  title: string;
  addTask: Function;
}

/**
 * @name AddTask
 * @description Form to add task
 */
const AddTask: React.FC<AddTaskProps> = (props) => {
  const { title, addTask } = props;

  // Hooks
  const [taskName, setTaskName] = React.useState("");

  // Handlers
  const handleChange = (event: any) => {
    setTaskName(event.target.value);
  };

  const handleClick = () => {
    if (taskName) {
      addTask({ variables: { text: taskName } });
      setTaskName("");
    }
  };

  return (
    <div>
      <div>
        <span>Task: </span>
        <input value={taskName} onChange={handleChange}></input>
      </div>
      <button onClick={handleClick} type="button">{`Add task ${title}`}</button>
    </div>
  );
};

export { AddTask };
