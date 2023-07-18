import React from "react";
import Task from "../task";
import PropTypes from "prop-types";

const TaskList = ({
  tasks,
  removeTask,
  toggleDone,
  toggleEdit,
  setNewTitle,
}) => {
  const elements = tasks.map((item) => {
    const { ...itemProps } = item;
    return (
      <Task
        {...itemProps}
        key={item.id}
        removeTask={() => removeTask(item.id)}
        toggleDone={() => toggleDone(item.id)}
        toggleEdit={() => toggleEdit(item.id)}
        setNewTitle={setNewTitle}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.defaultProps = {
  tasks: [],
  removeTask: () => {},
  toggleDone: () => {},
  toggleEdit: () => {},
  setNewTitle: () => {},
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  toggleDone: PropTypes.func,
  toggleEdit: PropTypes.func,
  setNewTitle: PropTypes.func,
};

export default TaskList;
