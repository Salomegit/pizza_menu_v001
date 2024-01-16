import React from 'react'
import "../styles/index.css"


const Footer = () => {
  const hour = new Date().getHours()
  console.log(hour)

  const NewFunction = () => {

  
    if (hour => 12 &&  hour <= 22) {
      alert("We are open")
      
    }
    else{
      alert("We are currenly closed");
    }
  }


  return (


    <div>

      <div>



  </div>
    </div>
  )
}

export default Footer