import React from 'react';
import ListIndexItem from './list_index_item';
import CreateListContainer from './create_list_form_container';
import { Link, Route } from 'react-router-dom';
import TaskIndex from '../tasks/task_index';


class ListIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchLists();
  }

  render(){

    const { lists, deleteList, updateList, processForm, fetchList } = this.props;
    // console.log(this.state)
    const listItems = lists.map(list => (
      <ListIndexItem 
        list={list} 
        key={list.id} 
        deleteList={deleteList} 
        updateList={updateList} 
        fetchList={fetchList}
        processForm={processForm} 
      />));
  
    return (
      <div>
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
            <span className='main-dropdown-header'>
              <Link to='/lists'>LISTS</Link>
            </span>
            <input type="checkbox" className="main-dd-input" />
              
              <div className="main-dd-menu">            
                  {listItems}   
                  {/* <Route path='/lists/:list_id/tasks' component={TaskIndex} /> */}
              </div>       

          </label>
        </div>

        

      </div>
    );
  }
};

export default ListIndex;
