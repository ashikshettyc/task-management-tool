import axios from 'axios';
import React, { useState } from 'react';

function TaskCreateForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'in-progress',
    dueDate: '',
    priority: 'low',
  });

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
      const response = await axios.post('/api/tasks', formData);

      console.log('Form Data Submitted:', response.data);
    } catch (error) {
      console.log(error);
    }

    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-white rounded shadow">
      <h2 className="text-xl mb-4">Create Task</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Task Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-1">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          rows="4"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block mb-1">
          Status:
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        >
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="dueDate" className="block mb-1">
          Due Date and Time:
        </label>
        <input
          type="datetime-local"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block mb-1">
          Priority:
        </label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default TaskCreateForm;
