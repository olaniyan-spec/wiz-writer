import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='nav-container'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <ul className='nav-links'>
                <li><NavLink to='/Home' className='home'>Home</NavLink></li>
                <li><NavLink to='/About' className='about'>About us</NavLink></li>
                <li><NavLink to='/Service' className='service'>Service</NavLink></li>
                <li><NavLink to='/Pricing' className='pricing'>Pricing</NavLink></li>

            </ul>
            <button className='btn'> Sign up</button>
        </div>



    </nav>
  )
}

export default Navbar