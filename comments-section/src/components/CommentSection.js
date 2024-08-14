import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import ReplyInput from './ReplyInput';
import { addComment, addReply, editComment, deleteComment, loadComments } from '../actions/commentActions';

const CommentSection = () => {
  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();
  const [replyingTo, setReplyingTo] = useState(null);

  // Load comments from local storage when the component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      dispatch(loadComments(JSON.parse(storedComments)));
    }
  }, [dispatch]);

  // Save comments to local storage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  const handleAddComment = (comment) => {
    dispatch(addComment(comment));
  };

  const handleAddReply = (parentId, reply) => {
    dispatch(addReply(parentId, reply));
    setReplyingTo(null);
  };

  const handleEditComment = (id, newComment) => {
    dispatch(editComment(id, newComment));
  };

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id));
  };

  const startReplying = (id) => {
    setReplyingTo(id);
  };

  return (
    <div>
      <CommentInput onAddComment={handleAddComment} />
      <CommentList 
        comments={comments} 
        onDelete={handleDeleteComment} 
        onEdit={handleEditComment} 
        onReply={startReplying} 
      />
      {replyingTo && <ReplyInput onAddReply={handleAddReply} parentId={replyingTo} />}
    </div>
  );
};

export default CommentSection;
