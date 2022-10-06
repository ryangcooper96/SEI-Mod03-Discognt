import React, { useState } from 'react'
import "./FilterBar.css"

function FilterBar() {
    const [open, setOpen] = useState(false)
    const filters = ["Techno", "Rock", "Hip-Hop", "Pop", "Blah", "Blah Blah"]

    const handleClick = () => {setOpen(!open)}

  return (
    <div className='FilterBar'>
        <button className='open' onClick={handleClick}><span className="material-symbols-outlined">{open ? "filter_list" : "filter_list_off"}</span></button>
        {open ? <></> : <select className="FilterBar-options">{filters.map((filter) => {return <option className='FilterBar-option'>{filter}</option>})}</select>}
    </div>
  )
}

export default FilterBar