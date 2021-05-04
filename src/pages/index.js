import * as React from 'react'

// local components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from '../components/banner'
import Services from '../components/services'
import IndexGallery from '../components/indexGallery'
import IndexContact from '../components/indexContact'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Banner />
      <Services />
      <IndexGallery />
      <IndexContact />
    </Layout>
  )
}

export default IndexPage
