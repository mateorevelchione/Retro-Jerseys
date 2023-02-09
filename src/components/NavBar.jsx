import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div>
      <h1>Retro Jerseys</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget/>
    </div>
  )
}

export default NavBar;