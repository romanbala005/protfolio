import React from 'react'
import { Image } from 'semantic-ui-react'
import "./home.css"

function Home() {
  return (
    <div className='ShowProfile'>
      <div className='ShowContent'>
        <span className='Content'>Hi 👋,</span>
        <span className='Content'>My self</span>
        <span className='ContentName'>Balasubramani A</span>
        <span className='Content'>I build things for web</span>
      </div>
      <div className="image-container">
        <Image src='kavi.jpg' size='large' circular className="custom-image" />
      </div>
    </div>
  )
}

export default Home