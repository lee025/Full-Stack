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
    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.openRemoveModal = this.openRemoveModal.bind(this);
    this.stopBubble = this.stopBubble.bind(this);
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
    this.setState({ modal: false, removeForm: false, updateForm: false });
  }

  handleSubmit(e) {
    e.stopPropagation();
    const list = Object.assign({}, this.state.list)
    this.updateCurrentList();
    this.closeModal(e);
  }

  stopBubble(e){
    e.stopPropagation();
  }

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
        <div className='modal-wrapper' onClick={this.closeModal}>
          <div className='modal' onClick={this.stopBubble}>
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
        </div>
      )
    } else if (this.state.modal && this.state.removeForm) {
        return (
          <div className='modal-wrapper' onClick={this.closeModal}>
          <div className='modal' onClick={this.stopBubble}>
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
         </div>
        )
    } else {
      return null
    }
  }
// ---------------------

  render() {

    // console.log(this.state)

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
          </div>

      </label>
    );
  }
}


export default ListIndexItem;

















{/* <Modal 
            list={this.state.list}
            onClose={() => this.setState({ modal: false })}
            fetchList={(list) => this.setState(fetchList(list))}
            deleteList={() => this.setState(deleteList())} 
            updateList={(list) => this.setState(updateList(list))}
            handleSubmit={this.handleSubmit}
            processForm={(list, formType) => this.setState(formType(list))}
          /> */}