import { ADD_COMMENT, ADD_REPLY, EDIT_COMMENT, DELETE_COMMENT, LOAD_COMMENTS } from './actionTypes';

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const addReply = (parentId, reply) => ({
  type: ADD_REPLY,
  payload: { parentId, reply },
});

export const editComment = (id, newComment) => ({
  type: EDIT_COMMENT,
  payload: { id, newComment },
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: id,
});

export const loadComments = (comments) => ({
  type: LOAD_COMMENTS,
  payload: comments,
});
