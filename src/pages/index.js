import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Experience from '../components/Experience';

const Wrapper = styled.div`
    overflow: scroll;
    height: 100vh;
`;

export default function Home() {
  return (
    <Layout theme='light'>
      <Wrapper>
        <Intro id='intro' />
        <Experience id='experience' />
      </Wrapper>
    </Layout>
  )
}
