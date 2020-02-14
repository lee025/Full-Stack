import React from 'react';
import { Link } from 'react-router-dom';


class TaskDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // list_id: this.props.match.params.listId,
      due: new Date(),
      task_name: '',
      note: ""
    }

    console.log("constructor state:", this.props)

    // console.log("constructor props:", this.props)
    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
  }

  componentDidMount(){
    // this.props.fetchList(this.props.match.params.listId);
    const listId = this.props.match.params.listId;
    this.props.fetchTask(listId, this.props.match.params.taskId)
      // .then(() => this.state.notes.push(this.props.task.notes))
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

  handleNoteSubmit(e){
    e.preventDefault();
    const task = Object.assign({}, this.props.task);
    task.notes.push(this.state.notes);
    this.setState({ note: "" });
    const listId = this.props.match.params.listId;
    this.props.updateTask(listId, task)
  }

  updateNotes(e) {
    // debugger
    // return e => this.setState({ notes: this.state.notes.concat(e.currentTarget.value)})

    this.setState({ notes: [...this.state.notes, e.target.value] })

    // this.setState({ notes: this.state.notes.concat([e.target.value])})
    
    // return e => this.setState(prevState => ({
    //   notes: [...prevState.notes, e.target.value]
    // }))

    // return e => this.setState({ notes: [...this.state.notes.concat(e.target.value) ]})
    // this.setState({
    //   notes: Object.assign({}, this.state.notes, {
    //     [e.target.id]: e.target.value
    //   })
    // });

  }

  noteItem(note, idx){
    return(
      <li key={idx}>
        {note}
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
          <h2 className='task-detail-header'>{task.task_name}</h2>
          
            <input
              className='task-detail-header-edit'
              value={this.state.task_name || this.props.task.task_name}
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