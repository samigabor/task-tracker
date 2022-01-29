import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const MOCK_DATA = [1, 2].map((id) => ({
  name: `Task ${id}`,
  day: `Day ${id}`,
  id,
  reminder: id % 2 !== 0,
}));

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(MOCK_DATA);

  const addTask = (task) => {
    const id = tasks.length ? tasks.at(-1).id + 1 : 0;
    setTasks([...tasks, { ...task, id }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => ({
        ...task,
        reminder: task.id === id ? !task.reminder : task.reminder,
      }))
    );
  };

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header
        title={"Task Tracker"}
        showAddTask={showAddTask}
        toggleAddTask={toggleAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <>
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        </>
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
}

export default App;
