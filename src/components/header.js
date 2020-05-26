import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 1rem 4vw;
  min-height: 1.5rem;
  background-color: black;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {/* {siteTitle} */}
      </Link>
    </h1>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
