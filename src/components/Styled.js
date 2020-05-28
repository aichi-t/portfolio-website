import styled from "styled-components"

export const StyledContainer = styled.div`
  margin: 2rem 7vw;
  /* margin: 2rem 7rem; */
  min-height: 100vh;
  /* background-color: black; */
`

export const SectionTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`
export const SocialLink = styled.a`
  padding: 0;
  color: black;
  &:hover {
    color: gray;
  }
  /* background-color: inherit; */
  /* border: none; */
`

const media = {
  xs: styles => `
    @media only screen and (min-width:480px){
        ${styles}
    }
    `,
  s: styles => `
    @media only screen and (min-width:43em){
        ${styles}
    }
  `,

  md: styles => `
    @media only screen and (min-width:62em){
        ${styles}
    }
  `,
}

export const Grid = styled.div``

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props =>
    props.collapse &&
    media[props.collapse](`
    display:none
  `)}
`

export const Col = styled.div`
  /* flex: ${props => props.size}; */
  ${props =>
    props.xs &&
    media["xs"](`
    flex:${props.xs}
  `)}

  ${props =>
    props.s &&
    media["s"](`
    flex:${props.s}
  `)}

  ${props =>
    props.md &&
    media["md"](`
    flex:${props.md}
  `)}


  ${props =>
    props.collapse &&
    media[props.collapse](`
    display:none
  `)}
`
