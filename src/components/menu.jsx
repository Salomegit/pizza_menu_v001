import React from 'react'
import Pizza from './pizza'
import "../styles/index.css"

const pizza_data = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    image:"https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=600",
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    image:"https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600",
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    image:"https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=600",

    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    image:"https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=600",
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    image:"https://images.pexels.com/photos/2180875/pexels-photo-2180875.jpeg?auto=compress&cs=tinysrgb&w=600",
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    image:"https://images.pexels.com/photos/166451/pexels-photo-166451.jpeg?auto=compress&cs=tinysrgb&w=600",
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {

  const pizzaNew = pizza_data 
  const num_pizza = pizzaNew.length
  return (
    
    
    <main className='menu'>
      <h2>Our Menu</h2>

    { num_pizza > 0 ?  (
      <ul className='pizzas'>
        {pizzaNew.map((pizza)=><Pizza pizzaObj={pizza} key={pizza.name}/>)}
        
        
      </ul>
      
    ): (<p>
      We are still working on the menu
    </p>)
    }

    </main>

)
}


export default Menu
