import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists, deleteList } from '../../actions/list_actions';

const mapStateToProps = state => ({
  lists: Object.values(state.lists)
});

const mapDispatchToProps = dispatch => ({
  fetchLists: () => dispatch(fetchLists()),
  deleteList: listId => dispatch(deleteList(listId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);