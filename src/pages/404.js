import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
`
const HomeLink = styled(Link)`
  text-decoration: none;
  color: gray;
  &:hover {
    text-decoration: underline;
  }
`
const NotFoundPage = () => (
  <Layout>
    <SEO itle="404: Not found" />
    <Container>
      <h1 style={{ marginBottom: 16 }}>Not Found</h1>
      <HomeLink href="/">Go back to home</HomeLink>
    </Container>
  </Layout>
)

export default NotFoundPage
