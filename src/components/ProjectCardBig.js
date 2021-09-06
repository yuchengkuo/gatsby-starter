import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CardStyles = styled.div`
  background: radial-gradient(
      80.1% 80.1% at 50% 50%,
      rgba(29, 30, 33, 0) 0%,
      rgba(29, 30, 33, 0.5) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 40.34%, #1a1a1a 99.99%);
  background-color: var(--black);
  color: var(--white);
  width: 640px;
  height: 320px;
  padding: 1rem;
  margin: 8rem auto;
  position: relative;
  filter: var(--dropshadow);

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    color: var(--white);
  }

  .text-wrap {
    width: 60%;
    position: absolute;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  transition: all 200ms ease-out;

  &:hover {
    transform: scale(103%);
    filter: drop-shadow(0px 4px 52px rgba(0, 0, 0, 0.2));
  }
`

const ProjectCardBig = ({ title, tags }) => {
  return (
    <>
      <CardStyles>
        <Link to="/">
          <div className="text-wrap">
            <p className="cap">Project Management, Engineering</p>
            <h4>Building the first FS racecar to compete FS event.</h4>
          </div>
        </Link>
      </CardStyles>
    </>
  )
}

export default ProjectCardBig
