import React from "react"
import styled from "styled-components"
import { SectionTitle } from "./Styled"

const JobTitle = styled.h3``
const Experience = ({ experiences }) => {
  return (
    <div>
      <SectionTitle>Experience</SectionTitle>
      {experiences.map((experience, i) => (
        <>
          <JobTitle>{experience.jobTitle}</JobTitle>
        </>
      ))}
    </div>
  )
}

export default Experience
