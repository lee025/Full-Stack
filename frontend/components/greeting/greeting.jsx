import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className={currentUser ? 'hidden' : ''}>
      <nav className='greeting-navbar'>
        <h1 className='greeting-header-logo'>All the Things!</h1>
          <ul className='greeting-header-list'>
            <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up!</Link></li>
          </ul>
      </nav>

      <div>
        <img className='calvin-hobbs rotate split' src={window.calvin_and_hobbsURL} />
      </div>

    </div>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks()
};

export default Greeting;
