import { connect } from 'react-redux';
import TaskDetail from './task_detail';
import { fetchTask, updateTask, fetchSelectedTask } from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( {entities}, ownProps ) => {
  // console.log(entities)
  return {
    // listId: ownProps.match.params.listId,
    // taskId: ownProps.match.params.taskId,
    list: entities.lists[ownProps.match.params.listId],
    task: entities.tasks[ownProps.match.params.taskId],
  }
};

const mapDispatchToProps = dispatch => ({
  fetchTask: (listId, id) => dispatch(fetchTask(listId, id)),
  updateTask: (listId, task) => dispatch(updateTask(listId, task)),
  fetchList: listId => dispatch(fetchList(listId)),
  // fetchSelectedTask: task => dispatch(fetchSelectedTask(task))
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));