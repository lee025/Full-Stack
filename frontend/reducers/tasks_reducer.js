import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK
} from '../actions/task_actions';

const TasksReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TASKS:
      return Object.assign({}, state, action.tasks)
    case RECEIVE_TASK:
      return Object.assign({}, state, {[action.tasks.id]: action.task})
    case REMOVE_TASK:
      let nextState = Object.assign({}, state)
      delete nextState[action.taskId]
    default:
      return state;
  }
};

export default TasksReducer