import React from 'react';
import { withRouter } from 'react-router-dom';
import TaskNav from './task_nav';
import { fetchLists } from '../../util/list_api_util';


class CreateTask extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      list_id: this.props.match.params.listId,
      task_name: '',
      completed: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const listId = this.props.match.params.listId;
    // this.props.fetchTask(listId, this.props.match.params.taskId);
  }

  handleSubmit(e){
    e.preventDefault();
    const listId = this.props.match.params.listId;
    const task = Object.assign({}, this.state);
    this.setState({ task_name: '' })
    this.props.createTask(listId, task)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){

    // const { task } = this.props;
    // console.log(this.props)

    return (
      // <div>
      <form className='add-task-form' onSubmit={this.handleSubmit}>
        <input 
          className='add-task-input'
          type="text" 
          placeholder='Add a task...'
          value={this.state.task_name}
          onChange={this.update('task_name')}
        />
        <button onClick={this.handleSubmit}>Add Task</button>
      </form>
      // </div>
    )
  }
}

export default withRouter(CreateTask);