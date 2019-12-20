import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
import ListIndexContainer from '../lists/list_index_container';
import CreateListConainter from '../lists/create_list_form_container';
import EditListContainer from '../lists/edit_list_form_container';
import ListShowContainer from '../lists/list_show_container';

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
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-logout-button" onClick={logout}>
          Log Out
        </button>
      </header>
      <div className="group"></div>


      {/* main content-listShow/taskShow */}

      <article className="user-main">
        {/*  */}
  
        <div className="calvin-hobbs-main">
          <h2 className="workinprogress">Work In Progress...</h2>
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