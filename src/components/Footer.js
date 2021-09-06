import { Link } from "gatsby"
import React from "react"
import LogoURL from "../assets/images/logo.svg"

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={LogoURL} alt="logo" />
      </Link>
      <h5>&copy;YuCheng Kuo 2021-</h5>
    </footer>
  )
}

export default Footer
