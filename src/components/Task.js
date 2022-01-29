import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className="task"
      style={{ borderLeft: `5px solid ${task.reminder ? "green" : "red"}` }}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.name}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
