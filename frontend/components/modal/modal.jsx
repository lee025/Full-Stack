import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {

  render(){
    const { text, onClose } = this.props;

    return (
      // <noscript />
      <div className='modal-wrapper'>
        <div className='modal1'>
          <button className='close' onClick={() => onClose()}>&times;</button>
          <div className='text'>{text}</div>
        </div>
       </div>
    );
  }

}

export default Modal;











// import React from "react";
// import { closeModal } from '../../actions/modal_actions';
// import { connect } from 'react-redux';
// import CreateListContainer from '../lists/create_list_form_container';
// import EditListContainer from '../lists/edit_list_form_container';

// function Modal({ modal, closeModal }) {
//   if (!modal) {
//     return null;
//   }
//   let component;
//   switch (modal) {
//     case 'Add a list':
//       component = <CreateListContainer />;
//       break;
//     case 'Rename List':
//       component = <EditListContainer />;
//       break;
//     default:
//       return null;
//   }
//   return (
//     <div className="modal-background" onClick={closeModal}>
//       <div className="modal-child" onClick={e => e.stopPropagation()}>
//         {component}
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     modal: state.ui.modal
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     closeModal: () => dispatch(closeModal())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);
