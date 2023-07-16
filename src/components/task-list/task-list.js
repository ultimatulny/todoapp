import React from "react";
import Task from "../task";

const TaskList = ({ tasks, removeTask }) => {
  const elements = tasks.map((item) => {
    const { ...itemProps } = item;
    return (
      <Task
        {...itemProps}
        key={item.id}
        removeTask={() => removeTask(item.id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
