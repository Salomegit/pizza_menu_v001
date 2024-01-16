import React from 'react'
import "../styles/index.css"

const Pizza = (props) => {


  return (
    <li className='pizza'>
      <img src={props.pizzaObj.image} alt='pizaa '/>
      <div>

       <h3>{props.pizzaObj.name}</h3>
       <p>{props.pizzaObj.ingredients}</p>
       <span>{props.pizzaObj.price}</span>
      </div>

    </li>
  )
}

export default Pizza
