import React from 'react'
import "../styles/index.css"

const Pizza = () => {

  const pizza_data = {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
  }
  return (
    <div>
      <img src='https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pizaa '/>
       <h3>{pizza_data.name}</h3>
       <p>{pizza_data.ingredients}</p>

    </div>
  )
}

export default Pizza
