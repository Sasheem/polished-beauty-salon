import * as React from 'react'
import styled from 'styled-components'

// local components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from '../components/banner'
import Services from '../components/services'

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
