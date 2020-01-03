import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class TaskNav extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      task: {completed: false, id: null }
    }

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
    // console.log(this.props.task)
    const listId = this.props.match.params.listId;
    const completed = this.props.task.completed;
    if(completed){
        // this.setState({ task: { completed: false, id: task.id } })
      this.props.updateTask(listId, { completed: false, id: task.id })
    } else {
        // console.log(task.id)
        // this.setState({ task: { completed: true, id: task.id } })
        // console.log(this.state)
      this.props.updateTask(listId, { completed: true, id: task.id })
    }
  }

  deleteCurrentTask(){
    // debugger
    const listId = this.props.match.params.listId;
    this.props.deleteTask(listId, this.props.match.params.taskId);
  }

  render(){
    // console.log(this.props.task)
    if(!this.props.task){ return null }
    return(
      <div className='task-nav-bar'>
        <i 
          className={this.props.task.completed ? "far fa-check-square" : "far fa-square"} 
          onClick={this.toggleTaskComplete}>
        </i>
        <i className="far fa-trash-alt" onClick={this.deleteCurrentTask}></i>
      </div>
    )
  }
}

export default withRouter(TaskNav);