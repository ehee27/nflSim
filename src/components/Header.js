import React from 'react';
import NavBar from './NavBar';

const Header = ({ title }) => {
  return (
    <div className="Header">
      <h1>{title}</h1>
      <NavBar />
    </div>
  );
};

export default Header;
