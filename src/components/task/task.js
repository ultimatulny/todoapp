import React from "react";
import "./task.css";
import { formatDistance } from "date-fns";

export default class Task extends React.Component {
  constructor() {
    super();

    this.state = {
      completed: false,
      edit: false,
    };

    this.toggleComplete = () => {
      this.setState((state) => {
        return {
          completed: !state.completed,
        };
      });
    };
  }

  render() {
    const { title, createTime, removeTask } = this.props;
    const { completed, edit } = this.state;
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
            onClick={this.toggleComplete}
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
