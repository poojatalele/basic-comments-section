import React, { useState } from 'react';
import '../css/ReplyInput.css';


const ReplyInput = ({ onAddReply, parentId }) => {
  const [name, setName] = useState('');
  const [reply, setReply] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !reply) {
      setError('Both fields are required');
      return;
    }

    onAddReply(parentId, { id: Date.now(), name, comment: reply, date: new Date().toLocaleString(), replies: [] });
    setName('');
    setReply('');
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
          placeholder="Reply" 
          value={reply} 
          onChange={(e) => setReply(e.target.value)} 
        />
      </div>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button type="submit">Post Reply</button>
    </form>
  );
};

export default ReplyInput;
