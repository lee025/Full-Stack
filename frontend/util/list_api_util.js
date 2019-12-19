
export const fetchLists = () => (
  $.ajax({
    method: "GET",
    url: 'api/lists',
  })
)

export const fetchList = listId => (
  $.ajax({
    method: "GET",
    url: `api/lists/${listId}`
  })
)

export const createList = list => (
  $.ajax({
    method: "POST",
    url: 'api/lists',
    data: { lists }
  })
)

export const updateList = list => (
  $.ajax({
    method: "PATCH",
    url: `api/lists/${list.id}`,
    data: { list }
  })
)

export const deleteList = listId => (
  $.ajax({
    method: "DELETE",
    url: `api/lists/${listId}`
  })
)