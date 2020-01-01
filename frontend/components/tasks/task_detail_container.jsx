import { connect } from 'react-redux';
import TaskDetail from './task_detail';
import { fetchTask, updateTask, fetchSelectedTask } from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( {entities}, ownProps ) => {
  // console.log(entities)
  return {
    task: entities.tasks[ownProps.match.params.taskId],
    list: entities.lists[ownProps.match.params.listId],
  }
};

const mapDispatchToProps = dispatch => ({
  fetchTask: id => dispatch(fetchTask(id)),
  updateTask: task => dispatch(updateTask(task)),
  fetchList: listId => dispatch(listId),
  fetchSelectedTask: task => dispatch(fetchSelectedTask(task))
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));