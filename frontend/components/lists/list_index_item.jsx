import React from 'react';
import { Link } from 'react-router-dom';


class ListIndexItem extends React.Component {

  render() {
    const { list, updateList, deleteList } = this.props;
    return (
      <label className="nav-dropdown">
        <div className="dd-button">+</div>
        <span className='nav-list-title'>
          <Link to={`/lists/${list.id}`}>{list.title}</Link>
        </span>
        <input type="checkbox" className="dd-input" />
        <div className="dd-menu">
          <ul className="list-index-item">
            <li>
              <Link to={`/lists/${list.id}/edit`}>Rename List</Link>
            </li>
            {/* <li>
              <button className='dd-list-button' onClick={(list) => updateList(list)}>
                Rename List
              </button>
            </li> */}
            <li>
              <button onClick={() => deleteList(list.id)} >
                Remove List
              </button>
            </li>
          </ul>
        </div>
      </label>
    );
  }
}


export default ListIndexItem;





// const ListIndexItem = (props) => {

//   return (

//     <label className="nav-dropdown">
//       <div className="dd-button">+</div>
//       <span className='nav-list-title'>
//         <Link to={`/lists/${props.list.id}`}>{props.list.title}</Link>
//       </span>
//       <input type="checkbox" className="dd-input" />
//       <div className="dd-menu">
//         <ul className="list-index-item">
//           {/* <li>
//             <Link to={`/lists/${props.list.id}/edit`}>Rename List</Link>
//           </li> */}
//           <li>
//             <button onClick={(list) => props.updateList(props.list)}>
//               Rename List
//             </button>
//           </li>
//           <li>
//             <button onClick={() => props.deleteList(props.list.id)} >
//               Remove List
//             </button>
//           </li>
//         </ul>
//       </div>
//     </label>
//   );
//   }


// export default ListIndexItem;