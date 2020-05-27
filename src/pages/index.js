import React from "react"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Experince from "../components/Experience"
import Contact from "../components/Contact"
// import { Link } from "gatsby"
// import styled from "styled-components"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import config from "../../config"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero socialLinks={config.socialLinks} />
    <Projects projects={config.projects} />
    <Experince experiences={config.experiences} />
    <Contact />
  </Layout>
)

export default IndexPage
