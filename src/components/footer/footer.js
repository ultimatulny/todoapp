import PropTypes from 'prop-types'

import TasksFilter from '../tasks-filter'

const Footer = ({ itemsLeft, filter, changeFilter, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <TasksFilter filter={filter} changeFilter={changeFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  itemsLeft: 0,
  filter: 'All',
  changeFilter: () => {},
  clearCompleted: () => {},
}

Footer.propTypes = {
  itemsLeft: PropTypes.number,
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
}

export default Footer
