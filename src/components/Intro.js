import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import me from '../../static/me.jpg';
import { Github, Linkedin, Twitter } from '@styled-icons/feather';

const CircleImage = styled.img`
  border-radius: 50%;
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 25rem;
  @media (max-width: 850px), (max-height: 600px) {
    width: 55.5%;
  }
`;

const Intro = () => {
  return (
    <Section outerBackgroundColor1='#540D6E' outerBackgroundColor2='#C276BF'>
      <h1>Hi, I'm Diana Lease.</h1>
      <h2>I write code.</h2>
      <div>
      <p><a target='_blank' rel="noreferrer" href='https://github.com/dianalease'><Github size={24}/></a></p>
      <p><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/dianalease/'><Linkedin size={24}/></a></p>
      <p><a target='_blank' rel="noreferrer" href='https://twitter.com/DianaDelirious'><Twitter size={24}/></a></p>
      </div>
      <CircleImage src={me} alt='Diana Lease' />
    </Section>
  )
}

export default Intro;