import { connect } from 'react-redux';
import ListForm from './list_form';
import { createList } from '../../actions/list_actions';

const mapStateToProps = state => ({
  list: { title: ''},
  formType: 'Add a list',
  button: 'Add'
})

const mapDispatchToProps = dispatch => ({
  action: list => dispatch(createList(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);