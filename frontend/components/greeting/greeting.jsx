import React from "react";
import { Link } from "react-router-dom";
import EditListContainer from '../lists/edit_list_form_container';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <article className={currentUser ? "hidden" : ""}>
        <nav className="greeting-navbar">
          <h1 className="greeting-header-logo">All the Things!</h1>
          <ul className="greeting-header-list">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign up!</Link>
            </li>
          </ul>
        </nav>

        {/* <div className='calvin-hobbs-main'>
          <img className='calvin-hobbs rotate split' src={window.calvin_and_hobbsURL} />
        </div> */}
      </article>

      {/* <article className="login-left split">
        <div>
          <div className="login-cow-div">
            <img className="cow-logo" src={window.cow_logoURL} />
          </div>
        </div>

        <blockquote>
          <p>
            "You can't be that kid standing at the top of the water slide,
            overthinking it. You have to go down the chute
          </p>
          <footer>- Tina Fey, Bossy Pants</footer>
        </blockquote>

        <div>
          <div className="login-avatar-div">
            <img className="avatar-bob" src={window.avatar_bobURL} />
          </div>
        </div>
      </article> */}
    </div>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      {/* <EditListContainer /> */}
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks()
};

export default Greeting;




// “A day can really slip by when you're deliberately avoiding what you're supposed to do.”
// - Bill Watterson, Calvin and Hobbes