import React from "react"
import { Link } from "gatsby"
import Logo from "../assets/images/Logo.svg"
import styled from "styled-components"

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3.2rem 0;

  ul {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    color: var(--gray);
  }

  a {
    transition: all 150ms ease-out;
    &:hover {
      color: var(--white);
    }
  }
`

const Nav = () => (
  <NavStyles>
    <div id="logo">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="/">Send a message</a>
        </li>
      </ul>
    </nav>
  </NavStyles>
)

export default Nav
