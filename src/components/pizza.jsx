import React from 'react'
import "../styles/index.css"

const Pizza = () => {


  return (
    <div className='pizza'>
      <img src={pizza_data[0].image} alt='pizaa '/>
      <div>

       <h3>{pizza_data[0].name}</h3>
       <p>{pizza_data[0].ingredients}</p>
       <span>{pizza_data[0].price}</span>
      </div>

    </div>
  )
}

export default Pizza
