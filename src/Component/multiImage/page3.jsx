import React from 'react'
import { useEffect, useState } from 'react'


function Page3() {
    const [data, setData] = useState([])

    function fetchData() {
      fetch("https://api.pexels.com/v1/search?query=Nature&orientation=landscape&per_page=20", {
        headers: {
          Authorization: 'xJ6bkTW7nxwt89RDvbpf1AXkYMv659VdPMInH2DumVaMZHSqGN0zfwKR'
        }
      })
        .then(response => response.json())
        .then(result => setData(result.photos))
  
    }
    useEffect(() => {
      fetchData()
    }, [])
    console.log(data)
  return (
    <>
    {/* <h1>Album Gallry</h1> */}
    <div className="img-container">
      {data.map((item) =>
        <div className="img-card">
          <img key={item.id} src={item.src.original} alt={item.photographer} />
        </div>
      )}
    </div>
  </>
  )
}

export default Page3
