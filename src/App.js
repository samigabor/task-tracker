import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import api from "./api";
import AddTask from "./components/AddTask";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = async (task) => {
    const res = await api.addTask(task);
    setTasks([...tasks, res]);
  };

  const deleteTask = async (id) => {
    await api.deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getTasks = async () => {
    setTasks(await api.getTasks());
  };

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  const toggleReminder = async (id) => {
    const task = await api.getTask(id);
    const updatedTask = { ...task, reminder: !task.reminder };
    const res = await api.updateTask(updatedTask);
    setTasks(tasks.map((task) => (task.id === id ? res : task)));
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="container">
      <Header
        title={"Task Tracker"}
        showAddTask={showAddTask}
        toggleAddTask={toggleAddTask}
      />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              {showAddTask && <AddTask addTask={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                <p>No tasks</p>
              )}
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
