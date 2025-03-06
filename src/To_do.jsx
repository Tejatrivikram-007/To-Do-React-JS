import  { useState } from 'react'
import'./To_do.css'

const To_do = () => {
    const [tasks, setTasks] =useState([ ]);
    const [task, setTask] =useState(' ');
  
    const addTask = () => {
      if (task.trim() !== '') {
        setTasks([...tasks, { text: task, completed: false }]);
        setTask('');
      }
    };
  
    const deleteTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    };
  
    const toggleComplete = (index) => {
      const newTasks = tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      );
      setTasks(newTasks);
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-Do List</h1>
          <div className="todo-input">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a new task"
            />
            <button onClick={addTask}>Add Task</button>
          </div>
          <ul className="todo-list">
            {tasks.map((t, index) => (
              <li key={index} className={t.completed ? 'completed' : ''}>
                <span onClick={() => toggleComplete(index)}>{t.text}</span>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }

export default To_do
