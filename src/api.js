/**
 * Add Task
 * @param task contains user input (without id)
 * @returns the newly created task (with id)
 */
const addTask = async (task) => {
  const response = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

/**
 * Delete Task for a given id
 * @param id the id the task
 */
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/**
 * Get Task by id
 * @param id the id of the task
 * @returns a task
 */
const getTask = async (id) => {
  const data = await fetch(`http://localhost:5000/tasks/${id}`);
  const task = await data.json();
  return task;
};

/**
 * Get Tasks
 * @returns a list of tasks
 */
const getTasks = async () => {
  const data = await fetch(`http://localhost:5000/tasks`);
  const tasks = await data.json();
  return tasks;
};

/**
 * Update Task with the new task data
 * @param task the task to be updated
 * @returns the updated task
 */
const updateTask = async (task) => {
  const res = await fetch(`http://localhost:5000/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await res.json();
};

const api = { addTask, deleteTask, getTask, getTasks, updateTask };
export default api;
