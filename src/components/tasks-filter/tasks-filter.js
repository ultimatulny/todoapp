import React from 'react'
import PropTypes from 'prop-types'

import './tasks-filter.css'

export default class TasksFilter extends React.Component {
  static defaultProps = {
    filter: 'All',
    changeFilter: () => {},
  }
  static propTypes = {
    filter: PropTypes.string,
    changeFilter: PropTypes.func,
  }
  render() {
    return (
      <ul className="filters">
        <li>
          <input
            type="radio"
            name="filter"
            id="filter-all"
            checked={this.props.filter === 'All'}
            onChange={() => this.props.changeFilter('All')}
          />
          <label htmlFor="filter-all">All</label>
        </li>
        <li>
          <input
            type="radio"
            name="filter"
            id="filter-active"
            checked={this.props.filter === 'Active'}
            onChange={() => this.props.changeFilter('Active')}
          />
          <label htmlFor="filter-active">Active</label>
        </li>
        <li>
          <input
            type="radio"
            name="filter"
            id="filter-completed"
            checked={this.props.filter === 'Completed'}
            onChange={() => this.props.changeFilter('Completed')}
          />
          <label htmlFor="filter-completed">Completed</label>
        </li>
      </ul>
    )
  }
}
