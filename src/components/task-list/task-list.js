import Task from "../task";

const TaskList = ({ tasks }) => {
  const elements = tasks.map((item) => {
    const { id, completed, edit, ...itemProps } = item;
    let style = completed ? "completed" : null;
    style = edit ? "editing" : style;
    const editField = (
      <input type="text" className="edit" defaultValue={item.title} />
    );
    return (
      <li className={style} key={item.id}>
        <Task {...itemProps} />
        {edit ? editField : null}
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
