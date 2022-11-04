import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="root">{element}</div>
    </ThemeProvider>
  );
};

export default wrapRootElement;
