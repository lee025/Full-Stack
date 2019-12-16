import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Welcome, {currentUser.username}</h3>
      <button onClick={logout}>Sign Out</button>
    </div>
  ) : (
    <div>

    </div>
  );
  return <div>{display}</div>
};

export default Greeting;