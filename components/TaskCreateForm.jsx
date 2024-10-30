import axios from 'axios';
import React, { useEffect, useState } from 'react';

function TaskCreateForm({ task, handleform }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    dueDate: '',
    priority: 'low',
    status: 'in-progress',
    createBy: 1,
  });

  useEffect(() => {
    if (task) {
      setFormData({
        name: task.name,
        description: task.description,
        dueDate: task.dueDate,
        priority: task.priority,
        status: task.status,
        createBy: task.id,
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task) {
        await axios.put(`/api/tasks/${task.id}`, formData);
      } else {
        await axios.post('/api/tasks', formData);
      }
      handleform();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-lg rounded-lg w-[30%] mx-auto mt-5"
    >
      <div className="flex justify-between mb-4 ">
        <h2 className="text-2xl font-semibold text-blue-600">Create Task</h2>
        <button
          type="button"
          onClick={handleform}
          className="text-sm text-red-500 hover:underline"
        >
          Clear
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 text-gray-700">
          Task Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-1 text-gray-700">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring focus:ring-blue-500"
          rows="4"
          required
        />
      </div>
      <div className="flex justify-between">
        <div className="mb-4">
          <label htmlFor="status" className="block mb-1 text-gray-700">
            Status:
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dueDate" className="block mb-1 text-gray-700">
            Due Date and Time:
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block mb-1 text-gray-700">
          Priority:
        </label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 w-full transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default TaskCreateForm;
