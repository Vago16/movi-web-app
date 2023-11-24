import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul class='navbar'>
      
				<a><Link to="/" >Home</Link></a>
				<a><Link to="/login" >Dashboard</Link></a>
			
      </ul>
    </div>
  )
}

export default Navbar;
