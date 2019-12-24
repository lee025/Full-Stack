import React from "react";
import { Link, Redirect, Route } from "react-router-dom";


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <article className={currentUser ? "hidden" : ""}>
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
  );


  const userHome = () => (
    <section>
      <header className="header-group">
        <p className="header-name">Hi, {currentUser.username}!</p>
        <button className="header-logout-button" onClick={logout}>
          Log Out
        </button>
      </header>
      <div className="group"></div>


      {/* main content-listShow/taskShow */}

      <article className="user-main">
  
        <div className="calvin-hobbs-main">
          <p className="workinprogress">Work In Progress...</p>
          <img
            className="calvin-hobbs rotate split"
            src={window.calvin_and_hobbsURL}
          />
        </div>
        
      </article>
    </section>
  );
  return currentUser ? userHome() : sessionLinks()
};

export default Greeting;




// “A day can really slip by when you're deliberately avoiding what you're supposed to do.”
// - Bill Watterson, Calvin and Hobbes