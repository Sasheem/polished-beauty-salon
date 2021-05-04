import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

// local components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from '../components/banner'
import Services from '../components/services'

// styled components
const Section = styled.section`
  // padding-top: 256px;
  // padding-bottom: 304px;
  
  // active when browser window is 600px or smaller
  @media only screen and (max-width: 600px) {
    margin-top: 128px;
  }
`

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Banner />
      <Services />
    </Layout>
  )
}

export default IndexPage
