import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateTask from './create_task';
import { createTask, fetchTask } from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';

const mapStateToProps = ({entities}, ownProps) => {

  return {
    listId: ownProps.match.params.listId,
    taskId: ownProps.match.params.taskId,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    createTask: (listId, task) => dispatch(createTask(listId, task)),
    fetchTask: (listId, id) => dispatch(fetchTask(listId, id)),
    fetchList: listId => dispatch(fetchList(listId)),
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(CreateTask);