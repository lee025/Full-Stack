import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      search: ''
    }

    this.updateSearch = this.updateSearch.bind(this)
  }

  componentDidMount() {
    // const listId = this.props.match.params.listId;
    // this.props.fetchList(this.props.match.params.listId);
    this.props.fetchTasks();
    // this.props.fetchTask(listId, this.props.match.params.taskId);
  }

  updateSearch(e){
    this.setState({ search: e.target.value.substr(0, 20) })
  }

  render(){
    // console.log("Search render", this.props)
    let filteredSearch;
    if(this.state.search == ''){
       filteredSearch = []
    } else {
       filteredSearch = this.props.tasks.filter(
        (search) => {
          return search.task_name.toLowerCase().indexOf(
            this.state.search.toLowerCase()) !== -1
        }
      )}

    // console.log("filteredSearch", filteredSearch)

    return (
      <div>
        <div className="search-cont">
          <input 
          type="text" 
          placeholder="Search Tasks" 
          value={this.state.search}
          onChange={this.updateSearch}
          />
          <i className="fas fa-search"></i>
        </div>
        
          <div className="search-results-cont">
            <ul>
              {filteredSearch.map((task) => {
                return (
                <li key={task.id}>
                  <Link to={`/lists/${task.list_id}/tasks/${task.id}`}>
                    {task.task_name}
                  </Link>
                </li>
                )
              })}
            </ul>
          </div>
      </div>
    )
  }
}

export default Search;