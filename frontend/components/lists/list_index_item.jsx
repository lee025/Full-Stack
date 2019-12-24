import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

class ListIndexItem extends React.Component {
  // -------------------
  constructor(props){
    super(props)

    this.state = { modal: false }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e){
    e.preventDefault();
    this.setState({ modal: true });
  }

  closeModal(e){
    e.preventDefault();
    this.setState({ modal: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = Object.assign({}, this.state)
    this.props.action(list).then(this.props.closeModal);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  renderModal() {
    if(this.state.modal) {
      return(
        <div>
          <Modal 
            // text={"Modal Text"}
            onClose={() => this.setState({ modal: false })} 
          />
        </div>
      )
    }
    return null;
  }
// ---------------------



  render() {

    // console.log(this.props)

    const { list, updateList, deleteList } = this.props;

    return (
      <label className="nav-dropdown">

        <div className="dd-button">+</div>
        
        <span className='nav-list-title'>
          <Link to={`/lists/${list.id}`}>{list.title}</Link>
        </span>
         
        <input type='checkbox' className="dd-input" />
          <ul className="dd-menu">

            <li>
              <button className="dd-button" onClick={this.openModal}>Rename List</button>
            </li>
            <li>
              <button className="dd-button" onClick={this.openModal}>Remove List</button>
            </li>

          <div className='modal'>
            {this.renderModal()}
          </div>

              {/* <li>
                <button className='dd-button' onClick={() => deleteList(list.id)} >
                  Remove List
                </button>
              </li>  */}

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





