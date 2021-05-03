import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

// local components
import { Heading1, SubHeading } from '../components/common'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from '../components/services'

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
      <Heading1>
        Hi my name is Alina {' '}
        <span role='img' aria-label='Manicure emoji'>
          💅
        </span>
      </Heading1>
      <SubHeading>
        Nailtech located in Coral Springs, FL.{' '}
      </SubHeading>
    </Section>
    <Services />
  </Layout>
)

export default IndexPage
