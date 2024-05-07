import React, { useState } from 'react';
import Task from './Task'; // This line automatically imports the default export from Task.js

function App() {
  const [tasks, setTasks] = useState([
    'Task 1',
    'Task 2',
    'Task 3'
  ]);

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
}

export default App;
