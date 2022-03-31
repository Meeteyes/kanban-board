import React, { useState } from "react";
import { useDispatch } from "react-redux";
import tasks from "../reducers/tasks";

const TaskDialog = ({ onCloseDialog, task }) => {
  // copying task info to components state in order to edit it
  const [taskName, setTaskName] = useState(task.taskName);
  const [description, setDescription] = useState(task.description);
  const [phase, setPhase] = useState(task.phase);
  const [startAt, setStartAt] = useState(task.startAt);
  const [endAt, setEndAt] = useState(task.endAt);
  const [status, setStatus] = useState(task.status);

  const dispatch = useDispatch();

  // before closing we update the Redux state with the new info, we send it with exact same properties as other task objects
  // in real life situation I would implement validation of data before calling the reducer
  const handleSubmit = () => {
    dispatch(
      tasks.actions.setTask({
        description,
        endAt,
        idTask: task.idTask,
        phase,
        startAt,
        status,
        taskName,
      })
    );
    onCloseDialog();
  };
  return (
    <div className="task-dialog-wrapper">
      <div className="task-dialog-card">
        <button onClick={onCloseDialog}>Close</button>
        <input
          className="input task"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Change Task"
        />
        <textarea
          className="input description"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Change Description"
          cols="30"
          rows="5"
        />
        <input
          className="input phase"
          type="text"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
          placeholder="Change Phase"
        />
        <input
          className="input startDate"
          type="text"
          value={startAt}
          onChange={(e) => setStartAt(e.target.value)}
          placeholder="Change Start Date"
        />
        <input
          className="input task"
          type="text"
          value={endAt}
          onChange={(e) => setEndAt(e.target.value)}
          placeholder="Change End Date"
        />
        <select
          className="input"
          id="selector"
          onChange={(event) => setStatus(event.target.value)}
          value={status}
          required
        >
          <option value="TODO">Todo</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
        <button onClick={handleSubmit}>Save and Exit</button>
      </div>
    </div>
  );
};

export default TaskDialog;
