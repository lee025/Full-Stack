import React from 'react';

class TaskDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...props,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    // this.props.fetchList(this.props.match.params.listId);
    this.props.fetchTask(this.props.match.params.taskId);
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.taskId !== this.props.match.params.taskId){
      this.props.fetchTask(this.props.match.params.taskId);
    }
  }

  handleSubmit(e) {
    e.stopPropogation();
    const task = Object.assign({}, this.state.task)
    this.props.updateTask(this.state.task);
  }

  update(field) {
    return e => this.setState({ task: { [field]: e.currentTarget.value, id: this.state.task.id } })
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
    
    // const task = this.props.task;
    // const list = this.props.list;
    
    const { task, list } = this.props;
    // const noteItems = task.notes.map(note => this.noteItem(note))
    
    if(!task){ return null; }
    if(!list){ return null; }
    
    // console.log(task.notes)
    return (
      <div className='task-detail-container'>
        <h2>{task.task_name}</h2>
          <i className="fas fa-pencil-alt"></i>
        <ul>
          <li>due:</li> 
          <li>List: {list.title}</li>
          <li>Notes <br/>
            <input type="text" placeholder='Add Notes???'/>
          </li>
          { task.notes }
        </ul>
      </div>
    )
  }
}

export default TaskDetail;