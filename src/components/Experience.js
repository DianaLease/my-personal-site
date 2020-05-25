import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import { ArrowRightCircle } from '@styled-icons/feather';
import bg from '../../static/exp-bg.jpg';

const Spacer = styled.div`
  height: 15px;
`;

const Experience = () => {
  return (
    <Section backgroundColor='#FCF6FF' backgroundImg={bg}>
      <h2>Lead Front-End Engineer - Clause</h2>
      <p>I lead the front-end effort at a legal tech startup building a web app for creating and managing smart legal contracts.</p>
      <p><a target='_blank' rel="noreferrer" href='https://clause.io/'>Check out Clause <ArrowRightCircle size={16}/></a></p>
      <Spacer />
      <h2>Maintainer - Accord Project</h2>
      <p>I work on a set of open source React components used for drafting and editing contracts. This involves collaborating with the open source community, attending weekly working group calls, reviewing pull requests, as well as contributing to the project myself.</p>
      <p><a target='_blank' rel="noreferrer" href='https://www.accordproject.org/'>Explore Accord Project <ArrowRightCircle size={16}/></a></p>
    </Section>
  )
}

export default Experience;