import React from 'react';
import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // debugger;
    this.props.fetchLists();
  }

  render(){
    const { lists, deleteList } = this.props;
    // console.log('gahhhhhhhhhhhh');
    // debugger;
    return(
      
      <div>
        <ul className='list-index'>
          {lists.map( list => {
            return <ListIndexItem list={list} key={list.id} deleteList={deleteList} />
          })}
        </ul>
      </div>
    );
  }
};

export default ListIndex;