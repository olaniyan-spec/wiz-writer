import React from 'react'
import image from '../images/vector3.jpg'
import image1 from '../images/vector4.jpg'

const Boss = () => {
  return (
    <section className='boss-section'>
        <div className='boss-container'>
            <div className='boss-content'>
                <div className='avater'></div>
                <div className='icon-right'>
                    <img src={image} alt='icon'/>
                </div>
                <div className='icon-two'><img src={image1} alt='icon1'/></div>
                <div className='mid-content'>
                    <h2>Azeez Taiwo</h2>
                    <h3>Head of Marketing.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis placerat quis porttitor donec. In iaculis cursus congue vitae in ultrice consecter dipdicing elit</p>

                </div>
                
            </div>
        </div>
        <div className='small-circle'></div>
        <div className='small-circle2'></div>
        <div className='small-circle3'></div>
    </section>
  )
}

export default Boss