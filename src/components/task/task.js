import React from "react";
import "./task.css";
import { formatDistance } from "date-fns";

export default class Task extends React.Component {
  render() {
    const { title, createTime, removeTask, completed, edit, toggleDone } =
      this.props;

    let style = completed ? "completed" : null;
    style = edit ? "editing" : style;
    const editField = (
      <input type="text" className="edit" defaultValue={title} />
    );
    return (
      <li className={style}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={toggleDone}
            defaultChecked={completed}
          />
          <label>
            <span className="description">{title}</span>
            <span className="created">
              {formatDistance(createTime, new Date(), {
                addSuffix: true,
              })}
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={removeTask}></button>
        </div>
        {edit ? editField : null}
      </li>
    );
  }
}
