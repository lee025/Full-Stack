import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';


const receiveAllTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks
});

const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

const removeTask = id => ({
  type: REMOVE_TASK,
  id 
});


export const fetchTasks = () => dispatch => {
  return TaskApiUtil.fetchTasks()
  .then(tasks => dispatch(receiveAllTasks(tasks)))
}

export const fetchTask = id => dispatch => {
  return TaskApitUtil.fetchTask(id)
  .then(task => dispatch(receiveTask(task)))
}

export const fetchListTasks = listId => dispatch => {
  return TaskApiUtil.fetchListTasks(listId)
    .then(tasks => dispatch(receiveAllTasks(tasks)))
}

export const createTask = task => dispatch => {
  return TaskApiUtil.createTask(task)
    .then(task => dispatch(receiveTask(task)))
}

export const updateTask = task => dispatch => {
  return TaskApiUtil.updateTask(task)
    .then(task => dispatch(receiveTask(task)))
}

export const deleteTask = id => dispatch => {
  return TaskApiUtil.deleteTask(id)
    .then((task) => dispatch(removeTask(task.id)))
}