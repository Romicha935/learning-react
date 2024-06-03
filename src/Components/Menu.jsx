
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <div>
      <ul>
        <li><NavLink className={({isActive}) => isActive? "active-item": "pending-item"} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive? "active-item": "pending-item"} to="/profile/romicha/parvin">Profile</NavLink></li>
        <li><NavLink className={({isActive}) => isActive? "active-item": "pending-item"} to="/product/10/Soap">Product</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu