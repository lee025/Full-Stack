import React from 'react';
import { Link } from 'react-router-dom';
import { deleteList } from '../../util/list_api_util';

const ListIndexItem = (props) => {
  console.log(props)
  return (
    <li className='list-index-item'>
      <Link to={`/lists/${props.list.id}`}>{props.list.title}</Link>
      <Link to={`/lists/${props.list.id}/edit`}>Rename List</Link>
      <button onClick={() => props.deleteList(props.listId)}>Remove List</button>
    </li>
    )
  }


export default ListIndexItem;