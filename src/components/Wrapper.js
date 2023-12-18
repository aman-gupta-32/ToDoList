import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditToDo from "./EditToDo";

uuidv4();

export default function Wrapper() {
  let  [todo, setTodo] = useState([]);

  function addToDo(taskValue) {
    setTodo([
      ...todo,
      { id: uuidv4(), task: taskValue, completed: false, isEditing: false },
    ]);
    //console.log(todo);

    
  }

  function handleDelete(id) {
    setTodo((todo) => todo.filter((todo) => todo.id !== id));
  }

  function handleComplete(id) {
    setTodo(
      todo.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      )
    );
  }

  function handleEdit(id) {
    setTodo(
      todo.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, isEditing: !todoItem.isEditing }
          : todoItem
      )
    );
  }

  function handleUpdate(id, task) {
    setTodo(
      todo.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, task: task, isEditing: !todoItem.isEditing }
          : todoItem
      )
    );
  }

  return (
    <div className="TodoWrapper">
      <h1>Things To Do!!!</h1>
      <Form addToDo={addToDo} />
      {todo.map((toDoObj, index) =>
        toDoObj.isEditing ? (
          <EditToDo task={toDoObj} key={toDoObj.id} onUpdate={handleUpdate} />
        ) : (
          <Todo
            key={index}
            task={toDoObj}
            onDeleteItem={handleDelete}
            onCompleteItem={handleComplete}
            onEditItem={handleEdit}
          />
        )
      )}
    </div>
  );
}
