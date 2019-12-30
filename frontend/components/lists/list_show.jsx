import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListShow extends React.Component {
  constructor(props){
    super(props);

    // console.log(this.props)
  }

  componentDidMount() {
    this.props.fetchList(this.props.match.params.listId);
    this.props.fetchListTasks(this.props.match.params.listId);
  }

  taskListItem(task){
    return (
      <li key={task.id}>
        <input type='checkbox' />
        {task.task_name}
      </li>
    )
  }

  render() {
    const { list, tasks } = this.props;
    const listTasks = tasks.map(task => this.taskListItem(task))
    console.log(this.props.tasks)
    return (
      <div>
        <ul>
          { listTasks }
        </ul>
      </div>
    );
  }
}

export default withRouter(ListShow);