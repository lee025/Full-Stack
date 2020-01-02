import React from 'react';
import { withRouter } from 'react-router-dom';

class TaskNav extends React.Component{
  constructor(props){
    super(props);

    this.toggleTaskComplete = this.toggleTaskComplete.bind(this);
    this.deleteCurrentTask = this.deleteCurrentTask.bind(this);
  }

  componentDidMount(){
    this.props.fetchList(this.props.match.params.listId);
    this.props.fetchTask(this.props.match.params.taskId);
  }

  toggleTaskComplete(){
    const task = this.props.match.params.taskId;
    if(task.completed){
      this.setState(task.completed == true)
    } else {
      this.setState(task.completed == false)
    }
  }

  deleteCurrentTask(){
    const listId = this.props.match.params.listId
    this.props.deleteTask(listId, this.props.task)
  }

  render(){
    
    return(
      <div className='task-nav-bar'>
        <i className="far fa-check-square" onClick={this.toggleTaskComplete}></i>
        {/* <button onClick={this.toggleTaskComplete}>complete</button> */}
        <i className="far fa-trash-alt" onClick={this.deleteCurrentTask}></i>
        {/* <button onClick={this.deleteCurrentTask}>delete task</button> */}
      </div>
    )
  }
}

export default withRouter(TaskNav);