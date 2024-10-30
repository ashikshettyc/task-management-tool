'use client';
import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import axios from 'axios';
import TaskCreateForm from './TaskCreateForm';

function Tasks() {
  const [allTasks, setAllTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [selectedTask, setSelectedTask] = useState();
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      const getTasks = await axios.get('/api/tasks');
      setAllTasks(getTasks.data);
    };
    fetchData();
  }, []);

  const handleform = () => {
    setEdit(false);
    setSelectedTask(undefined);
    setShowForm(false); // Hide form after submission
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setEdit(true);
  };

  return (
    <div className="h-full bg-yellow-100 p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Task Management</h1>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          {showForm ? 'Cancel' : 'Create Task'}
        </button>
      </div>

      {showForm && <TaskCreateForm handleform={handleform} />}

      {edit ? (
        <div className="flex justify-center items-center w-full">
          <TaskCreateForm task={selectedTask} handleform={handleform} />
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {allTasks?.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={() => handleEdit(task)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tasks;
