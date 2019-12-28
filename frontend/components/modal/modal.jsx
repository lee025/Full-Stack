// import React from 'react';
// import ReactDOM from 'react-dom';

// import  lists  from '../lists/list_index';
// import ListIndexItem from '../lists/list_index_item';

// import { connect } from 'react-redux';


// class Modal extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       ...props,
//     }

//     this.closeModal = this.closeModal.bind(this);
//   }

//   componentDidMount() {

//   }

//   // componentWillReceiveProps(nextProps) {
//   //   if (nextProps.list !== this.props.list) {
//   //     this.setState({list: list})
//   //   }
//   // }

//   closeModal(e) {
//     e.preventDefault();
//     this.setState({ modal: false });
//   }
 
//   update(field) {
//     // debugger
//     return e => this.setState({ list: {[field]: e.currentTarget.value, id: this.state.list.id} });
//   }


//   render(){
      
//       const { onClose, updateList, deleteList, handleSubmit } = this.props;
      
//     // console.log(this.state.list)
//       // debugger;
    
//     return (

//       // <noscript />
//       // <div className='modal-wrapper'>
//   <div className='modal'>

//         <form onSubmit={handleSubmit} className='form-container'>
//         <button className='close' onClick={() => onClose()}>&times;</button>
//           <label>List name
//                 <input 
//                   type="text"
//                   // defaultValue={this.props.default || list.title }
//                   value={this.state.list.title}
//                   onChange={ this.update('title') }
//                   className='rename-input'
//             />
//           </label>
//           <button className='dd-button' onClick={() => onClose()} >
//             Cancel
//           </button>
//           <button className='dd-button' onClick={handleSubmit}>
//             Save
//           </button>
//         </form>

//         <br />

//         <form onSubmit={this.handleSubmit} className='form-container' value={this.props.formType}>
//         <button className='close' onClick={() => onClose()}>&times;</button>
//           <label>Remove List
//             <p>Are you sure you want to remove?</p>
//           </label>
//           <button className='dd-button' onClick={() => onClose()} >
//             Cancel
//           </button>
//           <button className='dd-button' onClick={() => deleteList(this.state.list)} >
//             Yes, remove list
//           </button>
//         </form>

//   </div>


//     );
//   }
// }

// // const mapStateToProps = (state, ownProps) => {
// //   console.log(ownProps)
// //   return {
// //     list: state.entities.lists[ownProps.match.params.id],
// //   }
// // }

// // const mapDispatchToProps = dispatch => ({
// //   fetchLists: () => dispatch(fetchLists()),
// //   updateList: list => dispatch(updateList(list)),
// //   deleteList: listId => dispatch(deleteList(listId)),
// //   openModal: modal => dispatch(openModal(modal)),
// //   closeModal: () => dispatch(closeModal())
// // })

// // export default connect(mapStateToProps, mapDispatchToProps)(Modal);

// export default Modal;









// // import React from "react";
// // import { closeModal } from '../../actions/modal_actions';
// // import { connect } from 'react-redux';
// // import CreateListContainer from '../lists/create_list_form_container';
// // import EditListContainer from '../lists/edit_list_form_container';

// // function Modal({ modal, closeModal }) {
  
// //   if (!modal) {
// //     return null;
// //   }
// //   let component;
// //   switch (modal) {
// //     case 'Add a list':
// //       component = <CreateListContainer />;
// //       break;
// //     case 'Rename List':
// //       component = <EditListContainer />;
// //       break;
// //     default:
// //       return null;
// //   }
// //   return (
// //     <div className="modal-background" onClick={closeModal}>
// //       <div className="modal-child" onClick={e => e.stopPropagation()}>
// //         {component}
// //       </div>
// //     </div>
// //   );
// // }

// // const mapStateToProps = state => {

// //   return {
// //     modal: state.ui.modal
// //   };
// // };

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     closeModal: () => dispatch(closeModal())
// //   };
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(Modal);
