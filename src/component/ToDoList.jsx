import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ToDoList() {
  const { tasks, deleteTask } = useContext(CartContext);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
