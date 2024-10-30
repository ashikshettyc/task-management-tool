'use client';
import Tasks from '@/components/Tasks';
import React from 'react';

function App() {
  return (
    <div className="App h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-4 shadow">
        <h1 className="text-2xl font-bold">Task Management Tool</h1>
      </header>
      <div className="flex h-[calc(100%-4rem)] gap-5">
        {/* <div className="h-full w-[15%] bg-white shadow-md">
          <Sidebar />
        </div> */}
        <div className="h-full w-screen bg-white shadow-md rounded-lg">
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
