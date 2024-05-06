import React, { useState } from 'react'
import './Navbar.css'

function Navbar(props) {
    const[value,setValue]=useState('')

    function handleChange(e){
        const newValue = e.target.value;
        setValue(newValue);
        props.setSearchValue(newValue); 
        console.log(e.target.value) 
    }

    return (
        <nav className='Navbar'>
            <div className="logo">
                <b>Album Gallry</b>
            </div>
            <div className="menubar">
                <input type="text" value={value} placeholder='Search' onChange={handleChange} />
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
