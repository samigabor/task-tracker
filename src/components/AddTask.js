import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Name is required!");
      return;
    }
    addTask({ name, day, reminder });
    setName("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <div className="form-control">
          <label htmlFor="task-name">Task</label>
          <input
            type="text"
            name="task-name"
            id="taskName"
            value={name}
            placeholder="Add task name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="task-day">Day</label>
          <input
            type="text"
            name="task-day"
            id="taskDay"
            value={day}
            placeholder="Add task day"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div className="form-control form-control-check">
          <label htmlFor="task-reminder">Set Reminder</label>
          <input
            type="checkbox"
            name="task-reminder"
            id="taskReminder"
            checked={reminder}
            onChange={(e) => setReminder(e.target.checked)}
          />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </div>
    </form>
  );
};

export default AddTask;
