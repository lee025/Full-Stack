import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class TaskDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      list_id: this.props.match.params.listId,
      due: new Date(),
      // task_name: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTaskName = this.updateTaskName.bind(this);
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

  updateTaskName(e){
    e.preventDefault();
    const task = Object.assign({}, this.state);
    this.props.updateTask(this.props.match.params.listId, task);

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
    
    const { task, list } = this.props;
    // const noteItems = task.notes.map(note => this.noteItem(note))
    
    if(!task){ return null; }
    if(!list){ return null; }
    
    return (
      <div className='task-detail-container'>
        <div>
          <h2 className='task-detail-header'>{task.task_name}</h2>
          {/* <input 
            className='task-detail-header'
            value={this.props.task_name}
            onChange={this.update('task_name')}
          /><i className="fas fa-pencil-alt" onClick={this.updateTaskName}></i> */}
        </div>
        <ul>
          <li>due: <input 
              type="date" 
              value={task.due || undefined}
              onChange={this.update('due')}
            />
            <button onClick={this.handleSubmit}>OK</button>
          </li> 
          <li>List: {list.title}</li>
          {/* <Link to={`/list/${list.id}/tasks`}></Link> */}
          <li>Notes <br/>
            <input type="text" placeholder='Add Notes'/>
            <button onClick={this.handleSubmit}>Add</button>
          </li>
          { task.notes }
        </ul>
      </div>
    )
  }
}

export default TaskDetail;