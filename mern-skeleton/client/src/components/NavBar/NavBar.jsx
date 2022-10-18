import React from 'react';
import { NavLink } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import './NavBar.css';

const NavBar = () => {
  const { handleLogout, user } = useUser()

  let nav = user ?
    <div className='NavBar'>
      <NavLink to='/' className='NavBar-link'><span className='NavBar-logo'>Discogn't</span></NavLink>
      {/* <div> */}
        <div>

          <NavLink to='/artists' className='NavBar-link'>ARTISTS</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <NavLink to='/marketplace' className='NavBar-link'>MARKETPLACE</NavLink>
        </div>
        <div>
        <NavLink to='/dashboard' className='NavBar-link'>DASHBOARD</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <NavLink to='' className='NavBar-link' onClick={handleLogout}>LOG OUT</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <span className='NavBar-welcome'>Welcome, {user.name}</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <NavLink to='/basket' className='NavBar-link' ><span className="material-symbols-outlined">shopping_cart</span></NavLink>
        </div>
      {/* </div> */}
    </div>
    :
    <div className='NavBar'>
      <NavLink to='/' className='NavBar-link'><span className='NavBar-logo'>Discogn't</span></NavLink>
      <div>
        <NavLink to='/artists' className='NavBar-link'>ARTISTS</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <NavLink to='/marketplace' className='NavBar-link'>MARKETPLACE</NavLink>
      </div>
      <div>
        <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <NavLink to='/basket' className='NavBar-link' ><span className="material-symbols-outlined">shopping_cart</span></NavLink>
      </div>
    </div>
    ;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;