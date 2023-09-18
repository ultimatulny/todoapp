import { useState } from 'react'
import './new-task-form.css'

const NewTaskForm = (props) => {
  const [task, setTask] = useState({
    taskLabel: '',
    minutes: '',
    seconds: '',
  })

  const sendTaskToAdd = (e) => {
    e.preventDefault()
    if (task.taskLabel.trim() === '') return
    props.addTask(task)
    setTask({
      taskLabel: '',
      minutes: '',
      seconds: '',
    })
  }
  const updateState = (e) => {
    setTask((prevTask) => {
      return {
        ...prevTask,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <form onSubmit={sendTaskToAdd} className="new-todo-form">
      <input
        className="new-todo"
        placeholder="Task"
        autoFocus
        value={task.taskLabel}
        onChange={updateState}
        required
        type="text"
        name="taskLabel"
        autoComplete="off"
      />
      <input
        className="new-todo-form__timer"
        value={task.minutes}
        onChange={updateState}
        placeholder="Min"
        required
        type="number"
        name="minutes"
        min="0"
        autoComplete="off"
      />
      <input
        className="new-todo-form__timer"
        value={task.seconds}
        onChange={updateState}
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

export default NewTaskForm
