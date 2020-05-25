import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import me from '../../static/me.jpg';
import bg from '../../static/intro-bg.jpg';

const CircleImage = styled.img`
  border-radius: 50%;
  float: right;
  width: 300px;
  @media (max-width: 500px) {
    margin: auto;
    float: none;
    width: 100%;
  }
`;

const Intro = () => {
  return (
    <Section backgroundImg={bg} backgroundColor='#FCF6FF'>
      <h1>Hi, I'm Diana Lease.</h1>
      <CircleImage src={me} alt='Diana Lease' />
    </Section>
  )
}

export default Intro;