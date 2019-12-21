import { connect } from 'react-redux';
import ListForm from './list_form';
import { createList } from '../../actions/list_actions';
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  list: { title: ''},
  formType: 'Add a list',
  button: 'Add'
})

const mapDispatchToProps = dispatch => ({
  action: list => dispatch(createList(list)),
  // closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);