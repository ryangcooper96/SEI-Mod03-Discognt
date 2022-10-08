import React from 'react'

import {NavLink, Route, Routes} from 'react-router-dom'
import Billing from './Billing/Billing'

import Listings from './Listings/Listings'
import Security from './Security/Security'

function Dashboard() {
  return (
    <div>
      Dashboard

      <div className='sidebar-wrapper'>sidebar 
        <NavLink to='/dashboard/listings'>Listings</NavLink>
        <NavLink to='/dashboard/security'>Account Security</NavLink>
        <NavLink to='/dashboard/billing'>Billing Details</NavLink></div>
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