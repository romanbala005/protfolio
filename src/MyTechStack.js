import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import "./myTechStack.css"

function MyTechStack() {
  const iconNames = {
    firstRow: ['html5', 'css3 alternate', 'js', 'react'],
    secondRow: ['npm', 'less', 'node', 'github']
  }
  return (
    <div className='myTechStack'>
      <h1>My Tech Stack</h1>
      <span>Technologies I've been working with recently</span>
      <div className='myTechStackGrid'>
        <Grid>
          <Grid.Row columns={4}>
            {
              iconNames.firstRow.map((e) => (
                <Grid.Column>
                  <Icon name={e} size='massive' />
                </Grid.Column>
              ))
            }
          </Grid.Row>
          <Grid.Row columns={4}>
            {
              iconNames.secondRow.map((e) => (
                <Grid.Column>
                  <Icon name={e} size='massive' />
                </Grid.Column>
              ))
            }
          </Grid.Row>
        </Grid>
      </div>
    </div >
  )
}

export default MyTechStack