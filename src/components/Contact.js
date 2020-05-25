import React from 'react';
import Section from './Section';
import bg from '../../static/contact-bg.jpg';
import { Github, Linkedin, Twitter } from '@styled-icons/feather';

const Contact = () => {
  return (
    <Section backgroundColor='#F4FFFE' backgroundImg={bg}>
      <p><a target='_blank' rel="noreferrer" href='https://github.com/dianalease'><Github size={24}/></a></p>
      <p><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/dianalease/'><Linkedin size={24}/></a></p>
      <p><a target='_blank' rel="noreferrer" href='https://twitter.com/DianaDelirious'><Twitter size={24}/></a></p>
    </Section>
  )
}

export default Contact;