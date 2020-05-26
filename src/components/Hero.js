import React from "react"
import styled from "styled-components"

const HeroContainer = styled.div`
  text-align: center;
  margin-top: 200px;
  margin-bottom: 300px;
`
const HeroTitle = styled.h1`
  font-size: 4rem;
  margin: 0;
`

const HeroSubTitle = styled.h3`
  color: gray;
  font-weight: lighter;
`
const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Aichi Tsuchihira</HeroTitle>
      <HeroSubTitle>I am a Software Engineer based in Melbourne</HeroSubTitle>
    </HeroContainer>
  )
}

export default Hero
