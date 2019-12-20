import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists, deleteList } from '../../actions/list_actions';


const mapStateToProps = state => {
  return {
  lists: Object.values(state.entities.lists)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchLists: () => dispatch(fetchLists()),
  deleteList: listId => dispatch(deleteList(listId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);