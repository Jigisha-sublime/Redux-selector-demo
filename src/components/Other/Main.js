import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => (
  <div>
    Main
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
  </div>
);

export default Main;
