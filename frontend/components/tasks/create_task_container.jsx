import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateTask from './create_task';
import { createTask } from '../../actions/task_actions';

const mapStateToProps = ({entities}, ownProps) => {

  return {
    task: {
      list_id: ownProps.match.params.listId,
      task_name: '',
      start: '',
      due: '',
      notes: '',
      completed: false,
    },
  };
};


const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch(createTask(task)),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
))(CreateTask);