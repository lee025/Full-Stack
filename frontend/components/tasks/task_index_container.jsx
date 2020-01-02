import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskIndex from './task_index';
import { fetchList } from '../../actions/list_actions';
import {
  fetchTasks, fetchTask, fetchListTasks
} from '../../actions/task_actions';



const mapStateToProps = ( state, ownProps ) => {
  // console.log(state)

  return {
    tasks: Object.values(state.entities.tasks),
    listId: ownProps.match.params.listId,
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchList: listId => dispatch(fetchList(listId)),
    fetchTasks: () => dispatch(fetchTasks()),
    fetchTask: (listId, id) => dispatch(fetchTask(listId, id)),
    fetchListTasks: listId => dispatch(fetchListTasks(listId))
  }
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(TaskIndex);