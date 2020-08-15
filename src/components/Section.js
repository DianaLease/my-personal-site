import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionOuter = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => (`linear-gradient(${props.backgroundColor1}, ${props.backgroundColor2})`)};
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

const Section = ({ outerBackgroundColor1, outerBackgroundColor2, innerBackgroundColor, children }) => {
  return (
    <SectionOuter backgroundColor1={outerBackgroundColor1} backgroundColor2={outerBackgroundColor2}>
      <SectionInner backgroundColor={innerBackgroundColor}>
        <ChildrenWrapper>
          {children}
        </ChildrenWrapper>
      </SectionInner>
    </SectionOuter>
  )
}

Section.defaultProps = {
  outerBackgroundColor1: '#FFF',
  outerBackgroundColor2: '#FFF',
  innerBackgroundColor: '#FFF'
};

Section.propTypes = {
  innerBackgroundColor: PropTypes.string,
  outerBackgroundColor1: PropTypes.string,
  outerBackgroundColor2: PropTypes.string
}


export default Section;