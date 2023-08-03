import React from 'react'

import './new-task-form.css'

export default class NewTaskForm extends React.Component {
  constructor() {
    super()
    this.state = {
      taskLabel: '',
      minutes: '',
      seconds: '',
    }
  }

  sendTaskToAdd = (e) => {
    e.preventDefault()
    if (this.state.taskLabel.trim() === '') return
    this.props.addTask(this.state)
    this.setState({
      taskLabel: '',
      minutes: '',
      seconds: '',
    })
  }
  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.sendTaskToAdd} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="Task"
          autoFocus
          value={this.state.taskLabel}
          onChange={this.updateState}
          required
          type="text"
          name="taskLabel"
          autoComplete="off"
        />
        <input
          className="new-todo-form__timer"
          value={this.state.minutes}
          onChange={this.updateState}
          placeholder="Min"
          required
          type="number"
          name="minutes"
          min="0"
          autoComplete="off"
        />
        <input
          className="new-todo-form__timer"
          value={this.state.seconds}
          onChange={this.updateState}
          placeholder="Sec"
          required
          type="number"
          name="seconds"
          max="59"
          min="0"
          autoComplete="off"
        />
        <button type="submit" />
      </form>
    )
  }
}
