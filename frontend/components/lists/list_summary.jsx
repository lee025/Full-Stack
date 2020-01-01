import React from 'react';

class ListSummary extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...props,
    }
    this.numCompleted = this.numCompleted.bind(this);
  }
  
  // --- dont need bc ListShow has same route and logic already ---
  // componentDidMount(){
  //   this.props.fetchList(this.props.match.params.listid);
  //   this.props.fetchListTasks(this.props.match.params.listId);
  // }

  numCompleted(){
    const tasks = this.props.tasks
    if(!tasks){ return null; }
    Object.values(tasks).filter(tasks => {
      return tasks.completed == true
    })
  }

  render(){
    // console.log(this.props.tasks)

    const { list, tasks } = this.props;    

    if(!list){ return null; }

    return (
      <div className='list-summary-container'>
        <h2>{list.title}</h2>
        <div className='list-summary-box'>
          {tasks.length} tasks
        </div>
        <div className='list-summary-box'>
          {this.numCompleted.length} <br/>completed
        </div>
      </div>
    )
  }
}

export default ListSummary;