import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import { fetchList, updateList, deleteList } from '../../actions/list_actions';

class ListIndexItem extends React.Component {
  constructor(props){
    super(props)

    this.state = { 
      modal: false,
      updateForm: false,
      removeForm: false,
      ...props 
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteCurrentList = this.deleteCurrentList.bind(this);
    this.updateCurrentList = this.updateCurrentList.bind(this);
    // this.showModal = this.showModal.bind(this);
    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.openRemoveModal = this.openRemoveModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchList(this.state.list.id)
  }

  openModal(e){
    e.preventDefault();
    // e.persist();
    this.setState({ modal: true });
  }

  openUpdateModal(e) {
    e.preventDefault();
    this.setState({ modal: true, updateForm: true });
  }

  openRemoveModal(e) {
    e.preventDefault();
    this.setState({ modal: true, removeForm: true });
  }

  closeModal(e){
    e.preventDefault();
    this.setState({ modal: false, removeForm: false });
  }

  handleSubmit(e) {
    e.stopPropagation();
    const list = Object.assign({}, this.state.list)
    this.updateCurrentList();
    this.closeModal(e);
    // const action = this.state.processForm(list, this.state.formType)
    // console.log(action)
      // .then(() => this.state.history.push("/lists"));
  }

// showModal(e){
  // var update = document.getElementsByClassName('update-form-container');
  // var remove = document.getElementsByClassName('remove-form-container);
  // const ddMenuItems = [ 'dd-menu', '.update-form-container, '.remove-form-container' ]
  // const ddMenu = document.querySelectorAll(ddMenuItems.join(','));
  // const ddMenu = document.querySelectorAll('.update-form-container, '.remove-form-container)
  // const ddMenu = document.getElementsByClassName('remove-form-container')
  // console.log(ddMenu)
//   if (ddMenu[0].classList.contains('hidden')) {
//     ddMenu[0].classList.remove('hidden')
//   } else {
//     ddMenu[0].classList.add('hidden')
//   }
// }

  update(field) {
    return e => this.setState({ list: {[field]: e.currentTarget.value, id: this.state.list.id} });
  }

  updateCurrentList() {
      this.props.updateList( this.state.list )
  }

  deleteCurrentList() {
    this.props.deleteList(this.state.list.id)
  }

  renderModal() {

    if(this.state.modal && this.state.updateForm) {
      return (
          <div className='modal'>
            <form className='update-form-container'>
              <button className='close' onClick={this.closeModal}>&times;</button>
              Rename List
              <label>List name</label>
                <input
                  type="text"
                  value={this.state.list.title}
                  onChange={this.update('title')}
                  className='rename-input'
                />
              
              <button className='dd-button-confirm' onClick={this.handleSubmit}>
                Save
              </button>
              <button className='dd-button-cancel' onClick={this.closeModal} >
                Cancel
              </button>
            </form>
          </div>
      )
    } else if (this.state.modal && this.state.removeForm) {
        return (
          <div className='modal'>
            <form className='remove-form-container' value={this.props.formType}>
              <button className='close' onClick={this.closeModal}>&times;</button>
              <label>Remove List
                <p>Are you sure you want to remove?</p>
              </label>
              <button className='dd-button-confirm' onClick={this.deleteCurrentList} >
                Yes, remove list
              </button>
              <button className='dd-button-cancel' onClick={this.closeModal} >
                Cancel
              </button>
            </form>
          </div>
        )
    } else {
      return null
    }
  }
// ---------------------

  render() {

    console.log(this.state)

    const { list } = this.props;

    return (
      <label className="nav-dropdown">
        <div className="dd-button">+</div>
        
        <span className='nav-list-title'>
          <Link to={`/lists/${list.id}`}>{list.title}</Link>
        </span>
         
        <input type='checkbox' className="dd-input" />
          <ul className="dd-menu">
            <li>
            <button className="dd-update-button" onClick={this.openUpdateModal}>
                Rename List
              </button>
            </li>
            <li>
              <button className="dd-remove-button" onClick={this.openRemoveModal}>
                Remove List
              </button>
            </li>
          </ul>

          <div className=''>
              {this.renderModal()}
              <Link to={`lists/${list.id}`} />
          </div>

      </label>
    );
  }
}


export default ListIndexItem;





// import React from 'react';
// import { Link } from 'react-router-dom';


// class ListIndexItem extends React.Component {


//   render() {
//     const { list, updateList, deleteList } = this.props;
//     return (
//       <label className="nav-dropdown">
//         <div className="dd-button">+</div>
//         <span className='nav-list-title'>
//           <Link to={`/lists/${list.id}`}>{list.title}</Link>
//         </span>
//         <input type="checkbox" className="dd-input" />
//         <div className="dd-menu">
//           <ul className="list-index-item">
//             <li>
//               <Link to={`/lists/${list.id}/edit`}>Rename List</Link>
//             </li>
//             {/* <li>
//               <button className='dd-list-button' onClick={(list) => updateList(list)}>
//                 Rename List
//               </button>
//             </li> */}
//             <li>
//               <button onClick={() => deleteList(list.id)} >
//                 Remove List
//               </button>
//             </li>
//           </ul>
//         </div>
//       </label>
//     );
//   }
// }


// export default ListIndexItem;





{/* <Modal 
            list={this.state.list}
            onClose={() => this.setState({ modal: false })}
            fetchList={(list) => this.setState(fetchList(list))}
            deleteList={() => this.setState(deleteList())} 
            updateList={(list) => this.setState(updateList(list))}
            handleSubmit={this.handleSubmit}
            processForm={(list, formType) => this.setState(formType(list))}
          /> */}