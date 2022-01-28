import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const MOCK_DATA = [1, 2, 3].map((id) => ({
  name: `Task ${id}`,
  day: `Day ${id}`,
  id,
}));

function App() {
  const [tasks, setTasks] = useState(MOCK_DATA);

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header title={"Task Tracker"} />
      <Tasks tasks={tasks} onDelete={onDelete} />
    </div>
  );
}

export default App;
