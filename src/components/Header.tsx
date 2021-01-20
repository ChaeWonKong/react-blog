import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  width: 100%;
  /* height: 56px; */
  /* background: linear-gradient(90deg, #97B0C5 0%, #DFDBD6 58.33%); */
  border-bottom: 1px solid #707070;
  display: flex;
  align-items: center;
  padding: 12px 24px;

  & > a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  background-color: transparent;
  font-family: 'Audiowide', cursive;
  cursor: pointer;
`;

const Header = () => (
  <Wrapper>
    <Link to='/'><Title>TIN WOODMAN</Title></Link>
  </Wrapper>
);

export default Header;
