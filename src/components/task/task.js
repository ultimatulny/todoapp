import { useState, useEffect, useRef } from 'react'
import './task.css'
import { formatDistanceToNow, format } from 'date-fns'
import PropTypes from 'prop-types'

const Task = (props) => {
  const [state, setState] = useState({
    label: '',
    currentTime: new Date(),
    timerSeconds: 0,
  })

  const taskTimerRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setState((prevState) => {
        return {
          ...prevState,
          currentTime: new Date(),
        }
      })
    }, 60000)

    setState({
      ...state,
      timerSeconds: props.timerSeconds,
    })

    return () => {
      clearInterval(timer)
      clearInterval(taskTimerRef.current)
    }
  }, [])

  const sendNewTitle = (e) => {
    e.preventDefault()
    if (state.label.trim() === '') return
    props.setNewTitle(props.id, state.label)
  }

  const updateState = (e) => {
    setState({
      ...state,
      label: e.target.value.trim(),
    })
  }

  const setStateLabelOnEditClick = () => {
    setState({
      ...state,
      label: props.title,
    })
  }

  const startTimer = () => {
    if (taskTimerRef.current || state.timerSeconds === 0) return

    taskTimerRef.current = setInterval(() => {
      setState((prevState) => {
        const newTimerSeconds = prevState.timerSeconds - 1
        if (newTimerSeconds <= 0) {
          clearInterval(taskTimerRef.current)
          taskTimerRef.current = null
        }
        return {
          ...prevState,
          timerSeconds: newTimerSeconds,
        }
      })
    }, 1000)
  }

  const pauseTimer = () => {
    clearInterval(taskTimerRef.current)
    taskTimerRef.current = null
  }

  const { title, createTime, removeTask, completed, edit, toggleDone, toggleEdit } = props

  const editField = (
    <form onSubmit={sendNewTitle}>
      <input type="text" className="edit" defaultValue={title} onChange={updateState} />
    </form>
  )

  return (
    <>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={toggleDone} defaultChecked={completed} />
        <label>
          <span className="description">{title}</span>
          <span className="timer">
            <button className="icon icon-play" onClick={startTimer}></button>
            <button className="icon icon-pause" onClick={pauseTimer}></button>
            {format(new Date().setMinutes(Math.floor(state.timerSeconds / 60), state.timerSeconds % 60), 'mm:ss')}
          </span>
          <span className="created">
            {'created '}
            {formatDistanceToNow(createTime, new Date(), {
              addSuffix: true,
            })}
            {' ago'}
          </span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            toggleEdit()
            setStateLabelOnEditClick()
          }}
        ></button>
        <button className="icon icon-destroy" onClick={removeTask}></button>
      </div>
      {edit ? editField : null}
    </>
  )
}

Task.defaultProps = {
  id: 1,
  title: 'Задача',
  createTime: new Date(),
  removeTask: () => {},
  completed: false,
  edit: false,
  toggleDone: () => {},
  toggleEdit: () => {},
  timerSeconds: 0,
}

Task.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  createTime: PropTypes.number,
  removeTask: PropTypes.func,
  completed: PropTypes.bool,
  edit: PropTypes.bool,
  toggleDone: PropTypes.func,
  toggleEdit: PropTypes.func,
  timerSeconds: PropTypes.number,
}

export default Task
