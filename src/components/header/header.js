import PropTypes from 'prop-types'

import NewTaskForm from '../new-task-form'

const Header = ({ addTask }) => {
  return (
    <header className="header">
      <h1>Todos (hooks)</h1>
      <NewTaskForm addTask={addTask} />
    </header>
  )
}

Header.defaultProps = {
  addTask: () => {},
}

Header.propTypes = {
  addTask: PropTypes.func,
}

export default Header
