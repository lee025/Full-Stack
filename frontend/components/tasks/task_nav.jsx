import React from 'react';

class TaskNav extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchList(this.props.match.params.listId);
    this.props.fetchTask(this.props.match.params.taskId);
  }

  render(){
    
    return(
      <div> TASK NAV BAR -- render only when 1 task selected
        <ul>
          <li>complete</li>
          <li>due</li>
          <li>delete</li>
          <li>tag</li>
        </ul>
      </div>
    )
  }
}

export default TaskNav;