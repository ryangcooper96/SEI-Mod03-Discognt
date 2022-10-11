import React from 'react';
import { NavLink } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import './NavBar.css';

const NavBar = () => {
  const { handleLogout, user } = useUser()

  let nav = user ?
    <>
      <span className='NavBar-logo'>Discogn't</span> 
      <div>
      <NavLink to='/dashboard' className='NavBar-link'>Protected Route</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='' className='NavBar-link' onClick={handleLogout}>LOG OUT</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {user.name}</span>
      </div>
    </>
    :
      <>
      <NavLink to='/' className='NavBar-link'><span className='NavBar-logo'>Discogn't</span></NavLink>
      
      <div>
      <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
      </div>
      </>
    ;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;