import { connect } from 'react-redux';
import TaskDetail from './task_detail';
import { fetchTask, updateTask } from '../../actions/task_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( {entities}, ownProps ) => {
  console.log(entities)
  return {
    
  }
};

const mapDispatchToProps = dispatch => ({
  fetchTask: id => dispatch(fetchTask(id)),
  updateTask: task => dispatch(updateTask(task)),
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));