import React, { useState } from 'react';
import TaskCreateForm from './TaskCreateForm';
function Sidebar() {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm((prev) => !prev);
  };
  return (
    <div className="h-full bg-red-100 w-full">
      <div>
        <button onClick={handleClick}>Create Task</button>
      </div>
      {showForm && <TaskCreateForm />}
    </div>
  );
}

export default Sidebar;
