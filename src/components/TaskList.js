import React from "react";
import { useSelector } from "react-redux";

import TaskCard from "./TaskCard";

const TaskList = ({ category, title }) => {
  const store = useSelector((store) => store);
  return (
    <div className="kanban-container">
      <h2>{title}</h2>
      {store.tasks.list
        .filter((item) => item.status === category)
        .map((item) => (
          <TaskCard key={item.idTask} task={item} />
        ))}
    </div>
  );
};

export default TaskList;
