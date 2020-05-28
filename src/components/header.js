import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 1rem 4vw;
  min-height: 1.5rem;
  /* background-color: black; */
`

const Header = () => <StyledHeader></StyledHeader>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
