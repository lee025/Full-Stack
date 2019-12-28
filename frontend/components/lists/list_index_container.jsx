import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists, fetchList, deleteList, updateList } from '../../actions/list_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    lists: Object.values(state.entities.lists).filter(list => {
      return list.user_id == state.session.id
    }),
    // currentUser: state.session.id
  }
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
  fetchLists: () => dispatch(fetchLists()),
  fetchList: id => dispatch(fetchList(id)),
  // processForm: (list, formType) => {
  //   // console./og(formType)
  //   if ( formType === 'update') {
  //     const up = dispatch(updateList(list))
  //     // console.log(up)
  //     return up 
  //   } else if ( formType === 'remove') {
  //     const remove = dispatch(deleteList(list ))
  //     // console.log(remove)
  //     return remove
  //   }
  // },
  updateList: list => dispatch(updateList(list)),
  deleteList: id => dispatch(deleteList(id))
}};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps)(ListIndex));