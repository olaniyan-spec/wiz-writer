import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import facebook from '../images/facebook (1).jpg'
import twitter from '../images/twitter.jpg'
import insta from '../images/insta.jpg'
const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='footer-content'>
            <Link to='/' className='logo'><img src={logo} alt='logo'/></Link>
            <p>WizWriter - let's you create curating irresistable and Nourishing Content.</p>
            <div className='footer-socials'>
                <a href='https://facebook.com/' target='_blank' rel='noreferrer noopener' className='social1'><img src={facebook} alt='facebook'/></a>
                <a href='https://twitter.com/@TofunmiOlaniyan' target='_blank' rel='noreferrer noopener' className='social2'><img src={twitter} alt='twitter'/></a>
                <a href='https://instagram.com/tofunmi_olaniyan' target='_blank' rel='noreferrer noopener' className='social3'><img src={insta} alt='insta'/></a>
            </div>
            <article className='article'>
            <Link to='/Menu' className='menu'>Menu</Link>
            <Link to='/Home' className='home'>Home</Link>
            <Link to='/FAQS' className='faqs'>FAQs</Link>
            <Link to='/Blog' className='blog'>Blog</Link>
        </article>
        <article className='article'>
            <Link to='/Services' className='services'>Services</Link>
            <Link to='/Market' className='market'>Market</Link>
            <Link to='/Partners' className='partners'>Partners</Link>
            <Link to='/Sign up' className='sign'>Sign up</Link>
            <Link to='/Log in' className='log'>Log in</Link>
        </article>
        <article className='article'>
            <Link to='/Services' className='further'>Further Information</Link>
            <Link to='/Market' className='terms'>Terms and Condition</Link>
            <Link to='/Partners' className='privacy'>Privacy Policy</Link>
        </article>
        </div>
        <div className='footer-copyright'>
            <p>2023 WizWriter &copy; All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer