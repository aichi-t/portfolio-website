import React from "react"
import styled from "styled-components"
import { SectionTitle } from "./Styled"
import { Row, Col } from "react-awesome-styled-grid"

const ProjectContainer = styled(Col)`
  margin-bottom: 40px;
  border: 1px solid #d1d5da;
  border-radius: 5px;
  padding: 1.5rem 1rem !important;
`

const ProjectDescription = styled.p`
  color: gray;
  font-weight: 300;
`

const ProjectLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: gray;
  &:hover {
    text-decoration: underline;
  }
`

const Projects = ({ projects }) => {
  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <Row style={{ margin: 0, justifyContent: "space-between" }}>
        {projects.map((project, i) => (
          <ProjectContainer key={i} xs={4} md={3.9}>
            <h2>{project.title}</h2>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.url} target="_blank">
              View Demo
            </ProjectLink>
          </ProjectContainer>
        ))}
      </Row>
    </div>
  )
}

export default Projects
