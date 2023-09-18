import React, { useState } from 'react'

import Header from '../header'
import TaskList from '../task-list'
import Footer from '../footer'

import './app.css'

const App = () => {
  let globalId = 0
  const createTask = (title, timerSeconds = 0) => {
    globalId++
    return {
      id: globalId,
      title,
      createTime: Date.now(),
      completed: false,
      edit: false,
      timerSeconds: timerSeconds,
    }
  }
  const [tasks, setTasks] = useState([createTask('Task', 60), createTask('Test', 150), createTask('123', 9000)])
  const [filter, setFilter] = useState('All')

  const removeTask = (id) => {
    setTasks((tasks) => {
      const idx = tasks.findIndex((el) => el.id === id)
      const newArr = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)]
      return newArr
    })
  }

  const toggleElem = (id, key) => {
    setTasks((tasks) => {
      const idx = tasks.findIndex((el) => el.id === id)
      const oldItem = tasks[idx]
      const newItem = { ...oldItem }
      newItem[key] = !newItem[key]
      const newArr = [...tasks.slice(0, idx), newItem, ...tasks.slice(idx + 1)]

      return newArr
    })
  }

  const toggleDone = (id) => {
    toggleElem(id, 'completed')
  }

  const toggleEdit = (id) => {
    toggleElem(id, 'edit')
  }

  const setNewTitle = (id, title) => {
    setTasks((tasks) => {
      const idx = tasks.findIndex((el) => el.id === id)
      const oldItem = tasks[idx]
      const newItem = { ...oldItem }
      newItem.edit = !newItem.edit
      newItem.title = title
      const newArr = [...tasks.slice(0, idx), newItem, ...tasks.slice(idx + 1)]

      return newArr
    })
  }

  const addTask = (taskObj) => {
    const { taskLabel, minutes, seconds } = taskObj
    const timerSeconds = +minutes * 60 + +seconds

    setTasks((tasks) => {
      const newArr = [...tasks, createTask(taskLabel, timerSeconds)]
      return newArr
    })
  }

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }

  const clearCompleted = () => {
    setTasks((tasks) => {
      const newArr = tasks.filter((el) => !el.completed)
      return newArr
    })
  }

  const itemsLeft = tasks.filter((el) => !el.completed).length

  let currentTasks = tasks
  if (filter === 'Active') {
    currentTasks = currentTasks.filter((el) => !el.completed)
  } else if (filter === 'Completed') {
    currentTasks = currentTasks.filter((el) => el.completed)
  }

  return (
    <section className="todoapp">
      <Header addTask={addTask} />
      <section className="main">
        <TaskList
          tasks={currentTasks}
          removeTask={removeTask}
          toggleDone={toggleDone}
          toggleEdit={toggleEdit}
          setNewTitle={setNewTitle}
        />
        <Footer itemsLeft={itemsLeft} filter={filter} changeFilter={changeFilter} clearCompleted={clearCompleted} />
      </section>
    </section>
  )
}

export default App
