import React from 'react';
import ListIndexItem from './list_index_item';
import CreateListContainer from './create_list_form_container';
import EditListContainer from './edit_list_form_container'

class ListIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchLists();
  }

  render(){
    const { lists, deleteList, updateList } = this.props;

    const listItems = lists.map(list => (
        <ListIndexItem list={list} key={list.id} deleteList={deleteList} updateList={updateList}/>));

    return (
      <div className="sidenav" id="mySidenav">
        <div className="nav-logo-calvin-div">
          <img className="nav-calvin-logo" src={window.calvin_logoURL} />
        </div>
        <h2>TEST SIDE NAV</h2>
        <div className="a">
          <CreateListContainer />
          {/* <EditListContainer /> */}
        </div>
        <div className="a">
          <ul className="list-index">
            {listItems}
          </ul>
        </div>
      </div>
    );
  }
};

export default ListIndex;