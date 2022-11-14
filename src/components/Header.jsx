import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
  return (
    <Mainheader>
      <NavLink to="/">
        <img src="./images/logo.svg" alt="logo" className='logo' style={{height: 100, width: 200}}/>
      </NavLink>
      <Navbar/>
    </Mainheader>
  )
};

const Mainheader = styled.header `
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 3rem;
  }
`;

export default Header