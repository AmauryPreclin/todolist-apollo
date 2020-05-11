// Vendor
import React from "react";

export interface AddTaskProps {
  addTask: Function;
  title: string;
}

const AddTask: React.FC<AddTaskProps> = (props) => {
  const { addTask, title } = props;

  // Hooks
  const [taskName, setTaskName] = React.useState("");
  const [id, setId] = React.useState(0);

  // Handlers
  const handleChange = (event: any) => {
    setTaskName(event.target.value);
  };

  const handleClick = () => {
    if (taskName) addTask(taskName, id);
    setTaskName("");
    setId(id + 1);
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
