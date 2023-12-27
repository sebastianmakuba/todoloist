import React from 'react';



const TodoList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() =>
              updateTask(task.id, { ...task, completed: !task.completed })
            }
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : '' }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
