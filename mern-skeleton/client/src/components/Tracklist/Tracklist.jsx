import React from 'react'
import { useState } from 'react'
import "./Tracklist.css"

function Tracklist({ tracklist }) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <>
    { open ? 
    <div className='Tracklist open' onClick={handleClick}>
        <h2>Tracklist</h2>
        <table className='Tracklist-table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Song</th>
                <th className='duration'>Duration</th>
            </tr>
        </thead>
        <tbody>
            {tracklist.map((track) => (
            <tr key={track.position}>
                <td>{track.position}</td>
                <td>{track.title}</td>
                <td>{track.duration}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </div>
    :
    <div className='Tracklist closed' onClick={handleClick}><h2>Tracklist</h2></div>
    }
    </>
  )
}

export default Tracklist