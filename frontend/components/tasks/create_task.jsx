import React from 'react';


class CreateTask extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      ...props,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState(this.props.task);
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){

    // console.log(this.props)

    return (

      <form onSubmit={this.handleSubmit}>
        <input 
          className=''
          type="text" 
          placeholder='Add a task...'
          value={this.state.task_name}
          onChange={this.update('task_name')}
        />
        <button onClick={this.handleSubmit}>Add Task</button>
      </form>

    )
  }
}

export default CreateTask;