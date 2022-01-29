import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return tasks.map((task) => (
    <Task task={task} onDelete={onDelete} key={task.id} onToggle={onToggle} />
  ));
};

export default Tasks;
