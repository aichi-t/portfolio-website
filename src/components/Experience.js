import React from "react"
import styled from "styled-components"
import { SectionTitle } from "./Styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ExperienceContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
`

const JobDescription = styled.div`
  /* margin-left: 3vw; */
`
const JobTitle = styled.h2`
  /* margin: 1rem 0; */
  font-size: 20px;
  margin: 0.5rem 1rem 1rem 0;
  display: inline-block;
`
const CompanyName = styled.p`
  /* margin: 1rem 0; */
  margin-top: 0;
  margin-bottom: 1rem;
  /* color: gray; */
  font-weight: 400;
  display: inline-block;
  @media (max-width: 768px) {
    display: block;
  }
`
const Roles = styled.ul`
  /* list-style: */
  /* margin: 0; */
  padding-left: 1rem;
  color: gray;
  margin: 0;
`

const Image = styled(Img)`
  /* margin-left: 2rem; */
  margin-right: 3vw;
  margin-top: 1rem;
  /* padding-top: 10px; */
  @media (max-width: 768px) {
    display: none !important;
  }
`

const FakeImage = styled.div`
  margin-right: 3vw;
  margin-top: 20px;
  width: 80px;
  height: 80px;
  @media (max-width: 768px) {
    display: none;
  }
`

const Role = styled.li`
  margin-bottom: 1rem;
`
const Experience = ({ experiences }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          id
          name
          childImageSharp {
            fixed(width: 90, height: 90) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  let imageList = {}
  images.map(
    image => (imageList[image["name".toLowerCase()]] = image["childImageSharp"])
  )

  return (
    <div style={{ marginBottom: "3rem" }}>
      <SectionTitle>Experience</SectionTitle>
      {experiences.map((experience, i) => (
        <ExperienceContainer key={i}>
          {imageList[experience.company.toLowerCase()] ? (
            <Image fixed={imageList[experience.company.toLowerCase()].fixed} />
          ) : (
            <FakeImage />
          )}
          <JobDescription>
            <JobTitle>{experience.jobTitle}</JobTitle>
            <CompanyName>- {experience.company} -</CompanyName>
            <Roles>
              {experience.roles.map((role, i) => {
                return <Role key={i}>{role}</Role>
              })}
            </Roles>
          </JobDescription>
        </ExperienceContainer>
      ))}
    </div>
  )
}

export default Experience
