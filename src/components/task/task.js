import React from 'react'
import './task.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

export default class Task extends React.Component {
  static defaultProps = {
    id: 1,
    title: 'Задача',
    createTime: new Date(),
    removeTask: () => {},
    completed: false,
    edit: false,
    toggleDone: () => {},
    toggleEdit: () => {},
  }

  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    createTime: PropTypes.number,
    removeTask: PropTypes.func,
    completed: PropTypes.bool,
    edit: PropTypes.bool,
    toggleDone: PropTypes.func,
    toggleEdit: PropTypes.func,
  }

  constructor() {
    super()
    this.state = {
      label: '',
      currentTime: new Date(),
    }
    this.timer = null
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date(),
      })
    }, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  sendNewTitle = (e) => {
    e.preventDefault()
    if (this.state.label.trim() === '') return
    this.props.setNewTitle(this.props.id, this.state.label)
  }
  updateState = (e) => {
    this.setState({
      label: e.target.value.trim(),
    })
  }
  setStateLabelOnEditClick = () => {
    this.setState({
      label: this.props.title,
    })
  }

  render() {
    const { title, createTime, removeTask, completed, edit, toggleDone, toggleEdit } = this.props
    const editField = (
      <form onSubmit={this.sendNewTitle}>
        <input type="text" className="edit" defaultValue={title} onChange={this.updateState} />
      </form>
    )
    return (
      <>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={toggleDone} defaultChecked={completed} />
          <label>
            <span className="description">{title}</span>
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
              this.setStateLabelOnEditClick()
            }}
          ></button>
          <button className="icon icon-destroy" onClick={removeTask}></button>
        </div>
        {edit ? editField : null}
      </>
    )
  }
}
