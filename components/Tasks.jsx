'use client';
import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import axios from 'axios';

function Tasks() {
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const getTasks = await axios.get('/api/tasks');
      setAllTasks(getTasks.data);
      console.log(getTasks.data);
    };
    fetchData();
  }, []);

  return (
    <div className="h-full bg-yellow-100 w-full">
      <div className="p-5 ">
        {allTasks?.map((task) => (
          <div className="" key={task.id}>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
