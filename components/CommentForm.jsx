import React, { useState } from 'react';
import axios from 'axios';

function CommentForm({ taskId }) {
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState(1); // Assuming a static userId for simplicity

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/comments', {
        taskId,
        message,
        userId,
      });
      console.log('Comment added:', response.data);
      setMessage('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a comment"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default CommentForm;
