import { combineReducers } from 'redux';
import users from './users_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer
})

export default entitiesReducer;