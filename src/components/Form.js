import React, { useState } from "react";

export default function Form({ addToDo }) {
  const [newTask, setNewTask] = useState("");

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask !== "") addToDo(newTask);
    setNewTask("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        onChange={handleChange}
        value={newTask}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
