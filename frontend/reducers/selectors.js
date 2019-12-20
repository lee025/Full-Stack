
export const selectAllLists = state => Object.values(state.entities.lists);

export const selectList = ({lists}, id) => {
  const nullList = {
    id: null, body: ''
  };
  return lists[id] || nullList;
};