import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Bio from '../components/Bio';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const SnapScrollDiv = styled.div`
    scroll-snap-type: y mandatory;
    overflow: scroll;
    height: 100vh;
`;

export default function Home() {
  return (
    <Layout theme='light'>
      <SnapScrollDiv>
        <Intro id='intro' />
        <Bio id='bio' />
        <Experience id='experience' />
        {/* <Technologies id='technologies' />
        <Hobbies id='hobbies' /> */}
        <Contact id='contact' />
      </SnapScrollDiv>
    </Layout>
  )
}
