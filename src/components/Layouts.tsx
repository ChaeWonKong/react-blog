import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface LayoutProps {
  children: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    background: #eaeaea;
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
  }
`;

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    { children }
  </>
);

export default Layout;
