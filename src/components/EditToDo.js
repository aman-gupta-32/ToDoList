import React, { useState } from "react";

export default function EditToDo({ task, onUpdate }) {
  const [newTask, setNewTask] = useState(task.task);

  function handleChange(e) {
    setNewTask(e.target.value);
    console.log(newTask);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdate(task.id, newTask);
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update the task..."
        onChange={handleChange}
        value={newTask}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
}
