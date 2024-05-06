import React, { useState } from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

function Navbar(props) {
    const [value, setValue] = useState('')

    function handleChange(e) {
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
                    {/* <Router>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                        </Routes>
                    </Router>
                    <li><Link to="/">Home</Link></li> */}
                    <li>About</li>
                    <li>Service</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
