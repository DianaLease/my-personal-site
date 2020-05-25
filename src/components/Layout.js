import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import 'typeface-asap';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === 'light' ? '#000' : '#FFF')};
    font-family: 'Asap', sans-serif;
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }
  a {
    font-style: italic;
    text-decoration: none;
    color: #2F94F7;
  }
  p {
    font-weight: 100;
  }
  h1, h2, h3, h4 {
    font-weight: 500;
  }
`
const Layout = ({ theme, children }) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
    </>
  )
}

Layout.defaultProps = {
  theme: 'light'
};

Layout.propTypes = {
  theme: PropTypes.string
}

export default Layout;