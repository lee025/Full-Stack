import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class TaskNav extends React.Component{
  constructor(props){
    super(props);

    this.toggleTaskComplete = this.toggleTaskComplete.bind(this);
    this.deleteCurrentTask = this.deleteCurrentTask.bind(this);

  }

  componentDidMount(){
    // debugger
    const listId = this.props.match.params.listId;
    // this.props.fetchList(this.props.match.params.listId);
    this.props.fetchTask(listId, this.props.match.params.taskId);
  }


  toggleTaskComplete(){
    // debugger
    const task = this.props.task;
    const listId = this.props.match.params.listId;
    const completed = this.props.task.completed;
    if(completed){
      return (
        this.setState({ task: {[completed]: true} }),
        this.props.updateTask(listId, task)
      )
    } else {
      return (
        this.setState({ task: {[completed]: true} }),
        this.props.updateTask(listId, task)
      )
    }
  }

  deleteCurrentTask(){
    // debugger
    const listId = this.props.match.params.listId;
    this.props.deleteTask(listId, this.props.match.params.taskId);
  }

  render(){
    console.log(this.props.task)

    return(
      <div className='task-nav-bar'>
        <i className="far fa-check-square" onClick={this.toggleTaskComplete}></i>
        <i className="far fa-trash-alt" onClick={this.deleteCurrentTask}></i>
      </div>
    )
  }
}

export default withRouter(TaskNav);