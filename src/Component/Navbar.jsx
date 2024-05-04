import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <nav className='Navbar'>
            <div className="logo">
                <b>Album Gallry</b>
            </div>
            <div className="menubar">
                <input type="text" placeholder='Search' />
                <ul className='menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
