import * as React from 'react'

// local components
import { Section, Heading1, BodyText1 } from '../components/common'
import Layout from '../components/layout'
import Seo from '../components/seo'

// markup
const Contact = () => (
    <Layout>
        <Seo title='Salon Contact' />
        <Section>
            <Heading1>Contact</Heading1>
            <BodyText1>Contact form goes here.</BodyText1>
        </Section>
    </Layout>
)

export default Contact