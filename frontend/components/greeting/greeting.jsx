import React from "react";
import { Link, Redirect, Route, withRouter } from "react-router-dom";
import CreateTask from '../tasks/create_task';
import TaskIndexContainer from '../tasks/task_index_container';
import { fetchTask, fetchTasks, fetchTaskList } from '../../actions/task_actions';


class Greeting extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...props,
      showListDD: true,
    }
    
    this.onClick = this.onClick.bind(this);
    // this.toggleListDD = this.toggleListDD.bind(this);
  }

  onClick(e){
    e.preventDefault();
    this.state.logout();
  }

  toggleListDD(e) {
    e.preventDefault();
    if (this.state.showListDD) {
      this.setState({showListDD: false})
    } else {
      this.setState({showListDD: true})
    }
  }

  sessionLinks() {
    return (
      <div>
        {/* <Redirect to='/' /> */}
        <article className={this.props.currentUser ? "hidden" : ""}>
            <nav className="greeting-navbar">
              <h1 className="greeting-header-logo">All the Things!</h1>
              <ul className="greeting-header-list">
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up!</Link>
                </li>
              </ul>
            </nav>
          </article>
      </div>
    )
  };


  userHome() {
    return (
      <section>
        <header className="header-group">

          {/* <i className="fas fa-bars" onClick={this.toggleListDD}></i>  */}

          <p className="header-name">Hi, {this.props.currentUser.username}!</p>
          <button className="header-logout-button" onClick={this.onClick}>
            Log Out
          </button>
        </header>
        <div className="group"></div>
      </section>
      )
    };


  render() {
    // console.log(this.state)
    
    const { currentUser } = this.props;

    return (
      <div>
        {currentUser ? (<div>{this.userHome()}</div>) : (<div>{this.sessionLinks()}</div>)}
      </div>
    )
  }
  
};

export default withRouter(Greeting);






// import React from "react";
// import { Link, Redirect, Route } from "react-router-dom";
// import CreateTask from '../tasks/create_task';
// import TaskIndex from '../tasks/task_index';


// const Greeting = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <div>
//       <article className={currentUser ? "hidden" : ""}>
//         <nav className="greeting-navbar">
//           <h1 className="greeting-header-logo">All the Things!</h1>
//           <ul className="greeting-header-list">
//             <li>
//               <Link to="/">Login</Link>
//             </li>
//             <li>
//               <Link to="/signup">Sign up!</Link>
//             </li>
//           </ul>
//         </nav>
//       </article>
//     </div>
//   );


//   const userHome = () => (
//     <section> 
//       <header className="header-group">
//         <p className="header-name">Hi, {currentUser.username}!</p>
//         <button className="header-logout-button" onClick={logout}>
//           Log Out
//         </button>
//       </header>
//       <div className="group"></div>


//       {/* main content-listShow/taskShow */}

//       <article className="user-main">

//         <div className="user-main-right">
//           {/* <p className="workinprogress">Work In Progress...</p> */}

//           {/* <CreateTask /> */}
//           <TaskIndex />

//           {/* <img
//             className="calvin-hobbs rotate split"
//             src={window.calvin_and_hobbsURL}
//           /> */}

//         </div>
        
//       </article>
//     </section>
//   );
//   return currentUser ? userHome() : sessionLinks()
// };

// export default Greeting;




{/* main content-listShow/taskShow */ }

{/* <article className="user-main"> */ }

{/* <div className="user-main-right"> */ }
{/* <p className="workinprogress">Work In Progress...</p> */ }


{/* <Route path='/' component={TaskIndexContainer} /> */ }

{/* <img className="calvin-hobbs" src={window.calvin_and_hobbsURL} /> */ }

{/* </div> */ }

{/* </article> */ }





// “A day can really slip by when you're deliberately avoiding what you're supposed to do.”
// - Bill Watterson, Calvin and Hobbes