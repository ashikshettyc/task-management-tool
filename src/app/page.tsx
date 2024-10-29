'use client';
import Sidebar from '@/components/Sidebar';
import Tasks from '@/components/Tasks';
import React from 'react';

function App() {
  return (
    <div className="App h-screen w-full">
      <h1>Task Management Tool</h1>
      <div>
        <div className="flex gap-5">
          <div className="h-screen w-[15%]">
            <Sidebar />
          </div>
          <div className="h-screen w-[85%]">
            <Tasks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
