import React from 'react'
import { useLocation } from 'react-router-dom'
import "./BreadCrumbs.css"

function BreadCrumbs() {

  const location = useLocation();
  const crumbs = (location.pathname.split('/').filter((crumb) => (crumb !== '')).map((crumb) => (crumb[0].toUpperCase()+crumb.slice(1))))
  console.log(crumbs)
  

  return (
    <div className='BreadCrumbs'>{crumbs.map((crumb) => (<><span> &gt; </span><span>{crumb}</span></>))}</div>
  )
}

export default BreadCrumbs