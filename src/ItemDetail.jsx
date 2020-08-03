import React, { useState, useEffect } from 'react'
import './App.css'

function ItemDetail({ match }) {
  const [items, setItems] = useState();
  const [id, setID] = useState("");

    useEffect(() => {
        setID(match.params.id)
    }, [])

  // const Zawardu = async () => {
  //     const data = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
  //     const items = await data.json()
  //     setItems(items)
  // }

  return (
    <div style={{"text-align": "center"}}>
      <h1>Item with ID: {id} has been baught</h1>
    </div>
  )
}

export default ItemDetail
