import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';


class ListShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...props,
    }
  }

  componentDidMount() {
    this.props.fetchList(this.props.match.params.listId);
    this.props.fetchListTasks(this.props.match.params.listId);
    // 
    // const listId = this.props.match.params.listId;
    // if (this.props.match.taskId) {
    //   this.props.fetchTask(listId, this.props.match.params.taskId)
    // } else {
    //   this.props.fetchListTasks(this.props.match.params.listId)
    // }
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.match.params.listId !== this.props.match.params.listId){
    // if (prevProps.match.url !== this.props.match.url){
      this.props.fetchList(this.props.match.params.listId);
      this.props.fetchListTasks(this.props.match.params.listId);
    }
  }

  taskListItem(task){
    const list = this.props.list;
    return (
      <li key={task.id}>
        <Link to={`/lists/${list.id}/tasks/${task.id}`}>{task.task_name}</Link>
      </li>
    )
  }

  render() {
    const { list, tasks } = this.props;
    const listTasks = tasks.map(task => this.taskListItem(task))
    console.log(this.props)
    return (
        <div className='list-tasks-container'>
          <ul>
            { listTasks }
          </ul>
        </div>
    );
  }
}

export default withRouter(ListShow);