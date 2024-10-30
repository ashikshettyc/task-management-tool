import React, { useState } from 'react';
import TaskCreateForm from './TaskCreateForm';

function Sidebar() {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="h-full bg-red-200 p-5 flex flex-col">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-red-600">Task Manager</h2>
      </div>
      <button
        onClick={handleClick}
        className="bg-red-500 text-white p-3 rounded hover:bg-red-600 transition duration-200"
      >
        {showForm ? 'Hide Create Task' : 'Create Task'}
      </button>
      {showForm && <TaskCreateForm />}
    </div>
  );
}

export default Sidebar;
