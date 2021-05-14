/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

// global styles
import { GlobalStyle } from '../theme/globalStyles'

// local components
import Navbar from './navbar'
import Footer from './footer'


// styled components

const Container = styled.div``
const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.5em;
`
// const Footer = styled.footer`
// 	margin-top: 40vh;
// 	padding-bottom: 10vh;
// 	display: flex;
//   flex-direction: column;
//   align-items: center;
// 	justify-content: center;
//   p {
//     margin: 0;
//     padding: 0;
//   }
// `

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Main>{children}</Main>
        <Footer />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
