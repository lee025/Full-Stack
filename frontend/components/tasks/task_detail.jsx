import React from 'react';
import { Link } from 'react-router-dom';


class TaskDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      due: new Date(),
      // due: "",
      task_name: '',
      notes: "",
      // taskId: this.props.match.params.taskId
    }

    console.log("constructor state:", this.props)

    // console.log("constructor props:", this.props)
    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDueSubmit = this.handleDueSubmit.bind(this);
  }

  componentDidMount(){
    // this.props.fetchList(this.props.match.params.listId);
    const listId = this.props.match.params.listId;
    this.props.fetchTask(listId, this.props.match.params.taskId)
  }

  componentDidUpdate(prevProps){
    const listId = this.props.match.params.listId;
    if (prevProps.match.params.taskId !== this.props.match.params.taskId){
      this.props.fetchTask(listId, this.props.match.params.taskId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, this.props.task)
    const listId = this.props.match.params.listId;
    this.props.updateTask(listId, { ...this.state, id: task.id } );
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleDueSubmit(e){
    e.preventDefault();
    const task = Object.assign({}, this.props.task)
    this.setState({ due: this.state.due });
    debugger
    const listId = this.props.match.params.listId;
    this.props.updateTask(listId, task);
  }

  handleNoteSubmit(e){
    e.preventDefault();
    const task = Object.assign({}, this.props.task);
    task.notes.push(this.state.notes);
    this.setState({ notes: "" });
    const listId = this.props.match.params.listId;
    this.props.updateTask(listId, task)
  }


  noteItem(note, idx){
    return(
      <li key={idx}>
        {note}
        {/* <i className="fas fa-pencil-alt" onClick={this.handleNoteSubmit}></i> */}
      </li>
    )
  }

  render(){
    const { task, list } = this.props;
    console.log(task)
    if(!task){ return null; }
    if(!list){ return null; }
    
    const noteItems = task.notes.map((note, idx) => this.noteItem(note, idx))
    
    return (
      <div className='task-detail-container'>
        <div className=''>
          <h2 className='task-detail-header' onClick={this.updateName}>
            {task.task_name}
          </h2>
      
            <input
              className='task-detail-header-edit'
              value={this.state.task_name || this.props.task.task_name}
              placeholder='Edit Task Name'
              onChange={this.update('task_name')}
            /><i className="fas fa-pencil-alt" onClick={this.handleSubmit}></i>
          
        </div>
        <ul>
          {/* <li>due: <input 
              type="date" 
              value={task.due || undefined}
              // value={task.due}
              onChange={this.update('due')}
            />
            <button onClick={this.handleDueSubmit}>OK</button>
          </li>  */}
          <li>List: 
            <Link to={`/lists/${task.list_id}/tasks`}> {list.title}</Link>
          </li>
          
          <li>Notes <br/>
            {/* <img className='hobbs-icon' src={window.notes_hobbs_iconURL} /> */}
           <input 
              type="text" 
              placeholder='Add Notes'
              // value={this.state.notes}
              onChange={this.update("notes")}
            />
            <button onClick={this.handleNoteSubmit}>Add</button>
          </li>
          { noteItems }
        </ul>
      </div>
    )
  }
}

export default TaskDetail;