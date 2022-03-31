import React, { useState } from "react";

import TaskDialog from "./TaskDialog";

const TaskCard = ({ task }) => {
  // this controls the dialog window which let's you edit the task info
  const [openDialog, setOpenDialog] = useState(false);

  //simple function to add different background color phase span
  const addSpanClass = (phase) => {
    switch (phase) {
      case "1":
        return "#C27979";
      case "2":
        return "#88C279";
      case "3":
        return "#54BAD5";
      default:
        return "blue";
    }
  };

  // opens closed dialog window
  const onCloseDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="task-card-container">
      {openDialog && <TaskDialog onCloseDialog={onCloseDialog} task={task} />}
      <div className="task-card-line 1st-line">
        <h3>{task.taskName}</h3>{" "}
        <button className="btn-dots" onClick={onCloseDialog}>
          ...
        </button>
      </div>
      <div className="task-card-line 2nd-line">{task.description}</div>
      <div className="task-card-line 3rd-line">
        <span
          className="phase"
          style={{ backgroundColor: addSpanClass(task.phase) }}
        >
          FASE {task.phase}
        </span>
        <p className="time-period">
          {task.startAt} - {task.endAt}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
