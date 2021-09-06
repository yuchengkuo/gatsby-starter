import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CardStyles = styled.div`
  width: 300px;
  height: 400px;
  background: radial-gradient(
      80.1% 80.1% at 50% 50%,
      rgba(29, 30, 33, 0) 0%,
      rgba(29, 30, 33, 0.5) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 40.34%, #1a1a1a 99.99%);
  // Add background image
  /* background: ; */
  background-color: var(--black);
  color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.8rem;

  padding: 1rem;
  filter: var(--dropshadow);
`

const ProjectCardItem = () => {
  return (
    <>
      <Link to="/">
        <CardStyles>
          <p className="cap">UX, UI Design</p>
          <h4>Redesign search process for train timetable app.</h4>
        </CardStyles>
      </Link>
    </>
  )
}

export default ProjectCardItem
