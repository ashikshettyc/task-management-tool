'use client';
import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import axios from 'axios';
import TaskCreateForm from './TaskCreateForm';

function Tasks() {
  const [allTasks, setAllTasks] = useState([]);
  const [edit, setEdit] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const getTasks = await axios.get('/api/tasks');
      setAllTasks(getTasks.data);
      console.log(getTasks.data);
    };
    fetchData();
  }, []);
  function handleform(event){
    setEdit(prev=>!prev)
    console.log(event.target.value)
      }
  return (
    <div className="h-full bg-yellow-100 w-full ">
      
        {
          edit ? <TaskCreateForm handleform={handleform}/> : (
            <div className="p-5 flex flex-wrap gap-3">
            {allTasks?.map((task) => (
              <div className="" key={task.id}>
                <TaskCard task={task} handleform={handleform}/>
              </div>
            ))}
             </div>
          )
        }
       
     
    </div>
  );
}

export default Tasks;
