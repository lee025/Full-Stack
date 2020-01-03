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
  //   this.props.fetchList(this.props.match.params.listId);
  //   this.props.fetchListTasks(this.props.match.params.listId);
  // }

  numCompleted(){
    const tasks = this.props.tasks
    const count = [];
    // debugger
    if(!tasks){ return null; }
    Object.values(tasks).filter(task => {
      if (task.completed == true){
        count.push(task)
      }
    })
    return count;
  }

  render(){
    console.log(this.props.tasks)
    const { list, tasks } = this.props;    

    if(!list){ return null; }
    // debugger
    return (
      <div className='list-summary-container'>
        <h2>{list.title}</h2>
        <div className='list-summary-box'>
          {tasks.length} tasks
        </div>
        <div className='list-summary-box'>
          {this.numCompleted().length} <br/>completed
        </div>
      </div>
    )
  }
}

export default ListSummary;