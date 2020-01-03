import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';


class TaskDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      list_id: this.props.match.params.listId,
      due: new Date(),
      task_name: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateTaskName = this.updateTaskName.bind(this);
  }

  componentDidMount(){
    // this.props.fetchList(this.props.match.params.listId);
    const listId = this.props.match.params.listId;
    this.props.fetchTask(listId, this.props.match.params.taskId);
  }

  componentDidUpdate(prevProps){
    const listId = this.props.match.params.listId;
    if (prevProps.match.params.taskId !== this.props.match.params.taskId){
      this.props.fetchTask(listId, this.props.match.params.taskId);
    }
  }

  updateTaskName(){

  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, this.props.task)
    const listId = this.props.match.params.listId

    this.props.updateTask(listId, { ...this.state, id: task.id } );
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  noteItem(note){
    return(
      <li>
        {note}
      </li>
    )
  }

  render(){

    // console.log(this.props.location.pathname)
    console.log(this.props)
    const { task, list } = this.props;
    // const noteItems = task.notes.map(note => this.noteItem(note))
    
    if(!task){ return null; }
    if(!list){ return null; }
    
    return (
      <div className='task-detail-container'>
        <div className=''>
          <h2 className='task-detail-header'>{task.task_name}</h2>
          
            <input
              className='task-detail-header-edit'
              value={this.state.task_name}
              placeholder='Edit Task Name'
              onChange={this.update('task_name')}
          /><i className="fas fa-pencil-alt" onClick={this.handleSubmit}></i>
          
        </div>
        <ul>
          <li>due: <input 
              type="date" 
              value={task.due || undefined}
              onChange={this.update('due')}
            />
            <button onClick={this.handleSubmit}>OK</button>
          </li> 
          <li>List: 
            <Link to={`/lists/${task.list_id}/tasks`}> {list.title}</Link>
          </li>
          
          <li>Notes <br/>
            {/* <img className='hobbs-icon' src={window.notes_hobbs_iconURL} /> */}
           <input 
              type="text" 
              placeholder='Add Notes'
              value={this.state.notes}
            />
            <button onClick={this.handleSubmit}>Add</button>
          </li>
          { task.notes }
        </ul>
      </div>
    )
  }
}

export default TaskDetail;