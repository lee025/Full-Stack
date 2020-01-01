import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_ALL_LISTS = "RECEIVE_ALL_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

// action creators
export const receiveAllLists = lists => ({
  type: RECEIVE_ALL_LISTS,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const removeList = listId => ({
  type: REMOVE_LIST,
  listId
});

// 1`fetchLists`;
export const fetchLists = () => dispatch => (
  ListApiUtil.fetchLists()
    .then( lists => dispatch(receiveAllLists(lists)))
);
// 2`fetchList(listId)`;
export const fetchList = id => dispatch => (
  ListApiUtil.fetchList(id)
    .then( list => dispatch(receiveList(list)))
);
// 3`createList(list)`;
export const createList = list => dispatch => (
  ListApiUtil.createList(list)
    .then( list => dispatch(receiveList(list)))
);
// 4`updateList(list)`;
export const updateList = list => dispatch => {
  // console.log('+++++++++++++++++++++++')
  // console.log(list)
  return (
  ListApiUtil.updateList(list)
    .then( list => dispatch(receiveList(list)))
  )
};
// 5`deleteList(listId)`;
export const deleteList = listId => dispatch => (
  ListApiUtil.deleteList(listId)
    .then(() => dispatch(removeList(listId)))
);