import PropTypes from 'prop-types'

import Task from '../task'

const TaskList = ({ tasks, removeTask, toggleDone, toggleEdit, setNewTitle }) => {
  const elements = tasks.map((item) => {
    const { ...itemProps } = item
    let style = item.completed ? 'completed' : null
    style = item.edit ? 'editing' : style

    return (
      <li className={style} key={item.id}>
        <Task
          {...itemProps}
          removeTask={() => removeTask(item.id)}
          toggleDone={() => toggleDone(item.id)}
          toggleEdit={() => toggleEdit(item.id)}
          setNewTitle={setNewTitle}
        />
      </li>
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  tasks: [],
  removeTask: () => {},
  toggleDone: () => {},
  toggleEdit: () => {},
  setNewTitle: () => {},
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  toggleDone: PropTypes.func,
  toggleEdit: PropTypes.func,
  setNewTitle: PropTypes.func,
}

export default TaskList
