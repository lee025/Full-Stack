import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../../util/list_api_util';

const ListIndexItem = props => (
  
  <li>
    <Link to={`/lists/${props.list.id}`}>{props.list.title}</Link>
    <Link to={`/lists/${props.list.id}/edit`}>Rename List</Link>
    <button onClick={() => props.deletePost(props.list.id)}>Remove List</button>
  </li>

)

export default ListIndexItem;