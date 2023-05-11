import React from 'react'


const Welcom = (props) => {
  return (
    <div className='welcom'>
        <img src={props.logo} alt={props.name}/>
        <h2>{props.title}</h2>
        <small>{props.desc}</small>
   </div> 
  )
}

export default Welcom