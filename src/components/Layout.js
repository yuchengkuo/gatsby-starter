import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import Footer from "./Footer"
import Nav from "./Nav"

// for container
const ContainerStyles = styled.div`
  max-width: 960px;
  margin: 0 auto;
  /* background-color: var(--white); */
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContainerStyles>
        <Nav />
        {children}
        <Footer />
      </ContainerStyles>
    </>
  )
}
