import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Redirect } from 'react-router-dom';

import Modal from './modal/modal';
import LogInFormContainer from '../components/session_form/login_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import HomePageContainer from '../components/lists/list_index_container';



import { AuthRoute, ProtectedRoute } from "../util/route_util";

  const App = () => (

    <div className="greeting-container group">
        <GreetingContainer />

      <Switch>
        <AuthRoute exact path="/" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/lists" component={HomePageContainer} />

        <Redirect to='/' />
      </Switch>

      {/* <div className="group2"></div> */}
      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-img">{/* insert image */}</div>
          <div className="footer-input">
            <ul className="footer-list">
              <li>
                <a href="https://github.com/lee025/All-the-Things/wiki/MVP-List">
                  MVP List
                </a>
              </li>
              <li>
                <a href="https://github.com/lee025/All-the-Things/wiki/Schema">
                  Schema
                </a>
              </li>
              <li>
                <a href="https://github.com/lee025/All-the-Things/wiki/Sample-State">
                  Sample State
                </a>
              </li>
              <li>
                <a href="https://github.com/lee025/All-the-Things/wiki/Frontend-Routes">
                  Frontend Routes
                </a>
              </li>
              <li>
                <a href="https://github.com/lee025/All-the-Things/wiki/Backend-Routes">
                  Backend Routes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <small className="footer-copy">
          &copy; 2019 All the Things. All rights reserved.
        </small>
      </footer>
    </div>
  );

export default App;





        {
          /* <div>
          <img className='calvin-hobbs rotate split' src={window.calvin_and_hobbsURL} />
        </div> */
        }