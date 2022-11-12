import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src="./images/logo.svg" alt="logo" />
      </NavLink>
    </header>
  )
}

export default Header