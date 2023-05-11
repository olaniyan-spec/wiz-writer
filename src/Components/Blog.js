import React from 'react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'


const Blog = () => {
   
  return (
    <section className='blog-container'>
        <div className='blog-wrapper'>
            <div className='blog-header'>
                <h6>Our blog</h6>
                <h2>Read our news, comments and thoughts</h2>
            </div>
            <div className='blog-image'>
                <img src={image3} alt='blog1'/>
                <h2>Introducing WizWriter</h2>
                <h5> 25th April, 2023</h5>
                <p>Lorem ipsum dolor sit amet, consectetur sing to  sed do eiusmod tempor incididunt ut labore  dolore magna aliqua dolor.</p>
            </div>
            <div className='blog-image2'>
                <img src={image1} alt='blog1'/>
                <h2>What is Content Creating</h2>
                <h5> 25th April, 2023</h5>
                <p>Lorem ipsum dolor sit amet, consectetur sing to  sed do eiusmod tempor incididunt ut labore  dolore magna aliqua dolor.</p>
                <button>View more</button>
            </div>
            <div className='blog-image3'>
                <img src={image2} alt='blog1'/>
                <h2>How to Create Content</h2>
                <h5> 25th April, 2023</h5>
                <p>Lorem ipsum dolor sit amet, consectetur sing to  sed do eiusmod tempor incididunt ut labore  dolore magna aliqua dolor.</p>
            </div>
        </div>
    </section>
  )
}

export default Blog