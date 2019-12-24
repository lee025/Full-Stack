import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists, deleteList, updateList } from '../../actions/list_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';
// import Modal from '../modal/modal';

const mapStateToProps = state => {
  return {
  lists: Object.values(state.entities.lists),
  }
};

const mapDispatchToProps = dispatch => ({
  fetchLists: () => dispatch(fetchLists()),
  updateList: list => dispatch(updateList(list)),
  deleteList: listId => dispatch(deleteList(listId)),
  // openModal: modal => dispatch(openModal(modal)),
  // closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);