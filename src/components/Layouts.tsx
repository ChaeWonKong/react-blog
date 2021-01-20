import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Helment from 'react-helmet';
import reset from 'styled-reset';

interface LayoutProps {
  children: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  body {
    font-family: 'PT Sans', 'Noto Sans KR', sans-serif;
    line-height: 1.8;
  }
  *:focus {
    outline: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }
  a {
    /* text-decoration: none; */
    cursor: pointer;
    color: inherit;
    transition: .1s ease-in-out;
    :hover {
      color: #ababab;
    }
  };
  h1 {
    font-size: 24px;
    line-height: 2;
    font-weight: bold;
  }

  h2 {
    font-size: 22px;
    line-height: 2;
    margin-top: 20px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    line-height:2;
    margin-top: 16px;
  }

  p {
    font-size: 16px;
    font-weight: lighter;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 24px;
`;

const Layout = ({ children }: LayoutProps) => (
  <>
    <Helment>
      <meta property='og:site_name' content='TIN WOODMAN' />
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
