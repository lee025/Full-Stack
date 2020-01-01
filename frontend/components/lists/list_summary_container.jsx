import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListSummary from './list_summary';
import { fetchList } from '../../actions/list_actions';
import { fetchListTasks } from '../../actions/task_actions';

const mapStateToProps = ({ entities }, ownProps) => {
  const list = entities.lists[ownProps.match.params.listId]

  // debugger
  if (list) {
    return {
      list,
      tasks: Object.values(entities.tasks).filter(tasks => {
        return tasks.list_id == list.id
      })
    }
  } else {
    return {
      tasks: []
    }
  }
};

const mapDispatchToProps = dispatch => ({
  fetchList: listId => dispatch(fetchList(listId)),
  fetchListTasks: listId => dispatch(fetchListTasks(listId))
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(ListSummary));