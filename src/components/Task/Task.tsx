// Vendor
import React from "react";
import Popup from "reactjs-popup";

// Internal

// CSS
import "./styles.css";

export interface TaskProps {
  texte: string;
  index: number;
  id: string;
  removeTask: Function;
  upTask: Function;
  downTask: Function;
}

const Task: React.FC<TaskProps> = (props) => {
  let { texte, removeTask, upTask, downTask, index, id } = props;

  const [removeClass, setRemoveClass] = React.useState("");
  const [modifyText, setModifyText] = React.useState(texte);
  const [taskName, setTaskName] = React.useState("");

  const handleClickRemove = () => {
    setRemoveClass(" remove-task");
    setTimeout(() => {
      removeTask(index);
    }, 1999);
  };

  const handleClickUp = () => {
    upTask(index);
  };

  const handleClickDown = () => {
    downTask(index);
  };

  const handleClickModifyText = () => {
    if (taskName) setModifyText(taskName);
  };

  const handleChangeModifyText = (event: any) => {
    setTaskName(event.target.value);
  };

  return (
    <div id={id} className={`task${removeClass}`}>
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
        <button onClick={handleClickUp}>Up</button>
        <button onClick={handleClickDown}>Down</button>
      </div>
    </div>
  );
};

export { Task };
