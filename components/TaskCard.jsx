import React from 'react';

function TaskCard({ task, onEdit }) {
  const { name, description, dueDate, status, priority } = task;

  return (
    <div className="bg-lime-200 w-96 p-4 rounded-2xl shadow-md transition-transform duration-200 hover:scale-105">
      <div>
        <h1 className="font-bold text-xl mb-2">{name}</h1>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-500 mb-3">{dueDate}</p>
        <div className="flex justify-between items-center">
          <p
            className={`text-white p-1 rounded-xl ${
              status === 'in-progress' ? 'bg-red-500' : 'bg-green-800'
            }`}
          >
            {status}
          </p>
          <div className="flex gap-3 items-center">
            <p className="text-gray-600">Comments</p>
            <p
              className={`text-white p-2 rounded-full ${
                priority === 'low'
                  ? 'bg-white'
                  : priority === 'medium'
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              }`}
            >
              {priority}
            </p>
            <button
              onClick={() => onEdit(task)}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Edit
            </button>
            <button className="text-red-500 hover:underline focus:outline-none">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
