import React, { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
 
function Shop() {
  const [items, setItems] = useState([]);

    useEffect(() => {
        Zawardu();
    }, [])

  const Zawardu = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
      const items = await data.json()
      console.log(items);
      setItems(items)
  }

  return (
    <div style={{"text-align": "center"}}>
      {items.map(item => (
          <div className="card" key={item.title}>
            <h1>{item.title}</h1>
            <img src={item.thumbnailUrl} alt="title" />
            <Link to={`/shop/${item.url.substring(item.url.lastIndexOf('/') + 1)}`}><button>Buy now</button></Link>
          </div>
      ))}
    </div>
  )
}

export default Shop
