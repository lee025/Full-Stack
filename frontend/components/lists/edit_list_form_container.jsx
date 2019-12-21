import { connect } from 'react-redux';
import React from 'react';
import { fetchList, updateList } from '../../actions/list_actions';

class EditListForm extends React.Component {
  
  componentDidMount(){
    // console.log(this.props);
    this.props.fetchList(this.props.match.params.listId)
  }

  render() {
    const { action, formType, list } = this.props;

    if (!list) return null;
    return (
      <ListForm action={action} formType={formType} post={post}/>
    );
  }
};

const mapStateToProps = (state, ownProps) => {

  // console.log(state);

  return {
    list: state.entities.lists[ownProps.match.params.listId],
    formType: 'Rename List',
    button: 'Save'
  }
};

const mapDispatchToProps = dispatch => ({
  fetchList: listId => dispatch(fetchList(listId)),
  action: list => dispatch(updateList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditListForm);