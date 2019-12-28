import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import { fetchList, updateList, deleteList } from '../../actions/list_actions';

class ListIndexItem extends React.Component {
  constructor(props){
    super(props)

    this.state = { 
      modal: false,
      ...props 
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteCurrentList = this.deleteCurrentList.bind(this);
    this.updateCurrentList = this.updateCurrentList.bind(this);
  }

  componentDidMount(){
    this.props.fetchList(this.state.list.id)
    // console.log(this.state);
  }

  openModal(e){
    e.preventDefault();
    // e.persist();
    this.setState({ modal: true });
  }

  closeModal(e){
    e.preventDefault();
    this.setState({ modal: false });
  }

  handleSubmit(e) {
    // e.preventDefault();
    e.stopPropagation();
    const list = Object.assign({}, this.state.list)
    // debugger
    // console.log('hello world!!!!!!!!!!!!!!!!!!!!!!!!!!')
    this.updateCurrentList();
    // console.log('Just world!!!!!!!!!!!!!!!!!!!!!!!!!!')
    this.closeModal(e);
    // const action = this.state.processForm(list, this.state.formType)
    // console.log(action)

      // .then(() => this.state.history.push("/lists"));

    // const modals = document.getElementsByClassName('modal');
    // modals.classList.add('hidden');
  }

 

  update(field) {
    return e => this.setState({ list: {[field]: e.currentTarget.value, id: this.state.list.id} });
  }

  updateCurrentList() {
      console.log('WORD....')
      this.props.updateList( this.state.list )
  }

  deleteCurrentList() {
    this.props.deleteList(this.state.list.id)
  }

  renderModal() {

    if(this.state.modal) {

      return (
        <div>
          <div className='modal'>

            <form className='form-container'>
              <button className='close' onClick={this.closeModal}>&times;</button>
              <label>List name
                <input
                  type="text"
                  value={this.state.list.title}
                  onChange={this.update('title')}
                  className='rename-input'
                />
              </label>
              <button className='dd-button' onClick={this.closeModal} >
                Cancel
          </button>
              <button className='dd-button' onClick={this.handleSubmit}>
                Save
          </button>
            </form>

            <br />

            <form className='form-container' value={this.props.formType}>
              <button className='close' onClick={this.closeModal}>&times;</button>
              <label>Remove List
            <p>Are you sure you want to remove?</p>
              </label>
              <button className='dd-button' onClick={this.closeModal} >
                Cancel
          </button>
              <button className='dd-button' onClick={this.deleteCurrentList} >
                Yes, remove list
          </button>
            </form>

          </div>
          {/* <Modal 
            list={this.state.list}
            onClose={() => this.setState({ modal: false })}
            fetchList={(list) => this.setState(fetchList(list))}
            deleteList={() => this.setState(deleteList())} 
            updateList={(list) => this.setState(updateList(list))}
            handleSubmit={this.handleSubmit}
            processForm={(list, formType) => this.setState(formType(list))}
          /> */}
        </div>
      )
    }
    return null;
  }
// ---------------------



  render() {

    // console.log(this.state.list)

    const { list } = this.props;

    return (
      <label className="nav-dropdown">

        <div className="dd-button">+</div>
        
        <span className='nav-list-title'>
          <Link to={`/lists/${list.id}`}>{list.title}</Link>
        </span>
          <div className=''>
            <div className=''>
              {this.renderModal()}
              <Link to={`lists/${list.id}`} />
            </div>
          </div>
         
        <input type='checkbox' className="dd-input" />
          <ul className="dd-menu">

            <li>
              <button className="dd-button" onClick={this.openModal}>Rename List</button>
            </li>
            <li>
              <button className="dd-button" onClick={this.openModal}>Remove List</button>
            </li>

          </ul>

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





