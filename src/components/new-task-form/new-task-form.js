import React from "react";

export default class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      label: "",
    };
    this.sendTaskToAdd = (e) => {
      e.preventDefault();
      if (this.state.label === "") return;
      this.props.addTask(this.state.label);
      this.setState({
        label: "",
      });
    };
    this.updateState = (e) => {
      this.setState({
        label: e.target.value,
      });
    };
  }

  render() {
    return (
      <form onSubmit={this.sendTaskToAdd}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.label}
          onChange={this.updateState}
        />
      </form>
    );
  }
}
