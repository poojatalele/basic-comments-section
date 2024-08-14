import { ADD_COMMENT, ADD_REPLY, EDIT_COMMENT, DELETE_COMMENT, LOAD_COMMENTS } from '../actions/actionTypes';

const initialState = {
  comments: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case ADD_REPLY:
      return {
        ...state,
        comments: state.comments.map(comment => 
          comment.id === action.payload.parentId 
            ? { ...comment, replies: [...comment.replies, action.payload.reply] }
            : comment
        ),
      };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment => 
          comment.id === action.payload.id 
            ? { ...comment, comment: action.payload.newComment } 
            : comment
        ),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload),
      };
    default:
      return state;
  }
};

export default commentReducer;
