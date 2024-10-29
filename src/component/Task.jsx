import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Task() {
  const [taskText, setTaskText] = useState(''); 
  const { addTask, eraseList } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask({ id: Date.now(), text: taskText});
      setTaskText(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
      <button type="button" onClick={eraseList}>Erase</button>
    </form>
  );
}

export default Task;
