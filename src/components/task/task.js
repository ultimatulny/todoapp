import React from "react";
import "./task.css";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

export default class Task extends React.Component {
  static defaultProps = {
    id: 1,
    title: "Задача",
    createTime: new Date(),
    removeTask: () => {},
    completed: false,
    edit: false,
    toggleDone: () => {},
    toggleEdit: () => {},
  };

  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    createTime: PropTypes.number,
    removeTask: PropTypes.func,
    completed: PropTypes.bool,
    edit: PropTypes.bool,
    toggleDone: PropTypes.func,
    toggleEdit: PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      label: "",
    };
    this.sendNewTitle = (e) => {
      e.preventDefault();
      if (e.target.value === "") return;
      this.props.setNewTitle(this.props.id, this.state.label);
    };
    this.updateState = (e) => {
      this.setState({
        label: e.target.value,
      });
    };
  }
  render() {
    const {
      title,
      createTime,
      removeTask,
      completed,
      edit,
      toggleDone,
      toggleEdit,
    } = this.props;

    let style = completed ? "completed" : null;
    style = edit ? "editing" : style;
    const editField = (
      <form onSubmit={this.sendNewTitle}>
        <input
          type="text"
          className="edit"
          defaultValue={title}
          onChange={this.updateState}
        />
      </form>
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
              {"created "}
              {formatDistanceToNow(createTime, new Date(), {
                addSuffix: true,
              })}
              {" ago"}
            </span>
          </label>
          <button className="icon icon-edit" onClick={toggleEdit}></button>
          <button className="icon icon-destroy" onClick={removeTask}></button>
        </div>
        {edit ? editField : null}
      </li>
    );
  }
}
