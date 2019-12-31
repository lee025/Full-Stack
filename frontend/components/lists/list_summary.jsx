import React from 'react';

class ListSummary extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...props,
    }

    this.numTasksCounter = this.numTasksCounter.bind(this);
  }

  componentDidMount(){
    this.props.fetchList(this.props.match.params.listid);
    this.props.fetchListTasks(this.props.match.params.listId);
  }

  numTasksCounter(){
    this.props.tasks.forEach(task => {
      this.setState({ numTasks: + 1 })
    })
    return this.state.numTasks;
  }

  render(){
    console.log(this.props.tasks)

    // const { list } = this.props;    

    return (
      <div className='list-summary-container'>
        <h2>LIST TITLE GOES HERE</h2>
        <div className='list-summary-counter'>
          {this.props.tasks.length} tasks
        </div>
      </div>
    )
  }
}

export default ListSummary;