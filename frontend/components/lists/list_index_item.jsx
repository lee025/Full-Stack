import React from 'react';
import { Link } from 'react-router-dom';
import { deleteList } from '../../util/list_api_util';

const ListIndexItem = (props) => {
  console.log(props)
  return (
    <label className="nav-dropdown">
      <div className="dd-button"> + </div>
      <span className='nav-list-title'>
        <Link to={`/lists/${props.list.id}`}>{props.list.title}</Link>
      </span>
      <input type="checkbox" className="dd-input" id="test" />
      <div className="dd-menu">
        <ul className="list-index-item">
          <li>
            <Link to={`/lists/${props.list.id}/edit`}>Rename List</Link>
          </li>
          <li>
            <button onClick={() => props.deleteList(props.listId)}>
              Remove List
            </button>
          </li>
        </ul>
      </div>
    </label>
  );
  }


export default ListIndexItem;