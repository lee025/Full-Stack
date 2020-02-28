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
      console.log("Reducer:", action.task)
      return Object.assign({}, state, {[action.task.id]: action.task})
    case REMOVE_TASK:
      let nextState = Object.assign({}, state)
      delete nextState[action.taskId]
      return nextState
    default:
      return state;
  }
};

export default TasksReducer