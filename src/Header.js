import React from 'react'
import { Icon, Image } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
import "./header.css"

function Header() {
  const history = useHistory();
  return (
    <div className='header'>
      <Image src='reactwallpapers.png' size='tiny' />
      <div className='headerparts'>
        <div className='title'>
          <h4
            className='titleContent'
            onClick={() => history.push('/')}
          >
            Home
          </h4>
          <h4
            className='titleContent'
            onClick={() => history.push('/a')}
          >
            About
          </h4>
          <h4
            className='titleContent'
            onClick={() => history.push('/b')}
          >
            Tech Stack
          </h4>
          <h4
            className='titleContent'
            onClick={() => history.push('/c')}
          >
            Project
          </h4>
          <h4
            className='titleContent'
            onClick={() => history.push('/d')}
          >
            Contact
          </h4>
        </div>
        <div className='icons'>
          <Icon name="github" />
          <Icon name="twitter" />
          <Icon name="linkedin" />
        </div>
      </div>
    </div>
  )
}

export default Header