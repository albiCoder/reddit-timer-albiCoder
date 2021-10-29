/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import SROnly from './SROnly.style';

const Navigation = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  padding: 0 8rem;
`;
const Logo = styled.div`
  width: 15rem;
  height: 3.6rem;
  `;
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 26rem;
  letter-spacing: .05rem;
  font-size: 1.5rem;
`;
const Img = styled.img`
  display: flex;
  height: 100%;
`;

const Header = () => (
  <Navigation>
    <Link to="/">
      <Logo>
        <Img src="images/logo.svg" alt="reddit logo" />
      </Logo>
      <SROnly>logo.svg</SROnly>
    </Link>
    <Links>
      <Link to="/search/javascript">
        Search
      </Link>
      <Link to="/#how-it-works">
        How it works
      </Link>
      <Link to="/#about">
        About
      </Link>
    </Links>
  </Navigation>
);

export default Header;
