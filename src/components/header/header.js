import NewTaskForm from "../new-task-form";
import PropTypes from "prop-types";

const Header = ({ addTask }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addTask={addTask} />
    </header>
  );
};

Header.defaultProps = {
  addTask: () => {},
};

Header.propTypes = {
  addTask: PropTypes.func,
};

export default Header;
