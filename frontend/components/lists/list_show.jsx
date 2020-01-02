import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';


class ListShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...props,
      // listSummary: true,
      // taskDetail: false,
    }

    // this.toggleSummaryDetail = this.toggleSummaryDetail.bind(this)
  }

  componentDidMount() {
    this.props.fetchList(this.props.match.params.listId);
    this.props.fetchListTasks(this.props.match.params.listId);
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.match.params.listId !== this.props.match.params.listId){
      this.props.fetchList(this.props.match.params.listId);
      this.props.fetchListTasks(this.props.match.params.listId);
    }
  }

  // toggleSummaryDetail(e){
  //   e.preventDefault();
  //   this.setState({ listSummary: false, taskDetail: true });
  // }

  // renderSummaryDetail(){
  //   if (this.state.listSummary && !this.state.taskDetail){
  //     <Route path='/lists/:listId' component={ListSummaryContainer} /> 
  //   } else {
  //     <Route path='/lists/:listId/tasks/:taskId' component={TaskDetailContainer} />
  //   }
  // }

  taskListItem(task){
    const list = this.props.list;
    return (
      <li key={task.id}>
        {/* onClick={toggleSummaryDetail} */}
        <Link to={`/lists/${list.id}/tasks/${task.id}`}>{task.task_name}</Link>
      </li>
    )
  }

  render() {
    const { list, tasks } = this.props;
    const listTasks = tasks.map(task => this.taskListItem(task))
    // console.log(this.props.tasks)
    return (
      // <div>
        <div className='list-tasks-container'>
          <ul>
            { listTasks }
          </ul>
        </div>
        /* {this.renderSummaryDetail}
      </div> */
    );
  }
}

export default withRouter(ListShow);