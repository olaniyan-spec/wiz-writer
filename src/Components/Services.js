import React from 'react'
import vector from '../images/Vector.jpg'
import vector1 from '../images/vector2.jpg'
const Services = () => {
  return (
    <section className='services'>
        <div className='services-left'>
            <h5>Our Services</h5>
            <h3>We are a full service<br/> Creative agency</h3>
        </div>
        <div className='service-card'>
            <div className='first-card'> 
            <div className='icon'><img src={vector} alt='vector'/></div>
            <h2>Email Marketing</h2>
            <p>We offer emailing marketing writing <br/>services that excellently captures your<br/> brand voice and use language that <br/> best appeals to your target audience</p>
            </div>
            <div className='second-card'> 
                <div className='icon'><img src={vector} alt='vector'/></div>
                <h2>Product Description</h2>
                <p>We offer emailing marketing writing <br/>services that excellently captures your<br/> brand voice and use language that <br/> best appeals to your target audience</p>
            </div>
            <div className='card'>
            <div className='icon'><img src={vector1} alt='vector'/></div>
                <h2>Web/ Mobile Content</h2>
                <p>We offer emailing marketing writing<br/>services that excellently captures your<br/> brand voice and use language that <br/> best appeals to your target audience</p>
            </div>
            <div className='card2'>
            <div className='icon'><img src={vector} alt='vector'/></div>
                <h2>Email Marketing</h2>
                <p>We offer emailing marketing writing<br/>services that excellently captures your<br/> brand voice and use language that <br/> best appeals to your target audience</p>
            </div>
            <div className='card3'>
            <div className='icon'><img src={vector} alt='vector'/></div>
                <h2>Product Description</h2>
                <p>We offer emailing marketing writing<br/>services that excellently captures your<br/> brand voice and use language that <br/> best appeals to your target audience</p>
            </div>
        </div>
    </section>
  )
}

export default Services