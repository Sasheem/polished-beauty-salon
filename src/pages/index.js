import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"

// styled components
const HeadingStyled = styled.h1``
const HeadingAccent = styled.p``
const Section = styled.section`
  padding-top: 256px;
  padding-bottom: 304px;

  // active when browser window is 600px or smaller
  @media only screen and (max-width: 600px) {
    margin-top: 128px;
  }
`

// markup
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Section>
      <HeadingStyled>
        Hi my name is Alina {' '}
        <span role='img' aria-label='Manicure emoji'>
          💅
        </span>
      </HeadingStyled>
      <HeadingAccent>
        Nailtech located in Coral Springs, FL.{' '}
      </HeadingAccent>
    </Section>
  </Layout>
)

export default IndexPage
