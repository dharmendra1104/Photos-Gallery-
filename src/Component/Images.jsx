import React from 'react'
import { useEffect, useState } from 'react'
import './images.css'

function Images() {
    const [count, setCount] = useState([])

    function fetchData() {
      fetch("https://api.pexels.com/v1/search?query=Developer&orientation=landscape&per_page=30", {
        headers: {
          Authorization: 'xJ6bkTW7nxwt89RDvbpf1AXkYMv659VdPMInH2DumVaMZHSqGN0zfwKR'
        }
      })
        .then(response => response.json())
        .then(result => setCount(result.photos))
  
    }
    useEffect(() => {
      fetchData()
    }, [])
    console.log(count)
  
    return (
      <>
        {/* <h1>Album Gallry</h1> */}
        <div className="img-container">
          {count.map((item) =>
            <div className="img-card">
              <img key={item.id} src={item.src.original} alt={item.photographer} />
            </div>
          )}
        </div>
      </>
    )
  }

export default Images
