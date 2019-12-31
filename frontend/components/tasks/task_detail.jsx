import React from 'react';

class TaskDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTask(this.props.match.params.taskId)
  }

  render(){
    console.log(this.props)

    return (
      <div className='task-detail-container'>

        <h2>TASK NAME</h2>
          <div>DUE:...</div> 
          <div>List: List Name...</div>
          <div>Notes
            <input type="text" placeholder='Add Notes???'/>
          </div>
      </div>
    )
  }
}

export default TaskDetail;