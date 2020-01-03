import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const RECEIVE_SELECTED_TASK = 'RECEIVE_SELECTED_TASK';

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

const receiveSelectedTask = task => ({
  type: RECEIVE_SELECTED_TASK,
  task
})



export const fetchSelectedTask = task => dispatch => {
  return TaskApiUtil.fetchTask(task)
    .then(task => dispatch(receiveSelectedTask))
}

export const fetchTasks = () => dispatch => {
  return TaskApiUtil.fetchTasks()
  .then(tasks => dispatch(receiveAllTasks(tasks)))
}

export const fetchTask = (listId, id)=> dispatch => {
  return TaskApiUtil.fetchTask(listId, id)
  .then(task => dispatch(receiveTask(task)))
}

export const fetchListTasks = listId => dispatch => {
  return TaskApiUtil.fetchListTasks(listId)
    .then(tasks => dispatch(receiveAllTasks(tasks)))
}

export const createTask = (listId, task) => dispatch => {
  return TaskApiUtil.createTask(listId, task)
    .then(task => dispatch(receiveTask(task)))
}

export const updateTask = (listId, task) => dispatch => {
  return TaskApiUtil.updateTask(listId, task)
    .then(task => dispatch(receiveTask(task)))
}

export const deleteTask = (listId, id) => dispatch => {
  return TaskApiUtil.deleteTask(listId, id)
    .then((task) => dispatch(removeTask(id)))
}