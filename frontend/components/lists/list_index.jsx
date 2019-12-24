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

    console.log(this.props)

    const { lists, deleteList, updateList } = this.props;
    const listItems = lists.map(list => (
        <ListIndexItem list={list} key={list.id} deleteList={deleteList} updateList={updateList}/>));
  
    return (

      <div className="sidenav" id="mySidenav">
        <div className="nav-logo-calvin-div">
          <img className="nav-calvin-logo" src={window.calvin_logoURL} />
        </div>

        <div className="a">
          <CreateListContainer />
        </div>

        {/* List dropdown */}
        <label className="main-dropdown">
          <div className="main-dd-button">+</div>
          <span className='main-dropdown-header'>LISTS</span>
          <input type="checkbox" className="main-dd-input" />
            
            <div className="main-dd-menu">            
                {listItems}   
            </div>       

        </label>

      </div>
    );
  }
};

export default ListIndex;








  //   return (
  //     <div className="sidenav" id="mySidenav">
  //       <div className="nav-logo-calvin-div">
  //         <img className="nav-calvin-logo" src={window.calvin_logoURL} />
  //       </div>
  //       <div className="a">
  //         <CreateListContainer />
  //         {/* <EditListContainer /> */}
  //       </div>
  //       <h3 className>LISTS</h3>
  //       <div className="a">
  //         <ul className="list-index">{listItems}</ul>
  //       </div>
  //     </div>
  //   );
  // }