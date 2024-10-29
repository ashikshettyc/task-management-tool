"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import CommentForm from './CommentForm';
// import CommentList from './CommentList';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p>Priority: {task.priority}</p>
          {/* <CommentList taskId={task.id} />
          <CommentForm taskId={task.id} /> */}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
