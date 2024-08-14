import { createStore } from 'redux';
import commentReducer from './reducers/commentReducer';

const store = createStore(
  commentReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
