import React from 'react'

import {NavLink, Route, Routes} from 'react-router-dom'
import Billing from './Billing/Billing'

import Listings from './Listings/Listings'
import Security from './Security/Security'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard-wrapper'>
      

      <div className='sidebar-wrapper'><h3>Dashboard</h3>
        <NavLink to='/dashboard/listings' className='panel-link'>Listings</NavLink>
        <NavLink to='/dashboard/security' className='panel-link'>Account Security</NavLink>
        <NavLink to='/dashboard/billing' className='panel-link'>Billing Details</NavLink></div>
      <div className='panel-wrapper'>
        <Routes>
        <Route path='/listings' element={<Listings/>}/>
        <Route path='/security' element={<Security/>}/>
        <Route path ='/billing' element={<Billing/>}/>
        </Routes>
        </div>
    </div>
  )
}

export default Dashboard