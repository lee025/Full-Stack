import { connect } from 'react-redux';
import ListForm from './list_form';
import { createList } from '../../actions/list_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  list: { title: ''},
  title: 'Add a list',
  formType: 'create'
})

const mapDispatchToProps = dispatch => ({
  action: list => dispatch(createList(list)),
});

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps)(ListForm));