import React from 'react'
import { Item } from 'semantic-ui-react'
import './about.css'

function About() {
  return (
    <Item.Group className='aboutGroup'>
      <Item>
        <Item.Content>
          <span className='ContentTitle'>About  Me</span>
          <p>
            Hi there! I'm Kaviyarasu, a passionate and creative software engineer with a strong background in web development.
            I specialize in building modern and responsive web applications using cutting-edge technologies. My journey in the world of coding started several years ago when I fell in love with the power of turning ideas into functional and visually appealing websites.
            My skill set includes proficiency in JavaScript, React, Node.js, and various front-end and back-end technologies. I'm dedicated to continuous learning and staying up-to-date with the latest trends in the tech industry.
          </p>
        </Item.Content>
      </Item>

      <Item>
        <Item.Content>
          <span className='ContentTitle'>Work Experience</span>
          <p>
            Front-End Developer at TechCo
            Position: Front-End Developer
            Duration: June 2020 - Present
            Description:
            - Collaborated with a cross-functional team to build and maintain modern, responsive web applications using React.
            - Implemented user interfaces, optimized performance, and contributed to design discussions.
          </p>
        </Item.Content>
      </Item>

      <Item>
        <Item.Content>
          <span className='ContentTitle'>Education</span>
          <p>
            Bachelor of Science in Computer Science
            University of XYZ
            Graduated: May 2021

            - Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering

            Online Web Development Bootcamp
            Coding Academy
            Completed: November 2018

            - Acquired practical skills in HTML, CSS, JavaScript, and React.
            - Developed real-world projects and collaborated with peers on coding challenges.
            ...
          </p>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default About