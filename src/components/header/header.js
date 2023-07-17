import NewTaskForm from "../new-task-form";

const Header = ({ addTask }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addTask={addTask} />
    </header>
  );
};

export default Header;
