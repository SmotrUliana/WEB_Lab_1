import React, { useState } from "react";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = (): void => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number): void => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} 
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((taskText, index) => (
          <li key={index}>
            {taskText} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;