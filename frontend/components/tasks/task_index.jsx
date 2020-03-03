import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...props,
    }
  }

  componentDidMount() {
    const listId = this.props.match.params.listId;
    this.props.fetchList(this.props.match.params.listId);
    this.props.fetchTasks();
    this.props.fetchTask(listId, this.props.match.params.taskId);
  }

  taskItem(task) {
    // console.log(this.props)
    // const listId = this.props.task.listId
    return (
      <li key={task.id}> 
      {/* <input type='checkbox' /> */}
        {/* {task.task_name} */}
        <Link to={`/lists/${task.list_id}/tasks/${task.id}`}>{task.task_name}</Link>
      </li>
    )
  }

  render(){
    // console.log(this.props)
    // console.log(this.props.tasks)

    const { list, tasks } = this.props;
    const tasksList = tasks.map(task => this.taskItem(task))

    return (
 
      <div className='task-index-container'>
        <h2>All Tasks</h2>
        <ul>
          {tasksList}
          {/* <Link to={`/lists/${list.id}/tasks/${task.id}`}>{tasksList}</Link> */}
        </ul>
      </div>
    )
  }
}

export default TaskIndex;