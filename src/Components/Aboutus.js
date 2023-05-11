import React from 'react'
import circle from '../images/Circle.jpg'

const Aboutus = () => {
  return (
   <section className='aboutUs-container'>
    <div className='aboutUs-content'>
        <div className='about-picture'> <img src={circle} alt='circle'/></div>
        <div className='about-right'>
            <h6>About us</h6>
            <h2>We target the audience with our ideas</h2>
            <p>Our friendly team members are always willing to help you understand your present technology requirements and provide suggestions on your future needs.<br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pellentesque parturient ultrices suspendisse vestibulum. Habitasse quam faucibus
            </p>
            <button className='btn'>Learn More</button>
        </div>
    </div>
    
   </section>
  )
}

export default Aboutus