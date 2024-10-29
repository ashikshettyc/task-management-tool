import React from 'react';

function TaskCard({ task }) {
  const { name, description, dueDate, status, priority } = task;
  return (
    <div className="bg-lime-200 w-96 p-3 h-52 rounded-2xl">
      <h1 className="font-bold">{name}</h1>
      <p className=" pt-5">{description}</p>
      <p className="mt-12 mb-3">{dueDate}</p>
      <div className="flex justify-between">
        <p
          className={`${
            status === 'in-progress' ? 'bg-red-500' : 'bg-green-800'
          } p-2 rounded-xl`}
        >
          {status}
        </p>
        <div className="flex gap-3">
          <p>comments</p>
          <p
            className={`${
              priority === 'low'
                ? 'bg-white'
                : priority === 'medium'
                ? 'bg-yellow-500'
                : 'bg-red-500'
            } p-2 rounded-full`}
          >
            {priority}
          </p>
          <p>edit</p>
          <p>delete</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
