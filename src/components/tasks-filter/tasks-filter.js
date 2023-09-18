import PropTypes from 'prop-types'

import './tasks-filter.css'

const TasksFilter = (props) => {
  return (
    <ul className="filters">
      <li>
        <input
          type="radio"
          name="filter"
          id="filter-all"
          checked={props.filter === 'All'}
          onChange={() => props.changeFilter('All')}
        />
        <label htmlFor="filter-all">All</label>
      </li>
      <li>
        <input
          type="radio"
          name="filter"
          id="filter-active"
          checked={props.filter === 'Active'}
          onChange={() => props.changeFilter('Active')}
        />
        <label htmlFor="filter-active">Active</label>
      </li>
      <li>
        <input
          type="radio"
          name="filter"
          id="filter-completed"
          checked={props.filter === 'Completed'}
          onChange={() => props.changeFilter('Completed')}
        />
        <label htmlFor="filter-completed">Completed</label>
      </li>
    </ul>
  )
}

TasksFilter.defaultProps = {
  filter: 'All',
  changeFilter: () => {},
}
TasksFilter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
}

export default TasksFilter
