import React from 'react'
import PropTypes from 'prop-types'

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
          <button
            className={this.props.filter === 'All' ? 'selected' : null}
            onClick={() => this.props.changeFilter('All')}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={this.props.filter === 'Active' ? 'selected' : null}
            onClick={() => this.props.changeFilter('Active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={this.props.filter === 'Completed' ? 'selected' : null}
            onClick={() => this.props.changeFilter('Completed')}
          >
            Completed
          </button>
        </li>
      </ul>
    )
  }
}
