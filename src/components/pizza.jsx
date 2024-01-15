import React from 'react'
import "../styles/index.css"

const Pizza = (props) => {


  return (
    <div className='pizza'>
      <img src="" alt='pizaa '/>
      <div>

       <h3>{props.name}</h3>
       {/* <p>{pizza_data[0].ingredients}</p>
       <span>{pizza_data[0].price}</span> */}
      </div>

    </div>
  )
}

export default Pizza
