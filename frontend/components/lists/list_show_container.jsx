import { connect } from 'react-redux';
import ListShow from './list_show';
import { fetchList } from '../../actions/list_actions';


const mapStateToProps = (state, ownProps) => {
  console.log(state.lists)
  return {
    list: state.lists[ownProps.match.params.listId]
  }
};

const mapDispatchToProps = dispatch => ({
  fetchList: listId => dispatch(fetchList(listId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListShow);
