import React from "react"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Experince from "../components/Experience"
import Contact from "../components/Contact"

import Layout from "../components/layout"
import SEO from "../components/seo"
import config from "../../config"

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <Hero socialLinks={config.socialLinks} />
    <Projects projects={config.projects} />
    <Experince experiences={config.experiences} />
    <Contact />
  </Layout>
)

export default IndexPage
