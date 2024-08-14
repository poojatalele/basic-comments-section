import React, { useState } from 'react';
import '../css/Comment.css';


const Comment = ({ comment, onDelete, onEdit, onReply }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(comment.id, editedComment);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <p><strong>{comment.name}</strong> <small>{comment.date}</small></p>
      {isEditing ? (
        <textarea 
          value={editedComment} 
          onChange={(e) => setEditedComment(e.target.value)}
        />
      ) : (
        <p>{comment.comment}</p>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => onReply(comment.id)}>Reply</button>
      <button onClick={() => onDelete(comment.id)}>Delete</button>
      <div>
        {comment.replies.map(reply => (
          <Comment key={reply.id} comment={reply} onDelete={onDelete} onEdit={onEdit} onReply={onReply} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
