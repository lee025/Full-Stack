import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: '',
    // };

    this.state = this.props.list;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className='add-list-label'>
            Add a List 
            <input
              className='add-list-input'
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
            />
          </label>
          <button className='add-list-button' 
              onClick={this.handleSubmit}>
                Add
          </button>
        </form>
      </div>
    );
  }
}

export default ListForm;