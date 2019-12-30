import React from 'react';

class TaskIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...props,
    }
    // console.log(this.props)
  }

  componentDidMount() {
    this.props.fetchTasks();
  }


  taskItem(task) {
    // console.log(task.task_name)
    return (
      <li key={task.id}> 
      <input type='checkbox' />
        {task.task_name}
      </li>
    )
  }

  render(){
    // console.log(this.props)
    console.log(this.props.tasks)

    const { tasks } = this.props;
    const tasksList = tasks.map(task => this.taskItem(task))

    return (
      <div className=''>
        <ul>
          { tasksList }
        </ul>
        {/* logic for path'/lists/:listId/:taskId = <TaskDetail /> ?? */}
      </div>
    )
  }
}

export default TaskIndex;