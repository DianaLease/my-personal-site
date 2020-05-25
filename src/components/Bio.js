import React from 'react';
import Section from './Section';
import bg from '../../static/bio-bg.jpg';

const Bio = () => {
  return (
    <Section backgroundColor='#F4FFFE' backgroundImg={bg}>
      <h2>I write code.</h2>
    </Section>
  )
}

export default Bio;