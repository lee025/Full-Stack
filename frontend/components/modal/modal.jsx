import React from 'react';
import ReactDOM from 'react-dom';

import  lists  from '../lists/list_index';
import ListIndexItem from '../lists/list_index_item';

import { connect } from 'react-redux';
import { fetchLists, deleteList, updateList } from '../../actions/list_actions';


class Modal extends React.Component {
  constructor(props) {
    super(props)

    // this.state = { 
    //   modal: false,
    // }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ modal: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = Object.assign({}, this.state)
    // this.state.update(list).then(this.state.closeModal);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    console.log(this.state)
    // debugger;

    // const listId = lists.map(list => (
    //   <ListIndexItem list={list} key={list.id} tite={title} deleteList={deleteList} updateList={updateList} />));

    const { text, onClose, list } = this.props;
      
    return (

      // <noscript />
      // <div className='modal-wrapper'>
  <div className='modal'>
    <div className='text'>{text}</div>

        <form onSubmit={this.handleSubmit} className='form-container'>
        <button className='close' onClick={() => onClose()}>&times;</button>
          <label>List name
                <input type="text"
              // value={list.title}
              // onChange={this.update('title')}
              className='rename-input'
            />
          </label>
          {/* <input className='rename-submit-button' type="submit" value={this.props.button} /> */}
          <button className='dd-button' onClick={() => onClose()} >
            Cancel
          </button>
          <button className='dd-button' onClick={(list) => updateList(list)}>
            Save
          </button>
        </form>

        <br />

        <form onSubmit={this.handleSubmit} className='form-container' value={this.props.formType}>
        <button className='close' onClick={() => onClose()}>&times;</button>
          <label>Remove List
            <p>Are you sure you want to remove?</p>
          </label>
          <button className='dd-button' onClick={() => onClose()} >
            Cancel
          </button>
          <button className='dd-button' onClick={() => deleteList(list)} >
            Yes, remove list
          </button>
        </form>

  </div>
      //  </div>



    );
  }
}

// const mapStateToProps = state => ({
//   lists: Object.values(state.entities.lists),
// })

// const mapDispatchToProps = dispatch => ({
//   fetchLists: () => dispatch(fetchLists()),
//   updateList: list => dispatch(updateList(list)),
//   deleteList: listId => dispatch(deleteList(listId)),
//   openModal: modal => dispatch(openModal(modal)),
//   closeModal: () => dispatch(closeModal())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);

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
