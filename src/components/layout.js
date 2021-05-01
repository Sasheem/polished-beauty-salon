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

import Navbar from './navbar'
import Header from "./header"
import { GlobalStyle } from '../theme/globalStyles'

// styled components
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`
const Main = styled.main``
const Footer = styled.footer`
	margin-top: 40vh;
	padding-bottom: 10vh;
	display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: center;
  p {
    margin: 0;
    padding: 0;
  }
`

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
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} />  */}
      <Container>
        <Main>{children}</Main>
        <Footer>
          <p>Developed by {` `}
            <a href='https://sasheem.dev'>{data.site.siteMetadata.author}</a>
          </p>
          <p>Polished Beauty Salon © {new Date().getFullYear()}</p>          
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
