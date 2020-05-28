import React from "react"
import styled from "styled-components"
import { SectionTitle } from "./Styled"
import { Row, Col } from "react-awesome-styled-grid"
import config from "../../config"

const ProjectsContainer = styled.div`
  /* margin: 3rem 0; */
  margin-bottom: 3rem;
`
const ProjectContainer = styled(Col)`
  margin-bottom: 40px;
  border: 1px solid #d1d5da;
  border-radius: 5px;
  padding: 1.5rem 1rem !important;
`

const ProjectDescription = styled.p`
  color: gray;
  font-weight: 300;
  min-height: 40px;
  margin-bottom: 0.7rem;
`

const ProjectLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  color: #1e799e;
  &:hover {
    text-decoration: underline;
  }
`

const ViewAllProjects = styled.a`
  text-decoration: none;
  color: gray;
  &:hover {
    text-decoration: underline;
  }
`
const ViewAllContainer = styled.div`
  text-align: right;
`

const Projects = ({ projects }) => {
  console.log(projects)
  return (
    <ProjectsContainer>
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
      <ViewAllContainer>
        <ViewAllProjects href={config.socialLinks[0].url} target="_blank">
          View All Projects →
        </ViewAllProjects>
      </ViewAllContainer>
    </ProjectsContainer>
  )
}

export default Projects
