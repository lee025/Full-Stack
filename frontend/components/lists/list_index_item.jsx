import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';


class ListIndexItem extends React.Component {


  // -------------------
  constructor(props){
    super(props)

    this.state = { modal: false }
  }

  openModal(e){
    e.preventDefault();
    return this.setState({ modal: true });
  }

  closeModal(e){
    e.preventDefault();
    return this.setState({ modal: false });
  }

  // renderModal() {
  //   if(this.state.modal) {
  //     return(
  //       <div>
  //         <Modal text={"Modal Text"} 
  //           onClose={() => this.setState({ modal: false })} />
  //       </div>
  //     )
  //   }
  //   return null;
  // }
// ---------------------



  render() {
    const { list, updateList, deleteList } = this.props;
    
    return (
      <label className="nav-dropdown">

        <div className="dd-button" onClick={this.state.openModal}>+</div>
        
        <span className='nav-list-title'>
          <Link to={`/lists/${list.id}`}>{list.title}</Link>
        </span>

          {/* <div className='text'>{text}</div> */}
          {/* {this.renderModal()} */}
        <input type='checkbox' className="dd-input" />
          <ul className="dd-menu">
          <li><button className="dd-button" onClick={this.state.openModal}>Rename List</button>

        <div className='modal'>
          <button className='close' onClick={this.state.closeModal}>&times;</button>
        </div>
          </li>

              <li>
                <button onClick={() => deleteList(list.id)} >
                  Remove List
                </button>
              </li>

          </ul>
        {/* </div> */}
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





