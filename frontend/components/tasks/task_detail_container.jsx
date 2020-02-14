import { connect } from 'react-redux';
import TaskDetail from './task_detail';
import { fetchTask, updateTask, fetchSelectedTask } from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( {entities}, ownProps ) => {
  // console.log("MSTP:", entities)
  
  let list = entities.lists[ownProps.match.params.listId];
  let task = entities.tasks[ownProps.match.params.taskId];

  if(!list || !task) {
    return {}
  } else {

    return {
      // list: ownProps.match.params.listId,
      // task: ownProps.match.params.taskId,
      list,
      task
      
    }
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