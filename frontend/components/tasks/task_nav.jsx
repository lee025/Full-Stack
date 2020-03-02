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

    if (this.props.match.taskId) {
      this.props.fetchTask(listId, this.props.match.params.taskId)
    } else {
      this.props.fetchList(listId)
    }
  }

  componentDidUpdate(prevProps){
    const listId = this.props.match.params.listid;
    if(!this.props.match.params.taskId){
    // if (prevProps.match.url !== this.props.match.url){
      this.props.fetchList(listId)
    }
  }

  toggleTaskComplete(){
    // debugger
    const task = this.props.task;
    const listId = this.props.match.params.listId;
    const completed = this.props.task.completed;
    

    if (completed) {
      this.props.updateTask(listId, { completed: false, id: task.id, notes: task.notes })
    } else {
      this.props.updateTask(listId, { completed: true, id: task.id, notes: task.notes })
    }
  }

  deleteCurrentTask(){
    // debugger
    const listId = this.props.match.params.listId;
    const task = this.props.task;

    this.props.deleteTask(listId, this.props.match.params.taskId)
    .then(() => this.props.history.push(`/lists/${listId}/tasks`))
    .then(() => window.location.reload())
  }

  render(){
    // console.log(this.props)
    if(!this.props.task){ return null }

    return (
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