import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const MOCK_DATA = [1, 2, 3, 4, 5].map((id) => ({
  name: `Task ${id}`,
  day: `Day ${id}`,
  id,
  reminder: id % 2 !== 0,
}));

function App() {
  const [tasks, setTasks] = useState(MOCK_DATA);

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

  return (
    <div className="container">
      <Header title={"Task Tracker"} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
}

export default App;
