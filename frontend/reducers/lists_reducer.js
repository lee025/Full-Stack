import { 
  RECEIVE_ALL_LISTS, 
  RECEIVE_LIST, 
  REMOVE_LIST 
} from '../actions/list_actions';

const ListsReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_LISTS:
      return Object.assign({}, state, action.lists)
    case RECEIVE_LIST:
      return Object.assign({}, state, {[action.list.id]: action.list})
    case REMOVE_LIST:
      let nextState = Object.assign({}, state)
      delete nextState[action.listId]
      return nextState;
    default:
      return state;
  }
};

export default ListsReducer;