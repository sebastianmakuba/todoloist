import React, { useState, useEffect } from 'react';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';



const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = (text) => {
    fetch('http://127.0.0.1:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, completed: false }),
    })
      .then((res) => res.json())
      .then((data) => setTasks([...tasks, data]));
  };

  const deleteTask = (id) => {
    fetch(`http://127.0.0.1:5000/tasks/${id}`, {
      method: 'DELETE',
    }).then(() => setTasks(tasks.filter((task) => task.id !== id)));
  };

  const updateTask = (id, updatedTask) => {
    fetch(`http://127.0.0.1:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) =>
        setTasks(tasks.map((task) => (task.id === id ? data : task)))
      );
  };

  return (
    <div>
      <h1>Welcome to Your Todo List!</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;
