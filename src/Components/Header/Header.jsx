import React from 'react'
import './Header.css'
import  logo from '../../assets/logo.png'
export const Header = () => {
  return (
    <div className="Header">

        <img src={logo} alt='' className='logo'/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
        </ul>
    </div>
  )

}

export default Header