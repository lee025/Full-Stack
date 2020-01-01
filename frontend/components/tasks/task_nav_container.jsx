import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskNav from './task_nav';
import { fetchTask, deleteTask } from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';

const mapStateToProps = ({entities}, ownProps) => {
  console.log(entities)
  return {
    list: entities.lists[ownProps.match.params.listId],
    tasks: Object.values(entities.tasks).filter(tasks => {
      return tasks.list_id == list.id
    })
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTask: id => dispatch(fetchTask(id)),
  deleteTask: id => dispatch(deleteTask(id)),
  fetchList: listId => dispatch(fetchList(listId)),
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(TaskNav);