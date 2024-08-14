import React from 'react';
import Comment from './comment';
import '../css/CommentList.css';


const CommentList = ({ comments, onDelete, onEdit, onReply }) => {
  return (
    <div>
      {comments.sort((a, b) => new Date(b.date) - new Date(a.date)).map(comment => (
        <Comment 
          key={comment.id} 
          comment={comment} 
          onDelete={onDelete} 
          onEdit={onEdit} 
          onReply={onReply} 
        />
      ))}
    </div>
  );
};

export default CommentList;
