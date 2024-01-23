import React from 'react'
import "../styles/index.css"

const Pizza = ({pizzaObj}) => {


  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.image} alt='pizaa '/>

       <h3>{pizzaObj.name}</h3>
       <p>{pizzaObj.ingredients}</p>



       <span>{pizzaObj.soldOut? "Pizza is soldout" :pizzaObj.price}</span>

    </li>
  )
}

export default Pizza
