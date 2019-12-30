import { connect } from 'react-redux';
import ListShow from './list_show';
import { withRouter } from 'react-router-dom';
import { fetchList } from '../../actions/list_actions';
import { fetchTasks, fetchListTasks } from '../../actions/task_actions';
import {  } from '../../util/task_api_util';


const mapStateToProps = ({entities}, ownProps) => {

  // const list = entities.lists[ownProps.match.params.listId]
  // const tasks = Object.values(entities.tasks).filter(tasks => {
  //   return tasks.list_id == entities.lists.id
  // })

  return {
    list: entities.lists[ownProps.match.params.listId],
    tasks: Object.values(entities.tasks),
    // tasks: Object.values(entities.tasks).filter(tasks => {
    //   return tasks.list_id == entities.lists.id
    // })
  }
};


const mapDispatchToProps = dispatch => ({
  fetchList: listId => dispatch(fetchList(listId)),
  fetchTasks: tasks => dispatch(fetchTasks(tasks)),
  fetchListTasks: listId => dispatch(fetchListTasks(listId))
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(ListShow));
