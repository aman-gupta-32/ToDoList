import React from "react";

export default function Todo({
  task,
  onDeleteItem,
  onCompleteItem,
  onEditItem,
}) {
  return (
    <div className="Todo">
      <p
        className={`Task-Desc ${task.completed ? "completed" : ""}`}
        onClick={() => onCompleteItem(task.id)}
      >
        {task.task}
      </p>
      <div>
        <span
          className="material-symbols-outlined"
          onClick={() => onEditItem(task.id)}
        >
          edit_square
        </span>
        <span
          className="material-symbols-outlined"
          onClick={() => onDeleteItem(task.id)}
        >
          delete
        </span>
      </div>
    </div>
  );
}
