import React from 'react'
import "../styles/index.css"


const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 12
  const closehour = 20
  const condition = hour >= 9 && hour <= 20
  console.log(condition)


  return (

<footer className='footer'>
  <div className='order'>
   { hour < openHour ?



   
   <p> We are open until {closehour}:00 hours</p> : <p>We are still working on our menu</p>

  } 
  <button className='btn'>
   Order
    </button> 
   </div>
</footer>



  )
}

export default Footer