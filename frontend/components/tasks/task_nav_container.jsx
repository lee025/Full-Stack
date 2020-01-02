import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskNav from './task_nav';
import { fetchTask, deleteTask, updateTask } from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';

const mapStateToProps = ({entities}, ownProps) => {
  // console.log(entities)
  const list = entities.lists[ownProps.match.params.listId]

  if(list){
    return {
      list,
      tasks: Object.values(entities.tasks).filter(tasks => {
        return tasks.list_id == list.id
      }),
      task: entities.tasks[ownProps.match.params.taskId]
    }
  } else {
      return {
        tasks: []
      }
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTask: (listId, id) => dispatch(fetchTask(listId, id)),
  deleteTask: (listId, id) => dispatch(deleteTask(listId, id)),
  fetchList: listId => dispatch(fetchList(listId)),
  updateTask: (listId, task) => dispatch(updateTask(listId, task)),
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(TaskNav);