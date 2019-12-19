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
      </article>
    </div>
  );

  const personalGreeting = () => (
    <section>
      <header className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        {/* <EditListContainer /> */}
        <button className="header-logout-button" onClick={logout}>
          Log Out
        </button>
      </header>
      <h2 className='workinprogress'>Work In Progress...</h2>
      <div className='calvin-hobbs-main'>
        <img className='calvin-hobbs rotate split' src={window.calvin_and_hobbsURL} />
      </div>
    </section>
  );

  return currentUser ? personalGreeting() : sessionLinks()
};

export default Greeting;




// “A day can really slip by when you're deliberately avoiding what you're supposed to do.”
// - Bill Watterson, Calvin and Hobbes