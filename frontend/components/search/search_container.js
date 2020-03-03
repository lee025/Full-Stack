import { connect } from 'react-redux';
import Search from './search';
import { fetchList } from '../../actions/list_actions';
import { fetchTasks, fetchTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  console.log("Search Container:", state)

  return {
    tasks: Object.values(state.entities.tasks),
    // listId: ownProps.match.params.listId,
    // task: state.entities.tasks[ownProps.match.params.taskId],
  }
};

const mapDispatchToProps = ( dispatch ) => {

  return {
    // fetchList: listId => dispatch(fetchList(listId)),
    fetchTasks: () => dispatch(fetchTasks()),
    // fetchTask: (listId, id) => dispatch(fetchTask(listId, id)),
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Search);