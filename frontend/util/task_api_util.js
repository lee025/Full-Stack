export const fetchTasks = () => { // verified working
  return $.ajax({
    method: 'GET',
    url: 'api/tasks'
  });
}

export const fetchTask = (listId, id) => { // verified working
  return $.ajax({
    method: 'GET',
    // url: `api/tasks/${id}`,
    url: `api/lists/${listId}/tasks/${id}`
  });
}

export const fetchListTasks = listId => { // verified working
  return $.ajax({
    method: 'GET',
    url: `api/lists/${listId}/tasks`
  });
}

export const createTask = (listId, task) => {
  return $.ajax({
    method: 'POST',
    url: `api/lists/${listId}/tasks`,
    data: { task }
  });
}

export const updateTask = (listId, task) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/lists/${listId}/tasks/${task.id}`,
    data: { task }
  });
}

export const deleteTask = (listId, id)=> {
  return $.ajax({
    method: "DELETE",
    url: `api/lists/${listId}/tasks/${id}`
  });
}
