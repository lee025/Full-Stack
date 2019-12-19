import React from 'react';

class ListForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.list;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return e => this.setState( {[field]: e.currentTarget.value} );
  }

  displayButton() {
    this.props.formType === "Add a list" ? 'Add' : 'Save' 
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label value={this.props.formType}> 
            <input 
              type='text'
              value={this.state.title}
              onChange={this.update('title')}
            />
          </label>
          <button type='submit'>{this.displayButton()}</button>
        </form>
      </div>
    )
  }

}

export default ListForm;