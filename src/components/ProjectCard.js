import React from "react"
import styled from "styled-components"
import ProjectCardBig from "./ProjectCardBig"
import ProjectCardItem from "./ProjectCardItem"

const CardWrapStyles = styled.div`
  width: 640px;
  margin: 4rem auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
`

const ProjectCard = () => {
  return (
    <div>
      <ProjectCardBig />
      <CardWrapStyles>
        <ProjectCardItem />
        <ProjectCardItem />
        <ProjectCardItem />
        <ProjectCardItem />
      </CardWrapStyles>
    </div>
  )
}

export default ProjectCard
