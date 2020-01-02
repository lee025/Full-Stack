import React from 'react';

class TaskDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...props,
      // list_id: this.props.match.params.listId,
      // task_name: '',
      // start: '',
      // due: new Date(),
      // notes: '',
      // completed: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, this.state.task)
    const listId = this.props.match.params.listId
    this.props.updateTask(listId, this.state.task);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value, id: this.props.task.id })
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
        <h2>{task.task_name}</h2><i className="fas fa-pencil-alt"></i>
        <ul>
          <li>due: <input 
              type="date" 
              value={task.due || undefined}
              onChange={this.update('due')}
              required pattern='\d{2}-\d{2}-\d{4}'
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