import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from './Header';
import Helment from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  body {
    font-family: 'PT Sans', 'Noto Sans KR', sans-serif;
  }
  *:focus {
    outline: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  };
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 24px;
`;

const Layout = ({ children }: LayoutProps) => (
  <>
    <Helment>
      <meta property='og:title' content={ `TIN WOODMAN :: Tin Woodman's bildungsroman blog` } />
      <meta
        property='og:description'
        content={ 'A Blog For tech, IT, Computer Engineering, Web and React.' }
      />
      <meta
        name='keywords'
        content='IT, computer science, web, react, nodejs, engineering, programming, development'
      />
      <meta property='og:image' content='/tinamn.jpg' />
    </Helment>
    <GlobalStyle />
    <Header />
    <Wrapper>
      { children }
    </Wrapper>
  </>
);

export default Layout;
