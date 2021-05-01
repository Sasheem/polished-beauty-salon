import * as React from 'react'
import styled from 'styled-components'

// local components
import Layout from '../components/layout'
import Seo from '../components/seo'

// markup
const Gallery = () => (
    <Layout>
        <Seo title='Salon Gallery' />
        <h1>Gallery</h1>
        <p>Gallery images will go here in grid style layout</p>
    </Layout>
)

export default Gallery