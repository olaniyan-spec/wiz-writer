import React from 'react'
import Card from './Card'

const Blogger = (props) => {
  return (
    <Card className='blogger-container'>
        <div className='blogger-content'>
            {props.image}
            <h2>{props.title}</h2>
            <h6>{props.date}</h6>
            <p>{props.desc}</p>
        </div>
        
    </Card>

  )
}

export default Blogger