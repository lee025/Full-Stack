import React from 'react';

class TaskDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      list_id: this.props.match.params.listId,
      due: new Date(),
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
    return (
      <input 
        type="text"
        value={this.props.task.task_name}
        onChange={this.update('task_name')}
      />
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, this.props.task)
    const listId = this.props.match.params.listId
    // this.state.due = Date.parse(this.state.due)
    console.log(this.state)
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
    
    console.log(task.due)
    return (
      <div className='task-detail-container'>
        <div>
          <h2 className='task-detail-header'>{task.task_name}</h2>
          {/* <h2 className='task-detail-header'>
            {task.task_name}
            <i className="fas fa-pencil-alt" onClick={this.updateTaskName()}></i>
          </h2> */}
        </div>
        <ul>
          <li>due: <input 
              type="date" 
              value={task.due || undefined}
              onChange={this.update('due')}
              // required pattern='\d{2}-\d{2}-\d{4}'
            />
            <button onClick={this.handleSubmit}>OK</button>
          </li> 
          <li>List: {list.title}</li>
          <li>Notes <br/>
            <input type="text" placeholder='Add Notes'/>
          </li>
          { task.notes }
        </ul>
      </div>
    )
  }
}

export default TaskDetail;