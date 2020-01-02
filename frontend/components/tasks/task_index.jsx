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
    this.props.fetchList(this.props.match.params.listId);
    this.props.fetchTasks();
  }

  taskItem(task) {
    // console.log(this.props)
    return (
      <li key={task.id}> 
      <input type='checkbox' />
        {task.task_name}
        {/* <Link to={`/lists/${list.id}/tasks/${task.id}`}>{task.task_name}</Link> */}
      </li>
    )
  }

  render(){
    // console.log(this.props)
    // console.log(this.props.tasks)

    const { tasks } = this.props;
    const tasksList = tasks.map(task => this.taskItem(task))

    return (
      <div className='task-index-container'>
        <ul>
          { tasksList }
        </ul>
        {/* logic for path'/lists/:listId/:taskId = <TaskDetail /> ?? */}
      </div>
    )
  }
}

export default TaskIndex;