import React from 'react'
import { useEffect, useState } from 'react'

function Images(props) {
    const [data, setData] = useState([])
    const [size,setSize] = useState('')

    function fetchData() {
      fetch(`https://api.pexels.com/v1/search?query=${props.searchValue}&orientation=landscape&per_page=15`, {
        headers: {
          Authorization: 'xJ6bkTW7nxwt89RDvbpf1AXkYMv659VdPMInH2DumVaMZHSqGN0zfwKR'
        }
      })
        .then(response => response.json())
        .then(result => setData(result.photos))
  
    }
    useEffect(() => {
      fetchData()
    }, [props.searchValue])
    console.log(data)

    function ToggleImage(){
        setSize(size==='30%'? '100%': '30%')
    }
  
    return (
      <>
        {/* <h1>Album Gallry</h1> */}
        <div className="img-container">
          {data.map((item) =>
            <div className="img-card">
              <img onClick={ToggleImage} style={{width:size}} key={item.id} src={item.src.original} alt={item.photographer} />
            </div>
          )}
        </div>
      </>
    )
  }

export default Images
