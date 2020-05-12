// Vendor
import React from "react";
import Popup from "reactjs-popup";

// CSS
import "./styles.css";

export interface TaskProps {
  texte: string;
  id: number;
  key: string;
  removeTask: Function;
  upTask: Function;
  downTask: Function;
  title: string;
}

/**
 * @name Task
 * @description Task component, part of the todolist, contains a text to do...
 * and buttons to remove, up and down tasks
 */
const Task: React.FC<TaskProps> = (props) => {
  let { downTask, id, texte, removeTask, upTask, title } = props;

  const [removeClass, setRemoveClass] = React.useState("");
  const [modifyText, setModifyText] = React.useState(texte);
  const [taskName, setTaskName] = React.useState("");

  const handleClickRemove = () => {
    setRemoveClass(" remove-task");
    setTimeout(() => {
      removeTask({ variables: { id: id, title: title } });
    }, 1999);
  };

  const handleClickModifyText = () => {
    if (taskName) setModifyText(taskName);
  };

  const handleChangeModifyText = (event: any) => {
    setTaskName(event.target.value);
  };

  return (
    <div className={`task${removeClass}`}>
      <Popup
        trigger={<div className="divClick">{modifyText}</div>}
        position="right center"
        closeOnDocumentClick
        closeOnEscape
      >
        <div className="popupDiv">
          <input onChange={handleChangeModifyText}></input>
          <button onClick={handleClickModifyText}>Modify text</button>
        </div>
      </Popup>

      <div className="taskButton">
        <button onClick={handleClickRemove}>Remove task</button>
        <button>Up</button>
        <button>Down</button>
      </div>
    </div>
  );
};

export { Task };
