import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionOuter = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  width: 100vw;
  background: ${props => `url(${props.backgroundImg}) repeat center center fixed`};
`;

const SectionInner = styled.div`
  position: relative;
  background: ${props => props.backgroundColor};
  height: 85vh;
  width: 85vw;
  margin: auto;
  top: 7.5vh;
`;

const ChildrenWrapper = styled.div`
  padding: 15%;
`;

const Section = ({ backgroundColor, backgroundImg, children }) => {
  return (
    <SectionOuter backgroundColor={backgroundColor} backgroundImg={backgroundImg}>
      <SectionInner backgroundColor={backgroundColor}>
        <ChildrenWrapper>
          {children}
        </ChildrenWrapper>
      </SectionInner>
    </SectionOuter>
  )
}

Section.defaultProps = {
  backgroundColor: '#FFF'
};

Section.propTypes = {
  backgroundColor: PropTypes.string
}


export default Section;