import './App.css'
import Images from './Component/Images'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Page1 from './Component/multiImage/Page1'
import Page2 from './Component/multiImage/Page2'
import Page3 from './Component/multiImage/Page3'
import Page4 from './Component/multiImage/Page4'
import Navbar from './Component/Navbar'
import { useState } from 'react'

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Navbar setSearchValue={setSearchValue}/>
      {/* /<Images/> */}
      {/* <Page1/>
      <div className="buttons">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div> } */}
      <Router>
        <Routes>
          <Route path='/' element={<Images contentvalue={searchValue}/>}/>
          <Route path='/page1' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
          <Route path='/page3' element={<Page3/>}/>
          <Route path='/page4' element={<Page4 />}/>
        </Routes>
        <div className="buttons">
          <ul>
            <li><Link to="/page1">1</Link></li>
            <li><Link to="/page2">2</Link></li>
            <li><Link to="/page3">3</Link></li>
            <li><Link to="/page4">4</Link></li>
          </ul>
        </div>
      </Router>
    </>
  )
}

export default App

