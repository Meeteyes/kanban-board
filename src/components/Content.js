import React from "react";

import TaskList from "./TaskList";

const Content = () => {
  return (
    <div className="content-container">
      <TaskList category="TODO" title="A hacer" />
      <TaskList category="IN_PROGRESS" title="En Proceso" />
      <TaskList category="DONE" title="Objetivos cumplidos" />
    </div>
  );
};

export default Content;
