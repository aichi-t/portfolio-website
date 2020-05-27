import React from "react"
import styled from "styled-components"
import { SectionTitle } from "./Styled"

const ExperienceContainer = styled.div`
  margin-bottom: 2rem;
`
const JobTitle = styled.h2`
  /* margin: 1rem 0; */
  margin: 1rem 1rem 1rem 0;
  display: inline-block;
`
const CompanyName = styled.h3`
  /* margin: 1rem 0; */
  font-size: 20px;
  color: gray;
  font-weight: lighter;
  display: inline-block;
`
const Roles = styled.ul`
  /* list-style: */
  /* margin: 0; */
  padding-left: 1rem;
  color: gray;
`

const Role = styled.li`
  margin-bottom: 1rem;
`
const Experience = ({ experiences }) => {
  return (
    <div>
      <SectionTitle>Experience</SectionTitle>
      {experiences.map((experience, i) => (
        <ExperienceContainer key={i}>
          <JobTitle>{experience.jobTitle}</JobTitle>
          <CompanyName>{experience.company}</CompanyName>
          <Roles>
            {experience.roles.map((role, i) => {
              return <Role key={i}>{role}</Role>
            })}
          </Roles>
        </ExperienceContainer>
      ))}
    </div>
  )
}

export default Experience
