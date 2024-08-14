import React, { useState } from 'react';
import '../css/CommentInput.css';


const CommentInput = ({ onAddComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !comment) {
      setError('Both fields are required');
      return;
    }

    onAddComment({ id: Date.now(), name, comment, date: new Date().toLocaleString(), replies: [] });
    setName('');
    setComment('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <textarea 
          placeholder="Comment" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
        />
      </div>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button type="submit">Post</button>
    </form>
  );
};

export default CommentInput;
