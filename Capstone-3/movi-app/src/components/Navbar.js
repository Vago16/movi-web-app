import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul className='row'>
      
				<Link to="/" >Home</Link>
				<Link to="/login" >Dashboard</Link>
			
      </ul>
    </div>
  )
}

export default Navbar;
