import React from 'react'
import logo1 from '../images/Grazac.jpg'
import logo2 from '../images/DorakMedia.jpg'
import logo3 from '../images/wiz.jpg'
import logo4 from '../images/Crystal.jpg'
import logo5 from '../images/Jaysub.jpg'

const Partners = () => {
  return (
   <section className='partner-container'>
    <div className='section-header'>Partners</div>
    <div className='partners-logo1'>
        <img src={logo1} alt='logo1'></img>
    </div>
    <div className='partners-logo2'>
        <img src={logo2} alt='logo1'></img>
    </div>
    <div className='partners-logo3'>
        <img src={logo3} alt='logo1'></img>
    </div>
    <div className='partners-logo4'>
        <img src={logo4} alt='logo1'></img>
    </div>
    <div className='partners-logo5'>
        <img src={logo5} alt='logo1'></img>
    </div>
   </section>
  )
}

export default Partners