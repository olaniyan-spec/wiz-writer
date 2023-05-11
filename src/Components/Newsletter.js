import React from 'react'

const Newsletter = () => {
  return (
    <section className='news-container'>
        <div className='news-wrapper'>
            <div className='news-content'>
            <h2>Sign up for our newsletter</h2>
            <p>Be up-to-date about our services. Have access to exclusive deals and offers<br/>With insight into the current state of the market.</p>
            <input className='btn-lg' placeholder='Enter Email'/><button className='btn-sm'>Subscribe</button>
            </div>
        
        </div>
    </section>
  )
}

export default Newsletter