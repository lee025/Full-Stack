import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListIndexContainer from '../components/lists/list_index_container';
import TaskIndexContainer from '../components/tasks/task_index_container';
import ListShowContainer from '../components/lists/list_show_container'

class HomePage extends React.Component {
  constructor(props){
    super(props);

    // this.toggleMain = this.toggleMain.bind(this);
  }


toggleMain(e){
  e.preventDefault();
  if (this.props.location.pathname == '/lists'){
    <Route exact path='/lists' component={TaskIndexContainer} />
  } else {
    <Route exact path='/lists/:listId/tasks' component={ListShowContainer}/>
  }
}

  render() {

    // console.log(this.props.location.pathname)
    return (
      <div>
        {/* col1 */}
        <ListIndexContainer /> 
        <article className="user-main">

          <div className="user-main-right">
            {/* col2 */}
            {
              this.props.location.pathname == '/lists' ? 
              (<Route path='/lists' component={TaskIndexContainer} />) : 
              (<Route exact path='/lists/:listId/tasks' component={ListShowContainer} />)
            }

            {/* <Route path='/lists/:listId/tasks' component={TaskDetailContainer} /> */}
           
          </div>

        </article>
      </div>
    )
  }
}

export default HomePage;