import React from 'react';
import ListIndexItem from './list_index_container';
import CreateListFormContainer from './create_list_form_container';

class ListIndex extends React.Component {


  componentDidMount(){
    this.props.fetchLists();
  }

  render(){
    const { lists, deleteList } = this.props;
    return(
      <div>
        <ul>
          {lists.map( list => (
            <ListIndexItem list={list} key={list.id} deleteList={deleteList} />
          ))}
        </ul>
        <CreateListFormContainer />
      </div>
    );
  }
};

export default ListIndex;