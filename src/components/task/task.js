import "./task.css";
import { formatDistance } from "date-fns";

const Task = ({ title, createTime }) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description">{title}</span>
        <span className="created">
          {formatDistance(createTime, new Date(), {
            addSuffix: true,
          })}
        </span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
};

export default Task;
