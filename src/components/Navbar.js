import React from 'react';
import { GiEarthAmerica } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className="navbar">
      <GiEarthAmerica fontSize="28px" />
      <h1 className="nav-title">my travel journal.</h1>
    </nav>
  );
};

export default Navbar;
