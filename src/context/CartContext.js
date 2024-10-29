import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const eraseList = () => setTasks([]); 

  return (
    <CartContext.Provider value={{ tasks, addTask, deleteTask, eraseList }}>
      {children}
    </CartContext.Provider>
  );
};
