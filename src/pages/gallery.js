import * as React from 'react'

// local components
import { Section, Heading1, BodyText1 } from '../components/common'
import Layout from '../components/layout'
import Seo from '../components/seo'

// markup
const Gallery = () => (
    <Layout>
        <Seo title='Salon Gallery' />
        <Section>
            <Heading1>Gallery</Heading1>
            <BodyText1>Grid layout of gallery images.</BodyText1>
        </Section>
    </Layout>
)

export default Gallery