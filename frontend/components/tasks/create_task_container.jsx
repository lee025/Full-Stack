import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateTask from './create_task';
import { createTask } from '../../actions/task_actions';

const mapStateToProps = ({entities}, ownProps) => {

  return {
    // listId: ownProps.match.params.listId
  };
};


const mapDispatchToProps = dispatch => {
  return {
    createTask: (listId, task) => dispatch(createTask(listId, task)),
  };
};

export default connect(
  null, mapDispatchToProps
)(CreateTask);