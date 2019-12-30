// import { connect } from 'react-redux';
// import ListForm from './list_form';
// import { updateList } from '../../actions/list_actions';
// import ListIndexItem from './list_index_item';
// import ListIndex from '../lists/list_index';
// import { withRouter } from 'react-router-dom';


// const mapStateToProps = state => ({
//   list: { title: '' },
//   title: 'Rename List',
//   formType: 'update'
// })

// const mapDispatchToProps = dispatch => ({
//   action: list => dispatch(updateList(list)),
// });

// export default withRouter(connect(
//   mapStateToProps, 
//   mapDispatchToProps)(ListIndexItem));





























// // import { connect } from 'react-redux';
// // import React from 'react';
// // import { fetchList, updateList } from '../../actions/list_actions';
// // import { openModal, closeModal } from '../../actions/modal_actions';

// // class EditListForm extends React.Component {
  
// //   componentDidMount(){
// //     // console.log(this.props);
// //     this.props.fetchList(this.props.match.params.lists.id)
// //   }

// //   render() {
// //     const { action, formType, list } = this.props;

// //     if (!list) return null;
// //     return (
// //       <ListForm action={action} formType={formType} post={post}/>
// //     );
// //   }
// // };

// // const mapStateToProps = (state, ownProps) => {

// //   // console.log(state);

// //   return {
// //     list: state.entities.lists[ownProps.match.params.lists.id],
// //     formType: 'Rename List',
// //     button: 'Save'
// //   }
// // };

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     fetchList: listId => dispatch(fetchList(listId)),
// //     action: list => dispatch(updateList(list)),
// //     // otherForm: (
// //     //   <button onClick={(list) => dispatch(openModal('Rename List'))}>
// //     //     Rename List
// //     //   </button>
// //     // ),
// //     // closeModal: () => dispatch(closeModal())
// //   };
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(EditListForm);