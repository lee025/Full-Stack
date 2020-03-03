import { connect } from 'react-redux';
import Search from './search';
import { fetchList } from '../../actions/list_actions';
import { fetchTasks, fetchTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  console.log("Search Container:", state)

  return {
    tasks: Object.values(state.entities.tasks),
  }
};

const mapDispatchToProps = ( dispatch ) => {

  return {
    fetchTasks: () => dispatch(fetchTasks()),
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Search);