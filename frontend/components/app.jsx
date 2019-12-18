import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';

import LogInFormContainer from '../components/session_form/login_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';

import { AuthRoute } from "../util/route_util";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

      <div className='greeting-container group'>
        <header>
          <GreetingContainer />
        </header>

      
        {/* <div>
          <img className='calvin-hobbs rotate split' src={window.calvin_and_hobbsURL} />
        </div> */}

        
        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>

        <div className='group'></div>
        <footer>
          <div className='footer-container'>
            <div className='footer-img'>
              {/* insert image */}
            </div>
            <div className='footer-input'>
              <ul className='footer-list'>
                <li><a href='https://github.com/lee025/All-the-Things/wiki/MVP-List'>MVP List</a></li>
                <li><a href='https://github.com/lee025/All-the-Things/wiki/Schema'>Schema</a></li>
                <li><a href='https://github.com/lee025/All-the-Things/wiki/Sample-State'>Sample State</a></li>
                <li><a href='https://github.com/lee025/All-the-Things/wiki/Frontend-Routes'>Frontend Routes</a></li>
                <li><a href='https://github.com/lee025/All-the-Things/wiki/Backend-Routes'>Backend Routes</a></li>
              </ul>
            </div>
          </div>
          <small className="footer-copy">
            &copy; 2019 All the Things. All rights reserved.
          </small>
        </footer>

      </div>
    );
  }


};

export default App;



// const App = () => (
//   <div className='greeting-container'>
//     <header>
//       <GreetingContainer />
//     </header>
  

//   <div className='greeting-main rotate'>
//       <img className='calvin-hobbs' src={window.calvin_and_hobbsURL} />
//   </div>


//       {/* <footer className={this.props.formType === 'Sign Up' ? '' : 'hidden'}> */}
//     <footer>
//       <div className='footer-container'>
//         <div className='footer-img'>
//           {/* insert image */}
//         </div>
//         <div className='footer-input'>
//           <ul className='footer-list'>
//             <li><a href='https://github.com/lee025/All-the-Things/wiki/MVP-List'>MVP List</a></li>
//             <li><a href='https://github.com/lee025/All-the-Things/wiki/Schema'>Schema</a></li>
//             <li><a href='https://github.com/lee025/All-the-Things/wiki/Sample-State'>Sample State</a></li>
//             <li><a href='https://github.com/lee025/All-the-Things/wiki/Frontend-Routes'>Frontend Routes</a></li>
//             <li><a href='https://github.com/lee025/All-the-Things/wiki/Backend-Routes'>Backend Routes</a></li>
//           </ul>
//         </div>
//         <small class="footer-copy">
//           &copy; 2019 All the Things. All rights reserved.
//         </small>
//       </div>
//     </footer> 
    
//     <Switch>

//       <AuthRoute exact path="/login" component={LogInFormContainer} />
//       <AuthRoute exact path="/signup" component={SignUpFormContainer} />

//     </Switch>


//   </div>
// );

// export default App;
