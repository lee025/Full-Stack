export const fetchTasks = () => { // verified working
  return $.ajax({
    method: 'GET',
    url: 'api/tasks'
  });
}

export const fetchTask = (id) => { // verified working
  return $.ajax({
    method: 'GET',
    url: `api/tasks/${id}`
  });
}

export const fetchListTasks = listId => { // verified working
  return $.ajax({
    method: 'GET',
    url: `api/lists/${listId}/tasks`
  });
}

export const createTask = (task) => {
  return $.ajax({
    method: 'POST',
    url: `api/lists/${task.list_id}/tasks`,
    data: { task }
  });
}

export const updateTask = task => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tasks/${task.id}`,
    data: { task }
  });
}

export const deleteTask = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/tasks/${id}`
  });
}
