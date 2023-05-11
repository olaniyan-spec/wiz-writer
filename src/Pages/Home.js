import React from 'react'
import Rectangle from '../Components/Rectangle'
import './Home.css'
import Welcome from '../Components/Welcome'
import Aboutus from '../Components/Aboutus'
import Services from '../Components/Services'
import Success from '../Components/Success'
import Boss from '../Components/Boss'
import Blog from '../Components/Blog'
import Partners from '../Components/Partners'
import Newsletter from '../Components/Newsletter'
const Home = () => {
  return (
    <div>
        <Rectangle/>
        <Welcome/>
        <Aboutus/>
        <Services/>
        <Success/>
        <Boss/>
        <Blog/>
        <Partners/>
        <Newsletter/>
    </div>
  )
}

export default Home