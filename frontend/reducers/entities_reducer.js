import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listsReducer from './lists_reducer';
import taskReucer from '../reducers/tasks_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  lists: listsReducer,
  tasks: taskReucer
})

export default entitiesReducer;