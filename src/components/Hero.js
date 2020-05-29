import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { SocialLink } from "./Styled"

const HeroContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  height: 73vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const HeroTitle = styled.h1`
  font-size: 4rem;
  margin: 0;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const HeroSubTitle = styled.h3`
  color: gray;
  margin-bottom: 3rem;
  font-weight: lighter;
`

const IconContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  justify-content: center;
  /* justify-content: space-between; */
  width: 40%;
  margin: 0 auto;
`

const icons = {
  GitHub: (
    <FaGithub style={{ height: 40, width: 40, marginRight: 30 }} alt="github" />
  ),
  LinkedIn: <FaLinkedinIn style={{ height: 40, width: 40 }} alt="linkedin" />,
}

const Hero = ({ socialLinks }) => {
  return (
    <HeroContainer>
      <HeroTitle>Aichi Tsuchihira</HeroTitle>
      <HeroSubTitle>I am a Software Engineer based in Melbourne</HeroSubTitle>
      <IconContainer>
        {socialLinks.map((link, i) => (
          <SocialLink key={i} href={link.url} target="_blank" rel="noopener">
            {icons[link.name]}
          </SocialLink>
        ))}
      </IconContainer>
    </HeroContainer>
  )
}

export default Hero
