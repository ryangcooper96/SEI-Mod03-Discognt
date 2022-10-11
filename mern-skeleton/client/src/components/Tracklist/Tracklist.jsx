import React from 'react'
import { useState } from 'react'
import "./Tracklist.css"

function Tracklist() {

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
            <tr>
                <td>#</td>
                <td>Song</td>
                <td className='duration'>0:00</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Song</td>
                <td className='duration'>0:00</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Song</td>
                <td className='duration'>0:00</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Song</td>
                <td className='duration'>0:00</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Song</td>
                <td className='duration'>0:00</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Song</td>
                <td className='duration'>0:00</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Song</td>
                <td className='duration'>0:00</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Song</td>
                <td className='duration'>0:00</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Song</td>
                <td className='duration'>0:00</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Song</td>
                <td className='duration'>0:00</td>
            </tr>
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