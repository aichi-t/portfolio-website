import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./styles.css"
import { StyledContainer } from "./Styled"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StyledContainer>
        <main>{children}</main>
      </StyledContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
