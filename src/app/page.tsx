"use client"
import React, { useState } from 'react';
import Login from './login/page';
import TaskForm from '@/components/Taskform';
import TaskList from '@/components/TaskList';

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <h1>Task Management Tool</h1> 

          <TaskForm />
     
    </div>
  );
}

export default App;

