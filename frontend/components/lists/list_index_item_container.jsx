// import { connect } from 'react-redux';
// import Modal from '../modal/modal'
// import { fetchList, deleteList, updateList } from '../../actions/list_actions';
// // import { openModal, closeModal } from '../../actions/modal_actions';


// const mapStateToProps = (state, ownProps) => {
//   console.log(state)
//   return {
//     list: state.entities.lists[ownProps.match.params.lists.id],
//   }
// };

// const mapDispatchToProps = dispatch => {
//   // console.log(state)
//   return {
//     updateList: list => dispatch(updateList(list)),
//     deleteList: list => dispatch(deleteList(list)),
//     fetchList: list => dispatch(fetchList(list)),

//     // openModal: modal => dispatch(openModal(modal)),
//     // closeModal: () => dispatch(closeModal())
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);